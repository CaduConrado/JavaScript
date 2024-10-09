const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 5000);
});

const p2 = Promise.resolve(200);

const p3 = new Promise((resolve, reject) => {
  resolve(3000);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
