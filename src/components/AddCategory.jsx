import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

const [inputValue, setInputVaue] = useState('')

const onInputChange = (event) => {
    setInputVaue( event.target.value )
}  

const onSubmit = ( event ) => {
    event.preventDefault()
    
    if( inputValue.trim().length <= 1 ) return;

    onNewCategory(inputValue.trim())
    setInputVaue('')
}

  return (
    <form onSubmit={ onSubmit  } >
        <input 
            type='text'
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange = { onInputChange }
        />
    </form>
  )
}
