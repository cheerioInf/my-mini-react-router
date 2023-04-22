import Home from "./pages/home";
import User from "./pages/user";
import BrowserRouter from "./react-router/BrowserRouter";
import Route from "./react-router/Route";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </BrowserRouter>
  );
}

export default App;
