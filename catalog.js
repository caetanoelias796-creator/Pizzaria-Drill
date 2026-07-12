/* ==========================================================================
   Premium Mobile-First Catalog Logic - catalog.js
   ========================================================================== */

// 1. Mock Database representing the premium catalog products
// 1. Reactive Database representing the premium catalog products loading from Firestore
let CATALOG_PRODUCTS = [];

// Cart State Management
let cartCount = 0;

// 2. Initialize application lists on page load
document.addEventListener("DOMContentLoaded", () => {
    setupHeaderScrollEffect();
    
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        ProductsService.subscribeProducts((productsList) => {
            CATALOG_PRODUCTS = productsList.map(item => {
                let emoji = "🍕";
                if (item.category === "lanches") emoji = "🍔";
                else if (item.category === "calzones") emoji = "🥟";
                else if (item.category === "bebidas") emoji = "🥤";
                else if (item.category === "acais") emoji = "🍧";
                
                return {
                    id: item.id,
                    name: item.name,
                    category: item.category,
                    description: item.description || "",
                    price: item.price || (item.prices ? item.prices.G : 0) || 0,
                    emoji: emoji,
                    image: item.image || "assets/pizza_hero.png",
                    isPromo: item.isPromo || false,
                    discount: item.isPromo ? "-10%" : "",
                    bestSeller: item.isPromo || false
                };
            });
            renderPromoSection();
            renderBestSellers();
            renderRecommendedGrid("todos");
        });
    } else {
        console.warn("Firebase não carregado no catálogo. Usando fallback offline.");
        CATALOG_PRODUCTS = [
            {
                id: "pizza_calabresa",
                name: "Calabresa Gourmet",
                category: "pizzas",
                description: "Molho de tomate artesanal, mussarela, calabresa defumada especial e cebola roxa.",
                price: 89.00,
                emoji: "🍕",
                image: "assets/pizza_calabresa.png",
                isPromo: true,
                discount: "-10%",
                bestSeller: true
            }
        ];
        renderPromoSection();
        renderBestSellers();
        renderRecommendedGrid("todos");
    }
});

// 3. Render functions
function renderPromoSection() {
    const promoGrid = document.getElementById("promoGrid");
    if (!promoGrid) return;
    
    promoGrid.innerHTML = '';
    
    // Filter promotional products
    const promos = CATALOG_PRODUCTS.filter(p => p.isPromo);
    
    promos.forEach(product => {
        const promoCard = document.createElement("div");
        promoCard.className = "promo-mini-card";
        promoCard.innerHTML = `
            <div class="promo-mini-emoji">${product.emoji}</div>
            <h4 class="promo-mini-title">${product.name}</h4>
            <p class="promo-mini-desc">${product.description}</p>
            <div class="promo-mini-footer">
                <span class="promo-mini-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                <span class="discount-badge">${product.discount}</span>
            </div>
        `;
        // Make it clickable to add to cart as a shortcut
        promoCard.style.cursor = "pointer";
        promoCard.onclick = () => addToCart(product.name);
        
        promoGrid.appendChild(promoCard);
    });
}

function renderBestSellers() {
    const bestSellersScroll = document.getElementById("bestSellersScroll");
    if (!bestSellersScroll) return;
    
    bestSellersScroll.innerHTML = '';
    
    // Filter best sellers
    const bests = CATALOG_PRODUCTS.filter(p => p.bestSeller);
    
    bests.forEach(product => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "scroll-item-lg";
        itemContainer.innerHTML = `
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img class="product-img" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="product-image-placeholder" style="display: none;">${product.emoji}</div>
                </div>
                <div class="product-body">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                        <button class="add-to-cart-btn" onclick="addToCart('${product.name}')">+</button>
                    </div>
                </div>
            </div>
        `;
        bestSellersScroll.appendChild(itemContainer);
    });
}

