export const routes = {
  home: {
    key: "home",
    path: "/",
    get: () => "/",
  },
  show: {
    key: "show",
    path: "/show/:id",
    get: (id: number) => `/show/${id}`,
  },
};
