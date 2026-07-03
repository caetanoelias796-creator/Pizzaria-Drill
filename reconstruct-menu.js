const fs = require('fs');

const content = fs.readFileSync('parsed_columns.txt', 'utf8');
const sections = content.split('===================');

let pizzas = [];
let currentCategory = 'salgadas';

for (const section of sections) {
    if (!section.trim()) continue;
    const lines = section.split('\n');
    const pageHeader = lines[0].trim();
    
    let col1Text = [];
    let col2Text = [];
    let target = null;
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '--- COLUMN 1 ---') {
            target = col1Text;
        } else if (line === '--- COLUMN 2 ---') {
            target = col2Text;
        } else if (line) {
            if (target) target.push(line);
        }
    }
    
    processColumn(col1Text, pageHeader);
    processColumn(col2Text, pageHeader);
}

function processColumn(lines, pageHeader) {
    let items = [];
    for (const line of lines) {
        const match = line.match(/^\[y: (\d+), x: (\d+)\] (.*)$/);
        if (match) {
            items.push({
                y: parseInt(match[1]),
                x: parseInt(match[2]),
                text: match[3].trim()
            });
        }
    }
    
    items.sort((a, b) => a.y - b.y);
    
    // Group elements on the same line (Y within 8 units)
    let groupedLines = [];
    for (const it of items) {
        let last = groupedLines[groupedLines.length - 1];
        if (last && Math.abs(last.y - it.y) <= 8) {
            last.parts.push(it);
            last.text += ' ' + it.text;
        } else {
            groupedLines.push({
                y: it.y,
                text: it.text,
                parts: [it]
            });
        }
    }
    
    let i = 0;
    while (i < groupedLines.length) {
        const gl = groupedLines[i];
        const text = gl.text.trim();
        
        // Skip headers
        if (['Queijos', 'Frutos do Mar', 'Carnes', 'DIVERSOS', 'DIVERSAS', 'DOCES', 'Doces', 'OBSERVAÇÃO', 'Bordas DOCES', 'Bordas salgadas', 'Cardápio'].includes(text) || text.match(/^\d+$/)) {
            if (text === 'Doces' || text === 'DOCES') {
                currentCategory = 'doces';
            } else if (['Queijos', 'Frutos do Mar', 'Carnes', 'DIVERSOS', 'DIVERSAS'].includes(text)) {
                currentCategory = 'salgadas';
            }
            i++;
            continue;
        }
        
        // Skip price lines
        if (text.match(/^[BGF]:/i) || text.includes('B:R$') || text.includes('B:R')) {
            i++;
            continue;
        }
        
        // We have a name!
        let name = text;
        let description = '';
        let prices = null;
        
        i++;
        
        // Find description and prices
        while (i < groupedLines.length) {
            const nextGl = groupedLines[i];
            const nextText = nextGl.text.trim();
            
            if (['Queijos', 'Frutos do Mar', 'Carnes', 'DIVERSOS', 'DIVERSAS', 'DOCES', 'Doces', 'OBSERVAÇÃO', 'Bordas DOCES', 'Bordas salgadas', 'Cardápio'].includes(nextText) || nextText.match(/^\d+$/)) {
                break;
            }
            
            if (nextText.match(/^[BGF]:/i) || nextText.includes('B:R$') || nextText.includes('B:R')) {
                // Parse prices
                const priceStr = nextText;
                const bMatch = priceStr.match(/B:R?\$?\s*([\d,]+)/i);
                const mMatch = priceStr.match(/M:R?\$?\s*([\d,]+)/i);
                const gMatch = priceStr.match(/G:R?\$?\s*([\d,]+)/i);
                const fMatch = priceStr.match(/F:R?\$?\s*([\d,]+)/i);
                
                prices = { B: 0, M: 0, G: 0, F: 0 };
                if (bMatch) prices.B = parseFloat(bMatch[1].replace(',', '.'));
                if (mMatch) prices.M = parseFloat(mMatch[1].replace(',', '.'));
                if (gMatch) prices.G = parseFloat(gMatch[1].replace(',', '.'));
                if (fMatch) prices.F = parseFloat(fMatch[1].replace(',', '.'));
                
                i++;
                break;
            } else {
                // Description line
                if (description) description += ' ';
                description += nextText;
                i++;
            }
        }
        
        if (prices) {
            pizzas.push({
                name,
                description,
                category: currentCategory,
                prices
            });
        }
    }
}

// Post-process to merge split entries (e.g. if the name got split or name and description got separated weirdly)
let cleanPizzas = [];
for (const p of pizzas) {
    // If the name starts with "Molho de" or "Leite" or "Doce", it's probably a description of a previous pizza that got separated
    if (p.name.startsWith('Molho de') || p.name.startsWith('Leite ') || p.name.startsWith('Doce ') || p.name.startsWith('Creme ')) {
        let last = cleanPizzas[cleanPizzas.length - 1];
        if (last) {
            last.description = (last.description + ' ' + p.name + ' ' + p.description).trim();
            // keep the prices of the latter if they were 0 on the previous, or merge
            if (p.prices && p.prices.B > 0) last.prices = p.prices;
        }
    } else {
        // Clean up name anomalies
        let name = p.name;
        let desc = p.description;
        
        // e.g. "Molho de tomate, mussarela,atum Atum" -> name "Atum", description "Molho de tomate, mussarela, atum e orégano."
        if (name.includes('Atum') && name.includes('Molho')) {
            name = 'Atum';
            desc = 'Molho de tomate, mussarela, atum e orégano.';
        }
        
        cleanPizzas.push({
            name: name.trim(),
            description: desc.trim(),
            category: p.category,
            prices: p.prices
        });
    }
}

fs.writeFileSync('clean_pizzas.json', JSON.stringify(cleanPizzas, null, 2), 'utf8');
console.log(`Saved ${cleanPizzas.length} clean pizzas to clean_pizzas.json`);
