// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, к
// оторый мы в неё передаем.

((n: number) => {
  let i: number = 0,
    sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
})(5);

/* resolved in the class 
const sumNumber = (x: number): number => {
  let sum: number = 0;
  let i: number = 0;
  while (i <= x) {
    sum += i;
    i++;
  }
  return sum;
};

console.log(sumNumber(5.5));
*/
