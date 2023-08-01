// This is a object

const myBrands = {
  brandName: "Kawasaki Ninja H2",
  mesin: "4 cilinder",
  height: "120 kg",
  maxSpeed: 400
};
console.log(myBrands);
console.log('----------------------');

for (iterasiBrands in myBrands){
  // console.log(`${iterasiBrands}`);
  console.log(`${iterasiBrands} : ${myBrands[iterasiBrands]}`);
}


