class Suscription {
    constructor(suscription) {
        this._id = suscription._id;
        this.subject = suscription.subject;
        this.mail = suscription.mail;
    }

    updateSuscription(suscription){
        this._id = suscription._id;
        this.subject = suscription.subject;
        this.mail = suscription.mail;
    }
}

export default Suscription;