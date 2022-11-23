export interface OrderProps {
  _id: string;
  table: string;
  status: string;
  products: ProductProps[];
}

type ProductProps = {
  _id: string;
  quantity: number;
  product: {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
  };
};

