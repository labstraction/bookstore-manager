class Publication{


  constructor(title, publisher, type, price, copies, discount, tax) {
    this.title = title;
    this.publisher = publisher;
    this.type = type;
    this.price = price;
    this.copies = copies;
    this.discount = discount;
    this.tax = tax;
  }

  toString(){

    const publicPrice = this.getPublicPrice() > 0 ? this.getPublicPrice().toFixed(2) : 'Non disponibile'

    const pubString = 'Titlo: ' + this.title + '\n' +
                      'Casa Editrice: ' + this.publisher + '\n' +
                      'Genere: ' + this.type + '\n' +
                      'Price: ' + publicPrice + '€' + '\n' +
                      'Copie: ' + this.copies + '\n' +
                      'Sconto: ' + this.discount + '%';

    return pubString;

  }

  // getPublicPriceWithoutTax(){
  //   const discount = this.price * this.discount / 100;
  //   const margin = this.price * 0.3;
  //   const publicPriceWithoutTax = this.price - discount + margin;
  //   return publicPriceWithoutTax;
  // }

  getPublicPrice() {

    if(this.price < 0){
      return this.price;
    }

    const discount = this.price * this.discount / 100;
    const margin = this.price * 0.3;
    const tax = this.price * this.tax / 100
    const publicPrice = this.price + tax - discount + margin;
    const roundedPublicPrice = Publication.round(publicPrice, 2);
    return roundedPublicPrice;
  }

  static round(number, decimalPlace) {
    const roundedString = number.toFixed(decimalPlace);
    const roundedNumber = parseFloat(roundedString);
    return roundedNumber;
  }
}