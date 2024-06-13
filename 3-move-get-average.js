/** Leer README */

arr = [1, 2, 3,5 ,6,9];
function avgarr(arr){
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum/arr.length;
}
console.log(avgarr(arr));