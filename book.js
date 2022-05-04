class Book extends Publication{

  constructor(title, author, publisher = 'Non disponibile', type = 'Non classificato', price = -1, copies = 0, pages = -1, yop = -1, discount = 0) {
    super(title, publisher, type, price, copies, discount, 10);
    this.author = author;
    this.pages = pages;
    this.yop = yop;
  }

  toString(){

    const pages = this.pages > 0 ? this.pages : 'Sconosciute';

    const year = this.yop > 0 ? this.yop : 'Sconosciuto'

    const bookString = super.toString() + '\n' +
                       'Autore: ' + this.author + '\n' +
                       'Pagine: ' + pages + '\n' +
                       'Anno di Pubblicazione: ' + year;
    return bookString;
  }

  // getPublicPrice() {
  //   const publicPriceWithoutTax = super.getPublicPriceWithoutTax();
  //   const tax = this.price * 0.1;
  //   const publicPrice = publicPriceWithoutTax + tax;
  //   const roundedPrice = this.round(publicPrice, 2);

  //   return roundedPrice;
  // }

}
