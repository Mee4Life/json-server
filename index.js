const faker=require('faker');
const fs = require("fs");
const _ = require('lodash')

// array to choose random 
const categories = [ 'home', 'work', 'school', 'sport' ]
const discounts = ['none', 10, 20, 30, 40, 50]
const prieses = [10, 15, 20, 30, 40, 50, 60, 65, 70, 90]
const ratings =  [1,2,3,4,5]

// fucntions to generate random items 
const genItems = (number) => {
    const items = [];
    for (let index = 1; index <= number; index++) {
        items.push({
            id: index,
            title: faker.lorem.words(4),
            description: faker.lorem.paragraphs(1),
            category: _.sample(categories),
            discount: _.sample(discounts),
            price: _.sample(prieses)
        });
    }
    return items;
};

// function to generate random reviews 
const getReviews = (number) => { 
    const reviews = []
    for (let index = 1; index <= number; index++) {
        reviews.push({
            id: index,
            rating: _.sample(ratings),
            comment: faker.lorem.words(5),
            itemId: _.sample(ratings)
        });
    }
    return reviews
}


// get the result in the console
console.log(JSON.stringify({ items: genItems(10), reviews: getReviews(5) }))


//get the result in the db file  
// fs.writeFileSync(
//     "./db.json",
//     JSON.stringify({ items: genItems(10) })
// );