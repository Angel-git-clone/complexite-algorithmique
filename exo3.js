function checkSum(numbers, k) {
  let hash = {};

  for (let i = 0; i < numbers.length; i++) {
    let current_element = numbers[i];
    if (hash[current_element] || hash[k - current_element]) {
      return true;
    }
    hash[current_element] = true;
  }
  return false;
}
result = checkSum([10, 15, 3, 7], 17);
console.log("Le resultat est", result);

result = checkSum([1, 8, 10, 21], 19);
console.log("Le resultat est", result);