export type Location = {
  title: string;
  id: number;
  categoryId: number;
  description: string;
  location: string;
  stars: number;
  price: number;
  numberOfRooms: number;
  picture: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  description: string;
};
