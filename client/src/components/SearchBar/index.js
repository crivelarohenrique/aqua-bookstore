import { 
    SbButton, 
    SbImage, 
    SbInput, 
    SbInputWrapper, 
    SbTitle, 
    SearchBarForm
} from "./StyledSearchBar";
import { apiGetProductByTitleInput }from "../../services/ProductService";
import { useState } from 'react'
import Search from '../../assets/search-icon.png' 
import defaultSwalConfig from "../../styles/swalConfig";
import Swal from "sweetalert2";

function SearchBar({ onSearch, showTitle = true}) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value)
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const trimmedTerm = term.trim();
        if (trimmedTerm && trimmedTerm !== '' ) {
            try {
                const results= await apiGetProductByTitleInput(trimmedTerm)
                onSearch(results, trimmedTerm)
            } catch(error) {
                Swal.fire(defaultSwalConfig);
            }
        } else {
            try { 
                const results = await apiGetProductByTitleInput(term)
                onSearch(results, term)
            } catch(error){
                Swal.fire(defaultSwalConfig);
            }
        }
    };

    return (
        <SearchBarForm onSubmit={handleSubmit}>
            {showTitle && <SbTitle>Gostaria de ler algo hoje?</SbTitle>}
            <SbInputWrapper>
                <SbInput
                    type='text'
                    placeholder='Digite o nome do livro...'
                    value={term}
                    onChange={handleChange}
                />
                <SbButton type="submit">
                    <SbImage src={Search}/>
                </SbButton>
            </SbInputWrapper>
        </SearchBarForm>
    );
}

export default SearchBar;
