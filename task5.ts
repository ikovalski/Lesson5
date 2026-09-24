// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся,
// вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая
// принимает в качестве параметра
// произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

function dateFormat(n: number): string {
    return n.toString().padStart(2, "0");
}

function getDate(inputDate: string): string {
    const date = new Date(inputDate);

    const day = dateFormat(date.getDate());
    const month = dateFormat(date.getMonth() + 1);
    const year = date.getFullYear();

    const hours = dateFormat(date.getHours());
    const minutes = dateFormat(date.getMinutes());
    const seconds = dateFormat(date.getSeconds());

    if (!isNaN(date.getSeconds())) {
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    } else {
        return "Invalid date";
    }
}
console.log(getDate("2026 10 02"));
