'use strict';

// use:
// $ node db-faker

const faker   = require('faker');
const fs      = require('fs');


makeProductList(139);


function product() {
    return {
        id:             Math.random().toString(36).substr(2),
        title:          faker.commerce.productName(),
        price:          faker.commerce.price(),
        produced:       Date.parse(faker.date.past()),
        department:     faker.commerce.department(),
        description:    faker.lorem.paragraph()
    };
}


function productList(length) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(product());
    }

    return arr;
}


function makeProductList(length) {
    write2file(productList(length), 'db');
}

//--------------- Write to file ---------------
function write2file(data, fileName) {
    console.log('------------------------------------------------');
    console.log('DATA: \n', data);

    fs.writeFile(`${fileName}.json`, JSON.stringify(data), 'utf8', (err) => {
        if (err) throw err;
        console.info(`File "${fileName}.json" has been saved.`);
    });
}