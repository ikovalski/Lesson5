// Напишите функцию, которая при каждом вызове будет выводит увеличенный счетчик на 1

// Пример:

const counter = createCounter(10);
//counter(); // 11
//counter(); //12
console.log(counter());
console.log(counter());
console.log(counter());

function createCounter(n: number) {
  return () => {
    n += 1;
    return n;
  };
}
