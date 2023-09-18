export type Parfum = {
  id: number;
  title: string;
  price: number;
  ml: number;
  image: string;
  route: string;
}[];

export interface IProduct {
  title: string;
  description: string;
  image: string;
  tones: string;
}

export interface IShoppingCartItem {
  product: IParfum;
  quantity: number;
}

export type CollectionProp = {
  id?: string;
  title?: string;
  img: string;
  description: string;
};

export type Data = {
  name: string;
  email: string;
  message: string;
}[];

export type IContact = {
  name: "Name";
  email: "Email";
  message: "Message";
}[];
