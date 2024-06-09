const { faker } = require("@faker-js/faker");

const getRandomArrayValue = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const colors = ["purpure", "yellow", "orange", "black", "white"];
const officeTypes = ["notebook", "pen"];
const images = [
  "/office/office-notebook-1.png",
  "/office/office-notebook-2.png",
  "/office/office-pen-1.png",
  "/office/office-pen-2.png",
];
const randomValueToArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const covers = ["hard", "soft"];
const ruled = ["cell", "line"];
const fastenings = ["comb", "spiral", "staple", "stitching", "gluing"];
const penTypes = ["ballpoint", "capillary", "gel"];
const peculiarities = [
  "replaceable refill",
  "oil sealed",
  "rubber sleeve",
  "with cap",
  "replaceable nib",
  "clip-on",
];

const inStockStates = [true, true, false, true, true, true, false];
module.exports = {
  async up(db) {
    return db.collection("office").insertMany(
      [...Array(50)].map(() => {
        const frames = ["round shape", "metal", "plastic"];
        const status = ["isBestseller", "isNew", "none"];
        const type = getRandomArrayValue(officeTypes);
        const statusClothes = randomValueToArray(status);
        const inStock = randomValueToArray(inStockStates);
        const characteristics = [
          {
            type: "notebook",
            color: getRandomArrayValue(colors),
            cover: getRandomArrayValue(covers),
            ruled: getRandomArrayValue(ruled),
            fastenings: getRandomArrayValue(fastenings),
          },
          {
            type: "pen",
            color: getRandomArrayValue(colors),
            penType: getRandomArrayValue(penTypes),
            peculiarity: getRandomArrayValue(peculiarities),
            frame: getRandomArrayValue(frames),
          },
        ];

        return {
          category: "office",
          type,
          price: +faker.commerce.price({
            min: 100,
            max: 10000,
          }),
          name: faker.lorem.sentence(2),
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
    return db.collection("office").updateMany([]);
  },
};
