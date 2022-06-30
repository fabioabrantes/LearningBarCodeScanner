const data = [
  {
    name: "Pringles Original",
    price: "R$ 9,90",
    code: "6001085126733",
    image:
      "https://a-static.mlcdn.com.br/280x210/sabao-liquido-omo-lavagem-perfeita-3l/magazineluiza/220976600/700f86b20daa3d114eda7de72f77ee64.jpg",
  },
  {
    name: "Natas",
    price: "R$ 1,89",
    code: "5601312507697",
    image:
      "https://res.cloudinary.com/dubsqkz8e/image/upload/v1645980254/rn/IMG_3106_rmlh0q.jpg",
  },
  {
    name: "Redbull",
    price: "R$ 12,43",
    code: "9002490247270",
    image:
      "https://res.cloudinary.com/dubsqkz8e/image/upload/v1645980254/rn/IMG_3105_lv4hi8.jpg",
  },
  {
    name: "Coke",
    price: "R$ 2,20",
    code: "90357473",
    image:
      "https://res.cloudinary.com/dubsqkz8e/image/upload/v1645980254/rn/IMG_3107_kkkuy7.jpg",
  },
];

export interface IProduct {
  name: string;
  price: string;
  code: string;
  image: string;
}

export function findProductByCode(code: string) {
  return data.find((product) => product.code === code);
}