//alert("hello world");

let myBook = ["sejarah", "komik", "belajar"];
console.log(myBook);

for (iterasiBook of myBook) {
  console.log(iterasiBook);
}

let number = 20
function login(...data) {
  if (data <= number) {
    console.log(`data kurang dari ${number}`);
  } else {
    console.log(`data lebih dari ${number}`);
  }
}

login(13);

// ini adalah perulangan for
let cekNumber = 35
