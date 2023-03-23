interface Product {
  name: string
  image: string
  images: string[]
  description: string
  category: string[]
  price: number
  price_before_discount: number
  quantity: number
  rating: number
  view: number
  sold: number
}

/* Interface option: 
interface Product {
  name: string;
  image: string;
  images: string[];
  description: {
    text: string;
    quality: string;
    camera: string;
    pin: string;
    charger: string;
  };
  category: string[];
  price: number;
  price_before_discount: number;
  quantity: number;
  rating: number;
  view: number;
  sold: number;
} */
