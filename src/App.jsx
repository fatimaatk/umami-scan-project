import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './app.css';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
