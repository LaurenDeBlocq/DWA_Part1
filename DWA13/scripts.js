const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

/* ----------------- No touchy above here ----------------- */

let ex1 = ""
names.forEach(firstName => {
    ex1 += firstName + ", ";
})
console.log(ex1);

let ex2 = ""
let i = 0;
names.forEach(firstName => {
    ex2 += `${firstName} (${provinces[i]}), `
    i++
});
console.log(ex2);

const ex3 = provinces.map(province => province.toUpperCase())
console.log(ex3)

const ex4 = names.map(firstName => firstName.length)
console.log(ex4);