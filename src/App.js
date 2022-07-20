import "./App.css";
import Header from "./common/Header.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
        <Header />
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
