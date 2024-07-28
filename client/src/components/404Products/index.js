import { 
    NotFoundBooksContainer,
    NfbImage, 
    NfbMessage,
    } from "./Styled404products";
import noBooks from '../../assets/404-icon.png'

function NotFoundBooks({ currentCategory }) {
    return (
        <NotFoundBooksContainer>
            <NfbMessage>
                Nenhum livro encontrado com os filtros especificados.
            </NfbMessage>
            <NfbImage src={noBooks} alt='Livros não encontrados'/>
        </NotFoundBooksContainer>
    )
}


export default NotFoundBooks;