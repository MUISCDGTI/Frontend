class Suscription {
  constructor(suscription) {
    this._id = suscription._id;
    this.subject = suscription.subject;
    this.mail = suscription.mail;
    this.category = suscription.category;
  }

  updateSuscription(suscription) {
    this._id = suscription._id;
    this.subject = suscription.subject;
    this.mail = suscription.mail;
    this.category = suscription.category;
  }
}

export default Suscription;
