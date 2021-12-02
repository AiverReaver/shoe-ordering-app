import faker from "faker";

export const shoesTypes = [
  "Flip Flops",
  "Sneakers",
  "Lace-Up Shoes",
  "Shoe Accessories",
];

export const shoeSizes = [];

for (let i = 35; i <= 49; i++) {
  shoeSizes.push(i);
}

const shoes = [];

for (let i = 0; i < 500; i++) {
  const type = shoesTypes[Math.floor(Math.random() * 4)];
  const size = shoeSizes[Math.floor(Math.random() * shoeSizes.length)];

  shoes.push({
    id: i + 1,
    name: faker.name.firstName(),
    company: faker.company.companyName(),
    type,
    price: parseInt(faker.commerce.price(100, 10000, 0)),
    size,
    color: faker.commerce.color(),
    imageUrl:
      "https://i.pinimg.com/originals/1e/55/bd/1e55bdc1278d253fd677a8e2b5aa169c.jpg",
  });
}

const DEFAULT_FILTERS = {
  priceMin: 1,
  priceMax: Number.POSITIVE_INFINITY,
  sizes: [],
  types: [],
};

export const getShoes = (filters = {}) => {
  const { priceMin, priceMax, sizes, types } = {
    ...DEFAULT_FILTERS,
    ...filters,
  };

  let priceFilter = true,
    sizeFilter = true,
    typeFilter = true;

  const filtershoes = shoes.filter((shoe) => {
    priceFilter = shoe.price > priceMin && shoe.price < priceMax;
    if (sizes.length > 0) {
      sizeFilter = sizes.includes(shoe.size);
    }
    if (types.length > 0) {
      typeFilter = types.includes(shoe.type);
    }
    return priceFilter && sizeFilter && typeFilter;
  });

  return filtershoes;
};
