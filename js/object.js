
// Bu projectda obyekt ichidan faqat string elementlarni aniqlab beruvchi funksiya yaratilgan

let car = {
    model: 'Toyoto',
     make: 'Estima',
     year:  2016,
     price: 50000
 }
 function showProperties(obyekt) {
    for(let key in obyekt){
     if (typeof obyekt[key] === 'string')
      console.log(key, obyekt[key]);
    }
 }
 showProperties(car);