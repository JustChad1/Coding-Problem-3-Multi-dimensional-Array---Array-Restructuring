const subArray1 = prompt([Genevieve, Juan, Luna, Gabriel, Elise])
const subArray2 = parseInt(prompt([24, 65, 21, 5, 9]))

  const restructuredArray = [];
  
  for (let i = 0; i < mdArray[0].length; i++) {
    restructuredArray.push([mdArray[0][i], mdArray[1][i]]);
  }
  
  console.log(restructuredArray);