import { Page2 } from "../view/Page2";
import { UrlParameter } from "../view/UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    childred: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    childred: <UrlParameter />
  }
];
