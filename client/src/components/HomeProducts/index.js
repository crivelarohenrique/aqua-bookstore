import {  
   HomeProductsBookUl,
   HPBookLi,
   HPBookLink,
   HPBookTitle,
   HPBookAuthor,
   HPBookPrice,
   HPBookImage
    } from "./StyledHomeProducts";

function HomeProducts({ products }) {
  return (
    <HomeProductsBookUl>
      {products.map((product) => (
        <HPBookLi key={product._id}>
          <HPBookLink to={`/livro/${product.slug}`}>
            <HPBookTitle>{product.title}</HPBookTitle>
            <HPBookImage src={product.imageSrc} alt={product.alt} />
          <HPBookAuthor>{product.author}</HPBookAuthor>
          <HPBookPrice>R$ {product.price},00</HPBookPrice>
          </HPBookLink>
        </HPBookLi>
      ))}
    </HomeProductsBookUl>
  );
}

export default HomeProducts;
