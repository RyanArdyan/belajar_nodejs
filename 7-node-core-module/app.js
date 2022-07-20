// Core Module
// File System
const fs = require(`fs`);
// Menulis string ke file secara Synchronous

// try {
//     fs.writeFileSync(`data/tests.txt`, `Halo Dunia Secara Synchronous`);
// } catch(e) {
//     console.log(e);
// }

// menulis string ke file(Asynchronous)
// fs.writeFile(`data/tests.txt`, `Hello World Secara Asynchronous`, (err) => {
//     console.log(err);
// });

// membaca file secara synchronous 
// const data = fs.readFileSync(`data/tests.txt`, 'utf-8');
// console.log(data);

// membaca file secara asynchronous
// fs.readFile(`datas/tests.txt`, 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Readline
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Namamu siapa bang/kak: ', (nama) => {
    rl.question(`Bisa kali, bagi nomor telepon: `, (no_telp) => {
        const contact = { nama, no_telp };
        const file = fs.readFileSync(`data/contacts.json`, 'utf8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync(`data/contacts.json`, JSON.stringify(contacts) );
        console.log(`Arigatou Gozaimasu.`)
        rl.close();
    });
});