import { NotFoundContainer, NotFoundMessage, NotFoundTitle } from "./Styled404";

function NotFound() {
    return (
        <NotFoundContainer>
        <NotFoundTitle>
            404 - Não encontrado!
        </NotFoundTitle>
        <NotFoundMessage>A página que você está proucurando não existe.</NotFoundMessage>
        </NotFoundContainer>
    );
};

export default NotFound;