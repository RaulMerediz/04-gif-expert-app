import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories, cats}) => { 
        const [inputValue, setinputValue] = useState('');
        const handleInputChange = (e)=>{
            console.log(e.target.value);
            setinputValue(e.target.value);
        }

        const checkValue = (inputVal)=>{
            if(cats.find(( i ) => i === inputVal)){
                return true
            }else{
                return false
            } 
        }
        const handleSubmit = (e) =>{
            e.preventDefault();
            // console.log(checkValue(inputValue));
            if (inputValue.trim().length>2 && !checkValue(inputValue)) {
                setCategories(cats => [inputValue, ...cats]);
                setinputValue('');
            }else{
                setinputValue('');
            }
        }
 
 return (   
    
    <form onSubmit={handleSubmit}>
        <input
            type="test"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
   
  )
}

AddCategory.propTypes={ 
    setCategories: PropTypes.func.isRequired
}

