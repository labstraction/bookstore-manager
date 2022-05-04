
const book = new Book('iliade', 'omero', 'gazanti', 'classici', 8.50, 5, 120, 2008, 10);

book.title = "l'iliade"

const book2 = new Book('odissea', 'omero');

const magazine = new Magazine('pesca sportiva', 'fabbri', 5, 'settimanale', 'caccia e pesca', 5.50, 10, 0, new Date(2022, 0, 10))

magazine.releaseDate = new Date(2022, 0, 15);

console.log(book.toString());

console.log(book2.toString());

console.log(magazine.toString());

console.log(new Date(2022, 0, 10).getTime())


const tank = new Tank('Panzer IV', Tank.TYPE.Tank, 'Krupp', 1935, 't', 50000, [43, 37], true, 'Acciao');

console.log(tank.toString());


const aircraft = new Aircraft('B52', Aircraft.TYPE.Bomber, 'Boeing', 1950, 9250000, [850, 700], false, 11000);


console.log(aircraft.toString());



 const number = 11.0367;

 console.log(Publication.round(number, 2));




const obs = new TemperatureObservation(30, new Date(2022, 4, 3), [44.327, 14.345]);

obs.tempF = 90;

console.log(obs.temperature)

// console.log(number.toFixed(2));

// const roundedNumber = round1(number, 3);

// const roundedNumber2 = round2(number, 2, 'floor');

// console.log(roundedNumber);

// console.log(roundedNumber2);





// function round1(number, decimalPlace) {
//   const roundedString = number.toFixed(decimalPlace);
//   const roundedNumber = parseFloat(roundedString);
//   return roundedNumber;
// }

// function round2(number, decimalPlace, type = 'round'){
//   const multiplier = 10 ** decimalPlace;
//   const multipliedNumber = number * multiplier;
//   let roundedMultipliedNumber;
//   if(type === 'round'){
//     roundedMultipliedNumber = Math.round(multipliedNumber);
//   } else if (type === 'ceil') {
//     roundedMultipliedNumber = Math.ceil(multipliedNumber);
//   } else {
//     roundedMultipliedNumber = Math.floor(multipliedNumber);
//   }
//   const roundedNumber = roundedMultipliedNumber / multiplier;
//   return roundedNumber;
// }