function renderRecommendedGrid(categoryFilter) {
    const recommendedGrid = document.getElementById("recommendedGrid");
    if (!recommendedGrid) return;
    
    recommendedGrid.innerHTML = '';
    
    // Filter based on category select
    let filtered = CATALOG_PRODUCTS;
    if (categoryFilter !== "todos" && categoryFilter !== "promocoes") {
        filtered = CATALOG_PRODUCTS.filter(p => p.category === categoryFilter);
    } else if (categoryFilter === "promocoes") {
        filtered = CATALOG_PRODUCTS.filter(p => p.isPromo);
    }
    
    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image-wrapper">
                <img class="product-img" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="product-image-placeholder" style="display: none;">${product.emoji}</div>
            </div>
            <div class="product-body">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.name}')">+</button>
                </div>
            </div>
        `;
        recommendedGrid.appendChild(card);
    });
}

// 4. Category Filter Chip interaction
function filterCategory(category, buttonElement) {
    // 1. Remove active state from all chips
    const chips = document.querySelectorAll(".category-chip");
    chips.forEach(chip => chip.classList.remove("active"));
    
    // 2. Add active class to clicked chip
    if (buttonElement) {
        buttonElement.classList.remove("active"); // Safety
        buttonElement.classList.add("active");
    }
    
    // 3. Update the recommended catalog section title and contents
    const sectionTitle = document.querySelector("#recommendedSection .section-title");
    if (sectionTitle) {
        if (category === "todos") {
            sectionTitle.innerHTML = "⭐ Recomendadas para você";
        } else if (category === "promocoes") {
            sectionTitle.innerHTML = "🔥 Promoções Selecionadas";
        } else {
            const catName = category.charAt(0).toUpperCase() + category.slice(1);
            sectionTitle.innerHTML = `⭐ Principais ${catName}`;
        }
    }
    
    // 4. Render filtered list
    renderRecommendedGrid(category);
    
    // Show a quick visual indication
    showToast(`Filtrado por: ${category === 'todos' ? 'Todos os itens' : category.toUpperCase()}`);
}

// 5. Add to Cart interaction with bounce badge animation
function addToCart(itemName) {
    cartCount++;
    
    // Update footer badge count
    const badge = document.getElementById("cartBadgeCount");
    if (badge) {
        badge.innerText = cartCount;
        badge.style.display = "flex";
        
        // Retrigger pop animation
        badge.style.animation = "none";
        setTimeout(() => {
            badge.style.animation = "popIn 0.3s ease-out";
        }, 10);
    }
    
    // Play sound or vibration if API is available
    if (navigator.vibrate) {
        navigator.vibrate(30); // 30ms light haptic feedback
    }
    
    showToast(`🍽️ ${itemName} adicionado ao carrinho!`);
}

// 6. Navigation Tabs switching logic
function switchTab(tabId, tabElement) {
    // 1. Remove active class from all nav items
    const navItems = document.querySelectorAll(".navbar-item");
    navItems.forEach(item => item.classList.remove("active"));
    
    // 2. Add active class to clicked tab
    if (tabElement) {
        tabElement.classList.add("active");
    }
    
    showToast(`Navegando para: ${tabId.toUpperCase()}`);
    
    // Scroll content area back to top on navigation click
    const mainContent = document.getElementById("mainContent");
    if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// 7. Header scroll shadow effect
function setupHeaderScrollEffect() {
    const mainContent = document.getElementById("mainContent");
    const header = document.getElementById("appHeader");
    
    if (mainContent && header) {
        mainContent.addEventListener("scroll", () => {
            if (mainContent.scrollTop > 10) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }
}

// 8. Custom address modal drawers logic
function openAddressModal() {
    const modal = document.getElementById("addressModal");
    if (modal) {
        modal.classList.add("active");
    }
}

function closeAddressModal(event) {
    const modal = document.getElementById("addressModal");
    if (modal) {
        modal.classList.remove("active");
    }
}

function saveAddress() {
    const input = document.getElementById("addressInput");
    const display = document.getElementById("addressDisplay");
    
    if (input && display && input.value.trim() !== '') {
        const val = input.value.trim();
        display.innerText = val;
        showToast("📍 Endereço atualizado com sucesso!");
        closeAddressModal();
    }
}

// 9. Toast messaging system
function showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.className = "toast-item";
    toast.innerHTML = `<span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Auto remove toast item after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
