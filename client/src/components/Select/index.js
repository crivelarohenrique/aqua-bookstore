import { useState } from "react";
import { HomeSelectContainer, 
    HSMenu,
    HSOption, 
} from "./StyledHomeSelect";
function Select({ onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const categories = ['Todos', 'Romance', 'Ficção', 'Fantasia', 'Suspense', 'Terror']

    const handleCategoryChange = (event) => {
        const onSelectedCategory = event.target.value;
            setSelectedCategory(onSelectedCategory)
            onCategoryChange(onSelectedCategory);
        };
    return (
        <HomeSelectContainer>
        <HSMenu value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map(category =>
              <HSOption key={category} value={category}>
                {category}
              </HSOption>
          )}
        </HSMenu>
        </HomeSelectContainer>
    )
}

export default Select;