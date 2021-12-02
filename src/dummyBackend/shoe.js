import faker from "faker";

export const shoesTypes = [
  "Flip Flops",
  "Sneakers",
  "Lace-Up Shoes",
  "Shoe Accessories",
];

export const shoeSizes = [];

for (let i = 39; i <= 49; i++) {
  shoeSizes.push(i);
}

const shoes = [];

for (let i = 0; i < 500; i++) {
  const type = shoesTypes[Math.floor(Math.random() * 4)];
  const size = shoeSizes[Math.floor(Math.random() * 10)];

  shoes.push({
    id: i + 1,
    name: faker.name.firstName(),
    company: faker.company.companyName(),
    type,
    price: parseInt(faker.commerce.price(100, 10000, 0)),
    size,
    imageUrl: faker.image.sports(),
  });
}

const DEFAULT_FILTERS = {
  priceMin: 1,
  priceMax: Number.POSITIVE_INFINITY,
  size: null,
  type: null,
};

export const getShoes = (filters = {}) => {
  const { priceMin, priceMax, size, type } = { ...DEFAULT_FILTERS, ...filters };

  let priceFilter = true,
    sizeFilter = true,
    typeFilter = true;

  const filtershoes = shoes.filter((shoe) => {
    priceFilter = shoe.price > priceMin && shoe.price < priceMax;
    if (size) {
      sizeFilter = shoe.size === size;
    }
    if (type) {
      typeFilter = shoe.type === type;
    }
    return priceFilter && sizeFilter && typeFilter;
  });

  return filtershoes;
};
