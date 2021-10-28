import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import './app.css';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
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
