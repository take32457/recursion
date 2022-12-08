function missingIntegers(numbers){
  // 関数を完成させてください
  const cmp = {};
  for(let i = 0;i < numbers.length;i++){
      cmp[i + 1] = true;
  }
  for(let i = 0;i < numbers.length;i++){
      if(cmp[numbers[i]] != undefined){
          delete cmp[numbers[i]];
      }
  }
  return Object.keys(cmp);
}

