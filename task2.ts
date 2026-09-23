// Напишите самовызывающиеся функцию подсчета факториала числа:
// число должно передаваться как параметр функции

((n) => {
  if (!Number.isInteger(n) || n < 0) {
    return "Must be int";
  }

  function fact(nm: number): number {
    if (nm === 0 || nm === 1) {
      return 1;
    } else {
      return nm * fact(nm - 1);
    }
  }
  console.log(fact(n));
})(3);

/* resolved in the class 
const result = (function countFun(n: number): number | void {
  if (!Number.isInteger(n) || n <= 0) {
    console.error("Must be int");
    return;
  }
  if (n <= 1) return 1;
  return n; //* countFun(n - 1);
})(1);

console.log(result);
*/
