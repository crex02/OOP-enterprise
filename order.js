class Order {
    constructor(product, quantity, unitPrice){
        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    totalPrice(){
        return this.quantity * this.unitPrice;
    }

    toString(){
        return  `PRODOTTO: ${this.product}\n` + 
                `QUANTITA:' ${this.quantity} \n` +
                `PREZZO UNITARIO:' ${this.unitPrice.toFixed(2)}€\n`
                `PREZZO TOTALE:' ${this.totalPrice().toFixed(2)} \n`;
}

}