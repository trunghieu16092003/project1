import React, { useState, useEffect } from "react";
import { Col, Pagination, Row, Spin } from "antd";
import { useLocation } from "react-router-dom";

import useDidMount from "./hooks/useDidMount";
import restClient from "./restClient";
import CartItem, { ICardItemProps } from "./component/CardItem";
import FormFilter from "./component/FormFilter";
import "./App.css";

interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
}

const App: React.FC = () => {
  let location = useLocation();

  let search = location.search;
  let titleUrl: string = "";
  let priceUrl: number = 0;
  if (search.startsWith("?")) {
    let cleanSearch = search.replace(/[?]/g, "");
    let arrayParts = cleanSearch.split("&");
    let objSearch: { [key: string]: string } = {};

    arrayParts.forEach(function (part) {
      var pair = part.split("=");
      var key = pair[0];
      var value = pair[1];
      objSearch[key] = value;
    });

    for (let key in objSearch) {
      if (key !== "title_like" && key !== "price_like") {
        alert(`Invalid key: ${key}`);
      } else {
        titleUrl = objSearch["title_like"];
        priceUrl = +objSearch["price_like"];
      }
    }
  }

  const [products, setProduct] = useState<ICardItemProps[]>([]);
  const [meta, setMeta] = useState<IMeta>({
    _limit: 8,
    _totalRows: 0,
    _page: 1,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getProduct(metaProps?: IMeta) {
    try {
      setIsLoading(true);

      const res = await restClient({
        url: "/products",
        params: metaProps || meta,
      });
      setProduct(res.data);
      setMeta(res.pagination);
    } catch (error) {
      alert("error");
    } finally {
      setIsLoading(false);
    }
  }

  useDidMount(getProduct);

  return (
    <>
      <FormFilter
        title={titleUrl}
        price={priceUrl}
        getProduct={(params: any) => getProduct(params)}
      />
      {isLoading ? (
        <Spin />
      ) : (
        <Row gutter={16}>
          {products.map((product) => (
            <Col key={product.title} xs={6}>
              <CartItem title={product.title} image={product?.image} />
            </Col>
          ))}
        </Row>
      )}
      {products.length > 0 && (
        <Pagination
          defaultPageSize={10}
          total={meta._totalRows}
          onChange={(page) =>
            getProduct({
              ...meta,
              _page: page,
            })
          }
        />
      )}
    </>
  );
};

export default App;
