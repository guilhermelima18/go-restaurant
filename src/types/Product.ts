export interface AddProductProps {
  addProductParams: {
    name: string;
    image: string;
    price: string;
    description: string;
    available: boolean;
  };
}

export interface EditProductProps {
  editProductParams: {
    id?: string;
    name: string;
    price: string;
    image: string;
    description: string;
    available: boolean;
  };
}
