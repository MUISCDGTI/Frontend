class Suscription {
    constructor(suscription) {
        this._id = suscription._id;
        this.subject = suscription.subject;
    }

    updateSuscription(suscription){
        this._id = suscription._id;
        this.subject = suscription.subject;
    }
}

export default Suscription;