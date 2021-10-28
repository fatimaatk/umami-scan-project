import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import './app.css';
import ProductList from './components/ProductList/ProductList';
import MyUmami from './components/MyUmami/MyUmami';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/my-umami">
              <MyUmami />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
      <Header />
      <main className="main">
        <Search />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
