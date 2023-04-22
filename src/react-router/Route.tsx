import { useContext } from "react";
import { RouterContext } from "./BrowserRouter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Route(props: any) {
  const { path: RoutePath, element: RouteElement } = props;
  const path = useContext(RouterContext);
  return path === RoutePath ? RouteElement : null;
}
