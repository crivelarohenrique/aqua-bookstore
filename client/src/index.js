import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle, Main } from './styles/StyledGlobal.js';
import ScrollToTop from './components/ScrollToTop.js';
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import Shelf from './pages/Shelf/index.js';
import Cart from './pages/Cart/index.js';
import PrivateRoute from './components/PrivateRoute/index.js';
import NotFound from './components/404';
import PublicRoute from './components/PublicRoute/index.js';
import { CartProvider } from './contexts/CartContext.js';
import { AuthProvider } from './contexts/AuthContext.js';
import ProductDetails from './pages/Product/index.js';

const App = () => {
    
    return (
    <AuthProvider>
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop/>
                <Header/>
                <Main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/livro/:slug" element={<ProductDetails/>}/>
                    <Route path="/estante" element={<PrivateRoute element={<Shelf/>}/>}/>
                    <Route path='/carrinho' element={<PrivateRoute element={<Cart/>}/>}/>
                    <Route path="/entrar" element={<PublicRoute element={<Login/>}/>}/>
                    <Route path="/cadastre-se" element={<PublicRoute element={<Register/>}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                </Main>
                <Footer/>
            </BrowserRouter>
        </CartProvider> 
    </AuthProvider>
)
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <GlobalStyle />
    <App/>
    </>
);

