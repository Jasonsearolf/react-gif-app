import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }
  
  const onSubmit = (event) => {
    
    event.preventDefault();
    
    const trimValue = inputValue.trim();
    if(trimValue.length <= 1) return;
    onNewCategory(trimValue);
    // setCategories( categories => [...categories, inputValue]);
    setInputValue('');
  }
    
  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input 
          type="text"
          placeholder="Buscar gift"
          value={ inputValue }
          onChange={ onInputChange }
      />
    </form>
  )
}
