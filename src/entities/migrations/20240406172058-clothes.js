const { faker } = require("@faker-js/faker");
const collections = ["street", "black", "casual", "orange", "line"];
const colors = ["purpure", "yellow", "orange", "black", "white"];
const compositions = ["cotton", "synthetics", "polyester"];
const clothTypes = ["t-shirt", "long-sleeves", "outerwear", "hoodie"];
const images = [
  "/clothes/black_badges_t-shirt.png",
  "/clothes/black_t-shirt.png",
  "/clothes/bomber_outerwear.png",
  "/clothes/long-sleeves_black.png",
  "/clothes/mackintosh_outerwear.png",
  "/clothes/insulated_outerwear.png",
  "/clothes/hoodie.png",
  "/clothes/long-sleeves_red.png",
  "/clothes/hoodie_blue.png",
];
const lineImages = [
  "/hero-section/t-shirt_black.png",
  "/hero-section/t-shirt_violet.png",
  "/hero-section/t-shirt_orange.png",
];
const fabricTypes = [
  "natural",
  "non-natural",
  "mixed",
  "non-woven",
  "stockinette",
];
const features = [
  "breathable material, knitwear",
  "contrasting color",
  "soft fabric",
  "hood, pockets",
];
const collars = [
  "polo",
  "shirt-rack",
  "apache",
  "tangerine",
  "golf",
  "round neck",
];
const sleeves = ["long", "short"];
const seasons = ["demi-season", "all season"];
const upperMaterials = [
  "synthetic material",
  "quilted jacket fabric",
  "eco leather",
  "denim",
];
const liningMaterials = ["taffeta", "viscose", "polyester", "chiffon", "satin"];
const sizes = ["s", "m", "l", "xl", "xxl"];

const status = ["isBestseller", "isNew", "none"];

const randomValueToArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  async up(db) {
    return db.collection("clothes").insertMany(
      [...Array(50)].map(() => {
        const typeClothes = randomValueToArray(clothTypes);
        const name = faker.commerce.productName();
        const statusClothes = randomValueToArray(status);

        const sizesClothes = sizes.map((size) => ({
          [size]: faker.datatype.boolean(),
        }));

        const inStock = Object.values(sizes).some((item) => item);
        const characteristics = [
          {
            type: "t-shirt",
            color: randomValueToArray(colors),
            collar: randomValueToArray(collars),
            silhouette: "straight",
            print: "chocolate, print, melange",
            decor: faker.datatype.boolean(),
            composition: randomValueToArray(compositions),
            season: randomValueToArray(seasons),
            collection:
              collections[Math.floor(Math.random() * collections.length)],
          },
          {
            type: "long-sleeves",
            color: randomValueToArray(colors),
            collar: randomValueToArray(collars),
            silhouette: "straight",
            print: "chocolate, print, melange",
            decor: faker.datatype.boolean(),
            composition: randomValueToArray(compositions),
            features: randomValueToArray(features),
            fabricType: randomValueToArray(fabricTypes),
            sleeve: randomValueToArray(sleeves),
            season: randomValueToArray(seasons),
            collection:
              collections[Math.floor(Math.random() * collections.length)],
          },
          {
            type: "hoodie",
            color: randomValueToArray(colors),
            collar: randomValueToArray(collars),
            silhouette: "straight",
            print: "chocolate, print, melange",
            decor: faker.datatype.boolean(),
            composition: randomValueToArray(compositions),
            features: randomValueToArray(features),
            fabricType: randomValueToArray(fabricTypes),
            sleeve: randomValueToArray(sleeves),
            clasp: faker.datatype.boolean(),
            season: randomValueToArray(seasons),
          },
          {
            type: "outerwear",
            color: randomValueToArray(colors),
            collar: randomValueToArray(collars),
            decor: faker.datatype.boolean(),
            composition: randomValueToArray(compositions),
            features: randomValueToArray(features),
            upperMaterial: randomValueToArray(upperMaterials),
            liningMaterial: randomValueToArray(liningMaterials),
            collection:
              collections[Math.floor(Math.random() * collections.length)],
          },
        ];
        const currentCharacteristics = characteristics.find(
          (characteristic) => characteristic.type === typeClothes
        );
        return {
          name: faker.commerce.productName(),

          description: faker.lorem.sentences(10),
          images:
            typeClothes === "t-shirt" &&
            currentCharacteristics.collection === "line"
              ? [randomValueToArray(lineImages)]
              : images.filter((item) => item.includes(typeClothes)),
          category: "clothes",
          price: +faker.commerce.price({
            min: 100,
            max: 10000,
          }),
          vendorCode: faker.string.numeric(4),
          inStock: inStock,
          isCount: inStock ? +faker.string.numeric(2) : undefined,
          type: typeClothes,
          article: faker.string.numeric(4),
          isBestseller: statusClothes === "isBestseller",
          popularity: +faker.string.numeric(3),
          isNew: statusClothes === "isNew",
          characteristics: currentCharacteristics,
          sizes: sizesClothes,
        };
      })
    );
  },

  async down(db) {
    return db.collection("clothes").updateMany([]);
  },
};
