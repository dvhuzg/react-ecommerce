import "./App.css";
import Header from "./common/Header.jsx";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from "./pages/Pages";
import Data from './components/flashDeals/Data'
import { useState } from "react";

function App() {
const {productItems}= Data;
const [cartItem,setCardItem]=useState([]);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
