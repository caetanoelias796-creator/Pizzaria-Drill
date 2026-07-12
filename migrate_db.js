const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Load credentials
const serviceAccount = require('./pizzaria-drill-firebase-adminsdk-fbsvc-2a5d317767.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// Helper to write document to Firestore
async function writeDocument(collectionPath, docId, data) {
    await db.collection(collectionPath).doc(docId).set(data);
    console.log(`Successfully wrote doc: ${collectionPath}/${docId}`);
}

async function runMigration() {
    console.log('Reading app.js from backup to extract static data...');
    const appJsContent = fs.readFileSync(path.join(__dirname, 'backup_pizzaria_drill', 'app.js'), 'utf8');
    
    // Extract MENU_ITEMS using simple extraction
    const menuStartIdx = appJsContent.indexOf('let MENU_ITEMS = {');
    const menuEndIdx = appJsContent.indexOf('let BORDAS = {');
    if (menuStartIdx === -1 || menuEndIdx === -1) {
        throw new Error('Could not find MENU_ITEMS or BORDAS in app.js');
    }
    
    const menuJsCode = appJsContent.substring(menuStartIdx, menuEndIdx).trim() + ';';
    
    // Evaluate JavaScript code to get variables
    const sandbox = {};
    const evalFunc = new Function('sandbox', menuJsCode + '\nsandbox.MENU_ITEMS = MENU_ITEMS;');
    evalFunc(sandbox);
    const MENU_ITEMS = sandbox.MENU_ITEMS;
    
    // Extract other static structures
    const BORDAS = {
        'sem-borda': { name: 'Sem Borda', price: 0 },
        'catupiry': { name: 'Catupiry Original', price: 10.00 },
        'cheddar': { name: 'Cheddar Cremoso', price: 10.00 },
        'chocolate': { name: 'Chocolate Preto', price: 12.00, category: 'doces' },
        'chocolate-branco': { name: 'Chocolate Branco', price: 12.00, category: 'doces' },
        'doce-de-leite': { name: 'Doce de Leite', price: 12.00, category: 'doces' }
    };
    
    const TAXAS_ENTREGA = {
        'centro': { name: 'Centro', fee: 10.00 },
        'logradouro': { name: 'Logradouro', fee: 10.00 },
        'juriti': { name: 'Juriti', fee: 10.00 },
        'pousada': { name: 'Pousada', fee: 15.00 },
        'bavaria': { name: 'Bavária', fee: 15.00 },
        'pia': { name: 'Pia', fee: 15.00 },
        'vila-rica': { name: 'Vila Rica', fee: 18.00 },
        'vale-verde': { name: 'Vale Verde', fee: 18.00 },
        'vila-germania': { name: 'Vila Germânia', fee: 18.00 },
        'linha-imperial': { name: 'Linha Imperial', fee: 22.00 },
        'vila-olinda': { name: 'Vila Olinda', fee: 25.00 }
    };
    
    const ACAI_FREE_ADDITIONS = [
        "Leite em Pó", "Leite Condensado", "Granola", "Banana", "Cacau em Pó", "Farofa de Amendoim", "Granulado"
    ];
    const ACAI_PAID_5 = [
        "Nutella", "Kinder Bueno", "Morango", "Uva", "M&Ms", "Ouro Branco", "KitKat"
    ];
    const ACAI_PAID_2_5 = [
        "Stikadinho", "Prestigio", "Doce de Leite"
    ];
    
    console.log('Extracted static variables successfully.');
    
    // 1. Write CONFIG
    console.log('Writing config collection...');
    await writeDocument('config', 'status', { isOpen: true, open: true });
    await writeDocument('config', 'settings', {
        whatsapp: '5554996704189',
        whatsappFormatted: '(54) 99670-4189',
        promoActive: true,
        promoPrice: 95.00,
        promoSize: 'G'
    });
    await writeDocument('config', 'delivery_fees', TAXAS_ENTREGA);
    
    // 2. Write CATEGORIAS
    console.log('Writing categorias collection...');
    const categories = [
        { id: 'pizzas', name: 'Pizzas', icon: '🍕', order: 1 },
        { id: 'lanches', name: 'Lanches', icon: '🍔', order: 2 },
        { id: 'calzones', name: 'Calzones', icon: '🥟', order: 3 },
        { id: 'bebidas', name: 'Bebidas', icon: '🥤', order: 4 },
        { id: 'acais', name: 'Açaís', icon: '🍧', order: 5 }
    ];
    for (const cat of categories) {
        await writeDocument('categorias', cat.id, cat);
    }
    
    // 3. Write BANNERS
    console.log('Writing banners...');
    const banners = [
        { id: 'banner1', tag: 'Promoção', title: 'Pizzas Promocionais G', subtitle: 'Selecione apenas sabores promocionais e pague preço único fixo!', gradient: 'linear-gradient(135deg, #b71c1c 0%, #1a0a0a 100%)' },
        { id: 'banner2', tag: 'Forno de Pedra', title: 'Massa Fina & Crocante', subtitle: 'Ingredientes frescos selecionados diariamente', gradient: 'linear-gradient(135deg, #ffd600 0%, #3e2723 100%)' }
    ];
    for (const b of banners) {
        await writeDocument('banners', b.id, b);
    }
    
    // 4. Write PRODUTOS (Flavors, Simple Items, Borders, Açaí Additions)
    console.log('Writing produtos collection...');
    
    // Helper to map and write items
    const writeItems = async (items, category, type = '') => {
        for (const item of items) {
            const docData = {
                ...item,
                category,
                available: item.available !== false
            };
            if (type) docData.subcategory = type;
            await writeDocument('produtos', item.id, docData);
        }
    };
    
    // Pizzas
    if (MENU_ITEMS.pizzas) {
        await writeItems(MENU_ITEMS.pizzas, 'pizzas');
    }
    
    // Lanches
    if (MENU_ITEMS.lanches) {
        await writeItems(MENU_ITEMS.lanches, 'lanches');
    }
    
    // Calzones
    if (MENU_ITEMS.calzones) {
        await writeItems(MENU_ITEMS.calzones, 'calzones');
    }
    
    // Bebidas
    if (MENU_ITEMS.bebidas) {
        await writeItems(MENU_ITEMS.bebidas, 'bebidas');
    }
    
    // Açaí Base Sizes
    const acaiSizes = [
        { id: "acai_300ml", name: "Açaí 300ml", description: "Escolha até 3 adicionais grátis inclusos no copo.", price: 17.00, image: "assets/acai_hero.png", size: "300ml", maxFree: 3 },
        { id: "acai_500ml", name: "Açaí 500ml", description: "Escolha até 4 adicionais grátis inclusos no copo.", price: 24.00, image: "assets/acai_hero.png", size: "500ml", maxFree: 4 },
        { id: "acai_700ml", name: "Açaí 700ml", description: "Escolha até 5 adicionais grátis inclusos no copo.", price: 30.00, image: "assets/acai_hero.png", size: "700ml", maxFree: 5 }
    ];
    await writeItems(acaiSizes, 'acais');
    
    // Pizza Borders
    for (const [key, border] of Object.entries(BORDAS)) {
        await writeDocument('produtos', `borda_${key}`, {
            id: `borda_${key}`,
            name: border.name,
            price: border.price,
            category: 'bordas',
            subcategory: border.category || 'salgadas',
            available: true
        });
    }
    
    // Açaí Additions
    const writeAdditions = async (list, price, type) => {
        for (const name of list) {
            const cleanId = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '_');
            await writeDocument('produtos', `add_${cleanId}`, {
                id: `add_${cleanId}`,
                name,
                price,
                category: 'acai_adicionais',
                type, // 'free', 'paid_5', 'paid_2.5'
                available: true
            });
        }
    };
    
    await writeAdditions(ACAI_FREE_ADDITIONS, 0, 'free');
    await writeAdditions(ACAI_PAID_5, 5.00, 'paid_5');
    await writeAdditions(ACAI_PAID_2_5, 2.50, 'paid_2.5');
    
    console.log('Migration finished successfully!');
}

runMigration().catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
});
