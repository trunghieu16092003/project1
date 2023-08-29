import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useState } from "react";

import { ICardItemProps } from "./CardItem";
import useDidMount from "../hooks/useDidMount";
import {
  getCartsApi,
  deleteCartsApi,
  updateCartsApi,
} from "../service/cartApi";
import { SpaceContext } from "antd/es/space";

const { Column } = Table;

const CartOrder: React.FC = () => {
  const [carts, setCarts] = useState<ICardItemProps[]>([]);
  const totalAmount = carts.reduce((total, cart) => {
    return total + cart.price * cart.count;
  }, 0);
  async function getCarts() {
    const res = await getCartsApi();
    setCarts(res);
  }

  const handleUpdateCartItem = async (newCount: number, id: string) => {
    const updatedCart = { count: newCount };
    const res = await updateCartsApi(updatedCart, id);
    if (res) {
      setCarts((prevCarts) =>
        prevCarts.map((cart) =>
          cart.id === id ? { ...cart, count: newCount } : cart
        )
      );
    } else {
      alert("Failed to update the quantity.");
    }
  };

  const handleDeleteCartItem = async (id: string) => {
    const res = await deleteCartsApi(id);
    if (res) {
      confirm("Are you sure");
      setCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== id));
    } else {
      alert("Failed to delete the item.");
    }
    getCarts();
  };

  useDidMount(() => {
    getCarts();
  });

  return (
    <div>
      <Table dataSource={carts}>
        <Column title="title" dataIndex="title" key="title" />
        Tất nhiên, bạn có thể thêm các nút '+' và '-' vào cột có tiêu đề là
        "quantity". Để làm điều này, bạn cần chỉnh sửa phần render của cột
        "quantity" trong mã của bạn như sau: jsx Copy code
        <Column
          title="quantity"
          dataIndex="count"
          key="count"
          render={(count, record: any) => (
            <Space>
              <button
                onClick={() => handleUpdateCartItem(count + 1, record.id)}
              >
                +
              </button>
              <span>{count}</span>
              <button
                onClick={() => {
                  if (count > 0) {
                    handleUpdateCartItem(count - 1, record.id);
                  }
                }}
              >
                -
              </button>
            </Space>
          )}
        />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          render={(price, record: any) => (
            <span>${(price * record.count).toFixed(2)}</span>
          )}
        />
        <Column
          title="Actions"
          dataIndex="id"
          key="id"
          render={(id) => (
            <button onClick={() => handleDeleteCartItem(id)}>Delete</button>
          )}
        />
      </Table>
      <span>Total: ${totalAmount.toFixed(2)}</span>
    </div>
  );
};

export default CartOrder;
