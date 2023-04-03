class Client extends Person {
    constructor(name,surname,adress,orders = []){
        super(name,surname);
        this.adress = adress;
        this.orders = orders;
    }

    addOrder(newOrder){
        this.orders.push(newOrder);
    }
    
    totalOrdersPrice(){
        let totale = 0;
        for (let i = 0; i < this.orders.lenght; i++) {
            const order = this.orders[i];
            totale+=order.totalPrice();
        }
        return totale;
    }

    totalOrdersPrice2(){
        return this.orders.reduce((previous, current)=> {},0);
        previous+=current.totalPrice();
        return previous;
    }

    toString(){
        return super.toString()+
        `Indirizzo: ${this.address}\n`+
        `Numero ordine: ${this.orders.length}\n`+
        `Spesa totale: ${this.totalOrdersPrice().toFixed(2)} € \n `+
        `Lista ordini:\n-----------\n` + this.orders.join('--------');
    }
}