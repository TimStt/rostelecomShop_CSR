const { faker } = require("@faker-js/faker");

const randomValueToArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const collections = ["street", "black", "casual", "orange", "white"];
const colors = ["purpure", "yellow", "orange", "black", "white"];
const compositions = ["cotton", "synthetics", "polyester"];
const accessoryTypes = ["bags", "headdress", "umbrella"];
const images = [
  "/accessories/city_backpack_bags.png",
  "/accessories/panama_headdress.png",
  "/accessories/quilted_shopper_bags.png",
  "/accessories/see-thr_shopper_bags.png",
  "/accessories/umbrella.png",
  "/accessories/vip_backpack_bags.png",
];
const wearingMethod = ["in hand", "on shoulder", "over shoulder"];
const textures = ["nubuck", "nappa", "suede", "naplak"];
const styles = ["bucket bag", "retro style", "sports", "travel"];
const seasons = ["demi-season", "all season"];
const numbersOfSpokes = [9, 8, 10, 12, 7];
const spokeMaterials = ["metal", "plastic", "fiberglass"];
const foldedLengths = [30, 40, 50, 60];
const mechanisms = ["manual", "automatic"];

const sizes = ["l", "xl"];

const status = ["isBestseller", "isNew", "none"];

module.exports = {
  async up(db) {
    return db.collection("accessories").insertMany(
      [...Array(50)].map(() => {
        const type =
          accessoryTypes[Math.floor(Math.random() * accessoryTypes.length)];
        const name = faker.commerce.productName();
        const statusAccessories = randomValueToArray(status);

        const sizesAccessories = sizes.map((size) => ({
          [size]: faker.datatype.boolean(),
        }));
        const inStock = Object.values(sizes).some((item) => item);

        const characteristics = [
          {
            type: "bags",
            color: randomValueToArray(colors),
            composition: randomValueToArray(compositions),
            collection: randomValueToArray(collections),
            wearingMethod: randomValueToArray(wearingMethod),
            texture: randomValueToArray(textures),
            style: randomValueToArray(styles),
          },
          {
            type: "headdress",
            color: randomValueToArray(colors),
            composition: randomValueToArray(compositions),
            season: randomValueToArray(seasons),
          },
          {
            type: "umbrella",
            color: randomValueToArray(colors),
            composition: randomValueToArray(compositions),
            numberOfSpokes: randomValueToArray(numbersOfSpokes),
            spokeMaterial: randomValueToArray(spokeMaterials),
            foldedLength: randomValueToArray(foldedLengths),
            mechanism: randomValueToArray(mechanisms),
          },
        ];

        return {
          name: faker.commerce.productName(),

          description: faker.lorem.sentences(10),
          images: images.filter((item) => item.includes(type)),
          category: "accessories",
          price: +faker.commerce.price({
            min: 100,
            max: 10000,
          }),
          vendorCode: faker.string.numeric(4),
          inStock: inStock,
          isCount: inStock ? +faker.string.numeric(2) : undefined,
          type,
          characteristics: characteristics.find((item) => item.type === type),
          article: faker.string.numeric(4),
          isBestseller: statusAccessories === "isBestseller",
          isNew: statusAccessories === "isNew",
          popularity: +faker.string.numeric(3),
          sizes: sizesAccessories,
        };
      })
    );
  },

  async down(db) {
    return db.collection("accessories").updateMany([]);
  },
};
