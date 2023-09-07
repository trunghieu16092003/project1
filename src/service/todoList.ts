import restClient from "./restClient";

export const getTodoListsApi = () =>
  restClient({
    url: "/todoLists",
  });

export const createTodoListsApi = (data: any) =>
  restClient({
    url: "/todoLists",
    method: "post",
    data,
  });

export const updateTodoListsApi = (data: any, id: string) =>
  restClient({
    url: `/todoLists/${id}`,
    method: "patch",
    data,
  });

export const deleteTodoListsApi = (id: string) =>
  restClient({
    url: `/todoLists/${id}`,
    method: "delete",
  });
