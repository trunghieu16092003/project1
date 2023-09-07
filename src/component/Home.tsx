import React, { useState } from "react";
import { Col, Pagination, Row, Spin, Input, Button } from "antd";
import {
  Route,
  Routes,
  useSearchParams,
  useLocation,
  Link,
} from "react-router-dom";
import { isEmpty } from "lodash";
import { ICardItemProps } from "./CardItem";

import restClient from "../service/restClient";
import useDidMount from "../hooks/useDidMount";
import { getCartsApi } from "../service/cartApi";

interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
  title_like?: string;
}
const Home: React.FC = () => {
  const [products, setProduct] = useState<ICardItemProps[]>([]);
  const [carts, setCarts] = useState<ICardItemProps[]>([]);

  const [searchParams] = useSearchParams();

  const [meta, setMeta] = useState<IMeta>({
    _limit: Number(searchParams.get("_limit")) || 8,
    _totalRows: Number(searchParams.get("_totalRows")) || 0,
    _page: Number(searchParams.get("_page")) || 0,
    title_like: searchParams.get("title_like") || "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getProduct(metaProps?: IMeta) {
    try {
      setIsLoading(true);
      const res = await restClient({
        url: "/products",
        params: metaProps || meta,
      });
      setProduct((products) => [...products, ...res.data]);
      setMeta(res.pagination);
    } catch (error) {
      alert("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function getCarts() {
    const res = await getCartsApi();
    setCarts(res);
  }

  useDidMount(() => {
    getProduct();
    getCarts();
  });
  return (
    <>
      {!useLocation().pathname.startsWith("/cart") && (
        <>
          <Link to="/cart">
            <h1>Carts: {carts.length}</h1>
          </Link>

          {!isEmpty(products) && (
            <Row id="ref">
              {products.map((product, index) => (
                <Col key={index} xs={6}>
                  <CartItem
                    product={product}
                    carts={carts}
                    getCarts={() => getCarts()}
                  />
                </Col>
              ))}
            </Row>
          )}
          {isLoading && <Spin />}
          {/* <div ref={refList}></div> */}
        </>
      )}
    </>
  );
};

export default Home;
