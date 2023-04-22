import { useContext } from "react";
import { HistoryContext } from "../react-router/BrowserRouter";

export default function Home() {
  const push = useContext(HistoryContext);
  return (
    <div
      onClick={() => {
        push("/user");
      }}
    >
      Home
    </div>
  );
}
