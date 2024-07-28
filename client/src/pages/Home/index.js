import { 
  AppContainer, 
  HomeTitle
  } from './StyledHome'
import SearchBar from '../../components/SearchBar';
import { useContext, useEffect, useState } from 'react';
import { apiGetProducts } from '../../services/ProductService';
import HomeProducts from '../../components/HomeProducts'
import NotFoundBooks from '../../components/404Products';
import { AuthContext } from '../../contexts/AuthContext';
import HomeSelect from '../../components/Select';
import defaultSwalConfig from '../../styles/swalConfig';
import Swal from 'sweetalert2';

function Home() {
  const [products, setProducts] = useState([]);
  const [displayError, setDisplayError] = useState(false);
  const [forceRender, setForceRender] = useState(false); 
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const { authenticated, loading } = useContext(AuthContext);

  const handleSearch = (results) => {
    setProducts(results)
    setDisplayError(results.length < 1);
    setForceRender(!forceRender)
  };

  useEffect(() => {
    const loadProducts = async ()  => {
      try {
        const loadedBooks = await apiGetProducts();
        setProducts(loadedBooks)
        setForceRender(!forceRender);
      } catch (error) {
        Swal.fire(defaultSwalConfig);
      }
    };
    loadProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  const handleCategoryChange = (category) => {
    setCategoryFilter(category)
    setForceRender(!forceRender)
  };

  const filteredProducts =
  categoryFilter === "Todos" 
  ? products
   : products.filter((product) => product.category === categoryFilter)

  if(loading) {
    return null;
  }

  return (
    !filteredProducts ? null :
    <AppContainer>
      <HomeSelect onCategoryChange={handleCategoryChange}/>
      <HomeTitle>Aqua BookStore</HomeTitle>
      <SearchBar onSearch={handleSearch}/>
      {(displayError || (filteredProducts.length === 0 && products.length > 0)) && ( 
      <NotFoundBooks currentCategory={categoryFilter}/>
      )}
      <HomeProducts
      products={filteredProducts} 
      key={forceRender ? 'forceRender' : 'normalRender'}
      />
    </AppContainer>
  );
}

export default Home;
