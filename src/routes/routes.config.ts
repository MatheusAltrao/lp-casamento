export const routes = {
  home: {
    path: "/",
    label: "Início",
  },
  gifts: {
    path: "/gifts",
    label: "Lista de Presentes",
  },
} as const;

export type RouteKey = keyof typeof routes;
