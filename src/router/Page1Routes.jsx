import { Page1 } from "../view/Page1";
import { Page1DetailA } from "../view/Page1DetailA";
import { Page1DetailB } from "../view/Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    childred: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    childred: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    childred: <Page1DetailB />
  }
];
