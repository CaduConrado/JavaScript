class wordCounter {
  constructor(obj) {
    this.obj = obj;
  }

  countWords(str) {
    let arr = str.trim().split(/\s+/);
    return arr.filter((palavras) => palavras.length > 0).length;
  }
}
