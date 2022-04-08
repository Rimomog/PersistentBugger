function persistence(num) {
    let i = 0;
    let arr = num.toString().split('');
    while(arr.length != 1){
      arr = arr.reduce((p, c) => p *= Number(c), 1).toString().split('');
      i++;
    }
   return i; 
}