// import React, { useState, useEffect } from "react";
// import { Col, Pagination, Row, Spin } from "antd";
// import {
//   Routes,
//   useLocation,
//   useSearchParams,
//   Route,
//   Link,
// } from "react-router-dom";

// import useDidMount from "./hooks/useDidMount";
// import restClient from "./service/restClient";
// import CartItem, { ICardItemProps } from "./component/CardItem";
// import CartOrder from "./component/CartOrder";
// import { getCartsApi } from "./service/cartApi";
// import FormFilter from "./component/FormFilter";
// import "./App.css";

// interface IMeta {
//   _limit: number;
//   _totalRows: number;
//   _page: number;
//   title_like?: string;
// }

// const App: React.FC = () => {
//   const [products, setProduct] = useState<ICardItemProps[]>([]);
//   const [carts, setCarts] = useState<ICardItemProps[]>([]);

//   const [searchParams] = useSearchParams();
//   const [meta, setMeta] = useState<IMeta>({
//     _limit: Number(searchParams.get("_limit")) || 8,
//     _totalRows: Number(searchParams.get("_totalRows")) || 0,
//     _page: Number(searchParams.get("_page")) || 0,
//     title_like: searchParams.get("title_like") || "",
//   });
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   async function getProduct(metaProps?: IMeta) {
//     try {
//       setIsLoading(true);

//       const res = await restClient({
//         url: "/products",
//         params: metaProps || meta,
//       });
//       setProduct(res.data);
//       setMeta(res.pagination);
//     } catch (error) {
//       alert("error");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   async function getCarts() {
//     const res = await getCartsApi();
//     setCarts(res);
//   }

//   console.log(carts);
//   useDidMount(() => {
//     getProduct();
//     getCarts();
//   });

//   return (
//     <>

//       {!useLocation().pathname.startsWith("/cart") && (
//         <>
//           <Link to="/cart">
//             <h1>Carts: {carts.length}</h1>
//           </Link>
//           <FormFilter
//             value={meta.title_like || ""}
//             getProduct={(params: any) => getProduct({ ...meta, ...params })}
//           />
//           {isLoading ? (
//             <Spin />
//           ) : (
//             <Row gutter={16}>
//               {products.map((product, index) => (
//                 <Col key={index} xs={6}>
//                   <CartItem
//                     product={product}
//                     carts={carts}
//                     getCarts={() => getCarts()}
//                   />
//                 </Col>
//               ))}
//             </Row>
//           )}
//           {products.length > 0 && (
//             <Pagination
//               defaultPageSize={10}
//               total={meta._totalRows}
//               onChange={(page) =>
//                 getProduct({
//                   ...meta,
//                   _page: page,
//                 })
//               }
//             />
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default App;

import { useState, useRef, useEffect } from "react";
import { Col, Pagination, Row, Spin, Input, Button } from "antd";
import {
  Route,
  Routes,
  useSearchParams,
  useLocation,
  Link,
} from "react-router-dom";
import "./App.css";

import useDidMount from "./hooks/useDidMount";
import restClient from "./service/restClient";
import CartItem, { ICardItemProps } from "./component/CardItem";
import FormFilter from "./component/FormFilter";
import CartOrder from "./component/CartOrder";
import { isEmpty } from "lodash";
import { getCartsApi } from "./service/cartApi";

interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
  title_like?: string;
}

function App() {
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
      <Routes>
        <Route path="/cart" element={<CartOrder />} />
      </Routes>

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
}

export default App;
