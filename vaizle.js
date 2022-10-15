function Solution (D) {
    let date = new Date(D);
    if (date.toString() === 'Invalid Date')
      
      return D={'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}
   
    return date.getDay();
}

let weekday1 = 'Mon'; 
console.log(weekday1 + ': ' + Solution('2020-01-06'));
let weekday2 = 'Tue'; 
console.log(weekday2 + ': ' + Solution('2020-01-05'));
let weekday3 = 'Wed'; 
console.log(weekday3 + ': ' + Solution('2020-01-07'));
let weekday4 = 'Thus'; 
console.log(weekday4 + ': ' + Solution('2020-01-01'));
let weekday5 = 'Frid'; 
console.log(weekday5 + ': ' + Solution('2020-01-03'));
let weekday6 = 'Sat'; 
console.log(weekday6 + ': ' + Solution('2020-01-04'));
let weekday7 = 'Sun'; 
console.log(weekday7 + ': ' + Solution('2020-01-07'));
 