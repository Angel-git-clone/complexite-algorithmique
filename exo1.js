function checkSum(numbers, k) {
  // on parcourt chaque élément de la liste
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === k) {
          return true;
        }
      }
    }
  return false;
}

result = checkSum([10, 15, 3, 7], 17);
console.log("Pour la liste donné, le resultat est", result);

result = checkSum([1, 8, 10, 21], 19);
console.log("Pour la liste donné, le resultat est", result);