import faker from "faker";
import { getRandomNumber } from "../utils/helpers";

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
const images = [
  "https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg",
  "https://i.pinimg.com/originals/1e/55/bd/1e55bdc1278d253fd677a8e2b5aa169c.jpg",
  "https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.jpg",
  "https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg",
];
const COLORS = ["red", "pink", "cyan", "grey", "bisque"];

for (let i = 0; i < 250; i++) {
  const type = shoesTypes[getRandomNumber(shoesTypes.length)];
  const size = shoeSizes[getRandomNumber(shoeSizes.length)];
  const image = images[getRandomNumber(images.length)];
  const color = COLORS[getRandomNumber(COLORS.length)];

  shoes.push({
    id: i + 1,
    name: faker.name.firstName(),
    company: faker.company.companyName(),
    type,
    price: parseInt(faker.commerce.price(100, 10000, 0)),
    size,
    color: color,
    imageUrl: image,
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
    priceFilter =
      shoe.price > (priceMin || DEFAULT_FILTERS.priceMin) &&
      shoe.price < (priceMax || DEFAULT_FILTERS.priceMax);

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
