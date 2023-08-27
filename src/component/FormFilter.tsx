import { Col, Input, Row } from "antd";
import { useEffect, useState } from "react";
import useDebouncedEffects from "../hooks/useDebouncedEffects";

interface FormFilterProps {
  title: string;
  price: number;
  getProduct: (params: any) => void;
}

export default function FormFilter(props: FormFilterProps) {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);

  const priceDebounce = useDebouncedEffects(price, 3000);
  const stateDebounce = useDebouncedEffects(valueSearch, 3000);

  useEffect(() => {
    props.getProduct({
      _page: 1,
      _limit: 8,
      title_like: props.title,
    });
  }, [props.title]);

  useEffect(() => {
    props.getProduct({
      _page: 1,
      _limit: 8,
      price_like: props.price,
    });
  }, [props.price]);

  useEffect(() => {
    props.getProduct({
      _page: 1,
      _limit: 8,
      title_like: stateDebounce,
    });
  }, [stateDebounce]);

  useEffect(() => {
    props.getProduct({
      _page: 1,
      _limit: 8,
      price_like: priceDebounce,
    });
  }, [priceDebounce]);

  return (
    <div>
      <Row>
        <Col>
          <Input
            placeholder="Search title"
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
          />
        </Col>
        <Col>
          <Input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            value={price}
          />
        </Col>
      </Row>
    </div>
  );
}
