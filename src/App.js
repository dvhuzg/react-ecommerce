import "./App.css";
import Header from "./common/Header.jsx";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
