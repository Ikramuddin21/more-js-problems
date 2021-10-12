const phones = [
    { name: 'Samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'Walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'Xiaomi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'Oppo a2', price: 17000, camera: 8, storage: 32 },
    { name: 'Nokia x3', price: 8000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 16 },
];

let cheapest = phones[0];
// for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
// }
for (const phone of phones) {
    console.log(phone);
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log('cheapest', cheapest);