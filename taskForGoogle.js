function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Пример использования
  const array = [1, 2, 3, 4, 5];
  console.log(sumOfArray(array)); // Выведет: 15