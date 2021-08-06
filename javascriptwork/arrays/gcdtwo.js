var num1 = 16, num2 = 48;
function gcdOfTwo(num1, num2) {
    let gcd=0;
    for (i = 0; i <= num2 & i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
           gcd=i;

        }
    }return gcd
}
console.log(gcdOfTwo(16,48));