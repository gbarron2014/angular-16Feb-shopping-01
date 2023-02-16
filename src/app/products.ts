export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 10,
    image: '../assets/phone.'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock: 1,
    image: '../assets/phone.'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    stock:0,
    image: '../assets/phone.'

  },
  {
    id: 4,
    name: 'Motorola',
    price: 1000,
    description: 'Moto 6 ',
    stock:100,
    image: '../assets/phone.'

  },
];
