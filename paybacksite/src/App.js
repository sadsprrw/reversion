import Main from "./pages/Main";
import Cryptocurrency from "./pages/Cryptocurrency";
import BinaryOptions from "./pages/BinaryOptions";
import Forex from "./pages/Forex";
import StockTrading from "./pages/StockTrading";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Article from "./widgets/Article";
import {AuthContext, initialState, reducer} from "./properities/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useReducer} from "react";


function App() {
  const {t, i18n} = useTranslation();
  const [auth, dispatch] = useReducer(reducer, initialState)
  return (

      <Router forceRefresh={true}>
        <Switch>
          <AuthContext.Provider value={{auth, dispatch}}>
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
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/article">
              <Article />
            </Route>
          </AuthContext.Provider>
        </Switch>
      </Router>
  );
}

export default App;
