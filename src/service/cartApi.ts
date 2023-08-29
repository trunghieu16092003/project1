import restClient from "./restClient";

export const getCartsApi = () =>
  restClient({
    url: "/carts",
  });

export const createCartsApi = (data: any) =>
  restClient({
    url: "/carts",
    method: "post",
    data,
  });

  export const updateCartsApi = (data: any, id: string) =>
  restClient({
    url: `/carts/${id}`,
    method: "patch",
    data,
  });

  export const deleteCartsApi = ( id: string) =>
  restClient({
    url: `/carts/${id}`,
    method: "delete",
  });