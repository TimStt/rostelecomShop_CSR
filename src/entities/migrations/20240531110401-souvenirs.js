const { faker } = require("@faker-js/faker");

const getRandomArrayValue = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];
const randomValueToArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const colors = ["purpure", "yellow", "orange", "black", "white"];
const souvenirTypes = ["promotional-souvenirs", "business-souvenirs"];
const images = [
  "/souvenirs/promotional-souvenirs-1.png",
  "/souvenirs/promotional-souvenirs-2.png",
  "/souvenirs/business-souvenirs-1.png",
  "/souvenirs/business-souvenirs-2.png",
];
const materials = ["flour salt", "metal", "plastic"];
const heights = [5, 10, 15, 20];
const weights = [80, 100, 150, 250];
const status = ["isBestseller", "isNew", "none"];
const inStockStates = [true, true, false, true, true, true, false];
module.exports = {
  async up(db) {
    return db.collection("souvenirs").insertMany(
      [...Array(50)].map(() => {
        const inStock = randomValueToArray(inStockStates);
        const type = getRandomArrayValue(souvenirTypes);
        const statusClothes = randomValueToArray(status);
        const characteristics = [
          {
            type: "promotional-souvenirs",
            color: getRandomArrayValue(colors),
            material: getRandomArrayValue(materials),
            height: getRandomArrayValue(heights),
            weight: getRandomArrayValue(weights),
          },
          {
            type: "business-souvenirs",
            color: getRandomArrayValue(colors),
            material: getRandomArrayValue(materials),
            height: getRandomArrayValue(heights),
            weight: getRandomArrayValue(weights),
          },
        ];

        return {
          category: "souvenirs",
          type,
          price: +faker.commerce.price({
            min: 100,
            max: 10000,
          }),
          name: faker.commerce.productName(),
          description: faker.lorem.sentences(10),
          characteristics: characteristics.find((item) => item.type === type),
          images: images.filter((item) => item.includes(type)),
          vendorCode: faker.string.numeric(4),
          inStock: inStock,
          isCount: inStock ? +faker.string.numeric(2) : undefined,
          isBestseller: statusClothes === "isBestseller",
          isNew: statusClothes === "isNew",
          popularity: +faker.string.numeric(3),
          sizes: {},
        };
      })
    );
  },

  async down(db) {
    return db.collection("souvenirs").updateMany([]);
  },
};
