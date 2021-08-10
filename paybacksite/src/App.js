import Main from "./pages/Main";
import Cryptocurrency from "./pages/Cryptocurrency";
import BinaryOptions from "./pages/BinaryOptions";
import Forex from "./pages/Forex";
import StockTrading from "./pages/StockTrading";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Article from "./widgets/Article";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useTranslation} from "react-i18next";


function App() {
  const {t, i18n} = useTranslation();
  return (
      <Router forceRefresh={true}>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/binary_options">
            <BinaryOptions />
          </Route>
          <Route path="/cryptocurrency">
            <Cryptocurrency />
          </Route>
          <Route path="/forex">
            <Forex />
          </Route>
          <Route path="/stock_trading">
            <StockTrading />
          </Route>
          <Route path="/contact_us">
            <ContactUs />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
