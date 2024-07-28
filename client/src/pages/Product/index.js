import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetProductByTitle } from '../../services/ProductService';
import {
    ProductAuthor,
    ProductContainer,
    ProductImage,
    ProductPrice,
    ProductSection,
    ProductSynopsis,
    ProductTitle,
    ProductWrapper,
    ProductWrapperButton,
    ProductWrapperDetails,
} from './StyledProduct';
import ButtonAddProductToCart from '../../components/ButtonAddProduct';
import defaultSwalConfig from '../../styles/swalConfig';
import Swal from 'sweetalert2';

function ProductDetails() {
    const [products, setProducts] = useState(null);
    const { slug } = useParams();
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const item = await apiGetProductByTitle(slug);
                setProducts(item)
            } catch (error) {
                Swal.fire(defaultSwalConfig);
            }
        };
        fetchProducts();
    }, [slug]);

    return (
        !products ? null :
        <ProductContainer>
            <ProductSection>
                <ProductWrapper>
                    <ProductImage src={products.imageSrc} alt={products.alt} />
                    <ProductPrice>R$ {products.price},00</ProductPrice>
                </ProductWrapper>
                <ProductWrapperDetails>
                    <ProductTitle>{products.title}</ProductTitle>
                    <ProductAuthor>{products.author}</ProductAuthor>
                    <ProductSynopsis>{products.synopsis}</ProductSynopsis>
                    <ProductWrapperButton>
                        <ButtonAddProductToCart 
                            id={products._id}
                            title={products.title} 
                        />
                    </ProductWrapperButton>
                </ProductWrapperDetails>
            </ProductSection>
        </ProductContainer>
    );
}

export default ProductDetails;
