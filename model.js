class Vehicle{
  constructor(name, type, producer, yop, cost, speed, isRetired, tax) {
    this.name = name;
    this.type = type;
    this.producer = producer;
    this.yop = yop;
    this.cost = cost;
    this.speed = speed;
    this.isRetired = isRetired;
    this.tax = tax;
  }

  toString(){

    const retired = this.isRetired === true ? 'Si' : 'No'

    // let retired2;
    // if (this.isRetired === true) {
    //   retired2 = 'Yes';
    // } else {
    //   retired2 = 'No';
    // }
    // const retired3 = retired2;

    return 'Nome: ' + this.name + '\n' +
           'Tipo: ' + this.type + '\n' +
           'Produttore: ' + this.producer + '\n' +
           'Anno: ' + this.yop + '\n' +
           'Costo: ' + this.getPrice() + '\n' +
           'Velocità: ' + this.getMaxSpeed() + '\n' +
           'In servizio: ' + retired;
  }

  getType(){
    return 'Non Classificato'
  }

  getPrice(){
    const tax = this.cost * this.tax / 100;
    let publicPrice = this.cost + tax;
    
    if (this.type === Aircraft.TYPE.Bomber) {
      publicPrice = publicPrice + 1000;
    }

    const rounded = this.round(publicPrice, 2);
    return rounded;
  }

  getMaxSpeed(){
    const max = Math.max(...this.speed);
    return max;
  }

  round(number, decimalPlace) {
    const roundedString = number.toFixed(decimalPlace);
    const roundedNumber = parseFloat(roundedString);
    return roundedNumber;
  }

}

class Tank extends Vehicle{

  static TYPE = {
    Tank: 'Carro Armato',
    SPG: 'Semovente',
    Recon: 'Ricognizione',
    Transport: 'Trasporto',
  }

  constructor(name, type, producer, yop, suspension, cost, speed, isRetired, armour){
    super(name, type, producer, yop, cost, speed, isRetired, 30);
    this.suspension = suspension;
    this.armour = armour;
  }

  toString(){
    return 'CARRO ARMATO: \n' +
            super.toString() + '\n' +
            'Sospensioni: ' + this.suspension + '\n' +
            'Corazza: ' + this.armour;
  }

  getType() {
    if(this.type === 't'){
      return 'Carro Armato';
    } else if(this.type === 's') {
      return 'Semovente';
    } else if(this.type === 'r') {
      return 'Ricognizione';
    } else {
      return 'Trasporto';
    }
  }

}

class Aircraft extends Vehicle{

  static TYPE = { 
    Bomber: 'Bombardiere',
    Helicopter : 'Elicottero',
    Fighter: 'Caccia',
    Trainer: 'Addestratore',
  }

  constructor(name, type, producer, yop, cost, speed, isRetired, altitude) {
    super(name, type, producer, yop, cost, speed, isRetired, 10);
    this.altitude = altitude;
  }

  toString() {
    return 'AEREO: \n' +
           super.toString() + '\n' +
           'Altitudine: ' + this.altitude;
  }

  getType() {
    switch (this.type) {
      case 'b':
        return 'Bombardiere';
        break;
      case 'e':
        return 'Elicottero';
        break;
      case 'c':
        return 'Caccia';
        break;
      default:
        return 'Addestratore';
        break;
    }
  }

}


class TemperatureObservation{

  constructor(temperature, date, location){
    this.temperature = temperature;
    this.date = date;
    this.location = location;
  }

  getFTemp(){
    const cToFahr = this.temperature * 9 / 5 + 32;
    return cToFahr;
  }

  get tempF(){
    const cToFahr = this.temperature * 9 / 5 + 32;
    return cToFahr;
  }

  set tempF(value) {
    const fToCel = (value - 32) * 5 / 9;
    this.temperature = fToCel;
  }


}