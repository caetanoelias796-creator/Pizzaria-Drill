// Cart state management and storage persistence service
const CartService = {
    cart: [],
    
    getCart() {
        return this.cart;
    },
    
    setCart(newCart) {
        this.cart = newCart || [];
        this.saveCartToLocalStorage();
    },

    loadCartFromLocalStorage() {
        const stored = localStorage.getItem('fina_massa_cart');
        if (stored) {
            try {
                this.cart = JSON.parse(stored);
            } catch (e) {
                this.cart = [];
            }
        } else {
            this.cart = [];
        }
        return this.cart;
    },

    saveCartToLocalStorage() {
        localStorage.setItem('fina_massa_cart', JSON.stringify(this.cart));
    },

    addToCart(item) {
        if (item.type === 'simple') {
            const existingIndex = this.cart.findIndex(cItem => cItem.type === 'simple' && cItem.id === item.id);
            if (existingIndex > -1) {
                this.cart[existingIndex].quantity += item.quantity || 1;
                this.cart[existingIndex].totalPrice = this.cart[existingIndex].quantity * this.cart[existingIndex].singlePrice;
            } else {
                this.cart.push(item);
            }
        } else {
            this.cart.push(item);
        }
        this.saveCartToLocalStorage();
        return this.cart;
    },

    updateCartQty(index, delta) {
        if (index >= this.cart.length || index < 0) return this.cart;
        
        this.cart[index].quantity += delta;
        if (this.cart[index].quantity <= 0) {
            this.cart.splice(index, 1);
        } else {
            this.cart[index].totalPrice = this.cart[index].quantity * this.cart[index].singlePrice;
        }
        this.saveCartToLocalStorage();
        return this.cart;
    },

    clearCart() {
        this.cart = [];
        this.saveCartToLocalStorage();
        return this.cart;
    },

    calculateSubtotal() {
        return this.cart.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
    },

    calculateTotal(deliveryFee, isCash = false) {
        const subtotal = this.calculateSubtotal();
        let total = subtotal + (deliveryFee || 0);
        if (isCash) {
            total = (subtotal * 0.95) + (deliveryFee || 0);
        }
        return total;
    }
};
