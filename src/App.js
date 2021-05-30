import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <NavMenu></NavMenu>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
      </Provider>
    </Router>
  );
}

export default App;
