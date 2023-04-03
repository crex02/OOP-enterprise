class Employee extends Person {
    constructor(name,surname,clients = []) {
        super(name,surname);
        this.clients = clients;
    }

    addClient (newClient){
        this.clients.push(newClient);
    }

    removeClient (exClient){
        let client = this.clients;
        for (let i = 0; i < clients.length; i++) {
            if (exClient !== clients[i]) {
                clients.splice(i,1);
            };
        };
    }

    totalEarnings(){
        let clients = this.clients;
        let sum = 0;
        for (let i = 0; i < clients.length; i++) {
            sum += clients[i].totalOrdersPrice(); 
        };
        return sum;
    }

    bestClient(){
        let clients = this.clients;
        let best = clients[0];
        for (let i = 1; i < array.length; i++) {
            if (best.totalOrdersPrice() < clients[i].totalOrdersPrice()) {
                best = clients [i];
            };
        
        };
        return best;
    }

    toString(){
        return super.toString() + 
        'Numero clienti:' + this.clients.length + '\n'+
        'Guadagno totale:' + this.totalEarnings()+ '\n'+
        'Miglior cliente:\n\n' + this.bestClient().toString();

    }

}