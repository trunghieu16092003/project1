import { Card } from "antd";

const { Meta } = Card;

export interface ICardItemProps {
  title: string;
  image: string;
}
export default function CartItem({ title, image }: ICardItemProps) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={image} />}
      title={title}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}
