import { Card, Button } from "antd";
import { createCartsApi, updateCartsApi } from "../service/cartApi";

const { Meta } = Card;

export interface ICardItemProps {
  product: {
    title: string;
    image: string;
    id: string;
  };
  price: number;
  id: string;
  count: number;
  carts: any;
  getCarts: () => void;
}

export default function CartItem({ product, carts, getCarts }: ICardItemProps) {
  const { title, image, ...rest } = product;
  async function handleClickCart() {
    const index = (carts || []).findIndex(
      (cart: { idProduct: string }) => cart.idProduct === product.id
    );

    if (index === -1) {
      await createCartsApi({
        ...product,
        idProduct: product.id,
        id: null,
        count: 1,
      });
    } else {
      const cart = carts[index];
      await updateCartsApi(
        {
          count: cart.count + 1,
        },
        cart.id
      );
    }
    getCarts();
  }

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={image} />}
      title={title}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <Button onClick={handleClickCart}>Add to card</Button>
    </Card>
  );
}
