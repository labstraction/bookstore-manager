class Book extends Publication{

  constructor(title, author, publisher, type, price, copies, pages, yop, discount) {
    super(title, publisher, type, price, copies, discount, 10);
    this.author = author;
    this.pages = pages;
    this.yop = yop;
  }

  toString(){
    const bookString = super.toString() + '\n' +
                       'Autore: ' + this.author + '\n' +
                       'Pagine: ' + this.pages + '\n' +
                       'Anno di Pubblicazione: ' + this.yop;
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
