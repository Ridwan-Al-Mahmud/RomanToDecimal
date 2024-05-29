const result = document.querySelector("#output");
const inputNumber = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const numbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

const decimalToRoman = (num) => {
    let number = parseInt(num);
                                
    if(num.length === 0) {
       result.innerText += "Please enter a valid number";
      return false;
    }
    if(num >3999) {
      result.innerText += "Please enter a number less than or equal to 3999";
      return false;
    }
    if(num < 1) {
      result.innerText += "Please enter a number greater than or equal to 1";
      return false;
    }
    let romanNumbers = Object.keys(numbers);
    romanNumbers.forEach((key) => {
        while(numbers[key] <= number){
           number -= numbers[key];
           result.innerText += key;
        }
    });
}
convertBtn.addEventListener("click", () => {
    result.innerText = "";
    decimalToRoman(inputNumber.value);
    inputNumber.value = "";
});
