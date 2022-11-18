'use strict';
function solveEquation(a, b, c) {
  let arr;
  if (a == 0) {
    arr = [];
  } else {
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
      arr = [];
    } else {
      if (discriminant == 0) {
        let sqrt1 = -b / (2 * a);
        arr = [sqrt1];
      } else {
        if (discriminant > 0) {
          let sqrt1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          let sqrt2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          arr = [sqrt1, sqrt2];
        } else {
          arr = [];
        }
      }
    }
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else {
    if (isNaN(contribution)) {
      totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    } else {
      if (isNaN(amount)) {
        totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
      } else {
        if (isNaN(date)) {
          totalAmount = "Параметр <дата> содержит неправильное значение <значение параметра>";
        } else {  
          let nowDate = new Date(new Date().setFullYear(new Date().getFullYear()));  
          let numberMonth = date.getMonth() - nowDate.getMonth() + (12 * (date.getFullYear() - nowDate.getFullYear()));
          let p = (percent/ 100)/12;
          let s = amount - contribution;
          let monthPay =  s * (p + (p / (((1 + p)** numberMonth) - 1)));
          totalAmount = monthPay * numberMonth;
          totalAmount = Number(totalAmount.toFixed(2));
        } 
      }
    }
  }
  console.log(totalAmount);
  return totalAmount;
}