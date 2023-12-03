function decrementSP(num) {
  if (num - 1 > 0) {
    if (num % 2 != 0) {
      decrementSP(num - 1);
    } else {
      console.log(num);
      decrementSP(num - 2);
    }
  }
}

decrementSP(883);
