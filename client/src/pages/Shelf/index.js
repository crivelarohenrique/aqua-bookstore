import { useContext, useEffect, useState } from "react";
import { 
    ShelfContainer,
    ShelfEmptyMessage,
    ShelfImageProduct,
    ShelfLi,
    ShelfSearchWrapper,
    ShelfTitle,
    ShelfTitleProduct,
    ShelfUl
    } from "./StyledShelf";
import { apiGetShelfItems } from "../../services/ShelfService";
import { AuthContext } from "../../contexts/AuthContext";
import Select from "../../components/Select";
import SearchBar from "../../components/SearchBar";
import NotFoundBooks from "../../components/404Products";
import { apiGetUsername } from "../../services/UserService";

function Shelf() {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([]);
    const { authenticated, loading } = useContext(AuthContext);
    const [displayShelf, setDisplayShelf] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('Todos')
    const [user, setUser] = useState(false)

    useEffect(() => {
        const loadShelf = async () => {
            try {
                const shelfLoaded = await apiGetShelfItems();
                const username = await apiGetUsername()
                setUser(username);
                setProducts(shelfLoaded)
                setAllProducts(shelfLoaded)
                setDisplayShelf(true)
            } catch (error) {
                setDisplayShelf(false)
            }
        }
        if (authenticated) {
            loadShelf();
        }
        
    }, [authenticated]);

    const handleSearch = (results) => {
        setProducts(results)
    }

    const handleChange = (category) => {
        setCurrentCategory(category)
    }

    const filteredProducts = currentCategory === 'Todos' ?
    products : products.filter((product) => product.category === currentCategory)

    if (loading || !displayShelf) {
        return null;
    } 

    return (
        <ShelfContainer>
        <ShelfTitle>Estante de {user} </ShelfTitle>
            {allProducts.length === 0 ? ( 
            <ShelfEmptyMessage> 
                Parece que sua estante está vazia,<br/> compre algum livro 📕 para poder começar sua coleção!
            </ShelfEmptyMessage> )
            : (
            <>
                <ShelfSearchWrapper>
                    <SearchBar onSearch={handleSearch} showTitle={false}/>
                </ShelfSearchWrapper>
                <Select onCategoryChange={handleChange}/>
                {filteredProducts.length === 0 && (
                <NotFoundBooks currentCategory={currentCategory}/>
               )}
                    <ShelfUl>
                        {filteredProducts.map((item, index) => (
                        <ShelfLi key={index}>
                            <ShelfImageProduct src={item.imageSrc}/>
                            <ShelfTitleProduct>{item.title}</ShelfTitleProduct>
                        </ShelfLi> 
                        ))}
                    </ShelfUl>
            </>
    )}
        </ShelfContainer>
    )
}

export default Shelf;