import React from 'react';

function Form() {

    const [name, setName] = React.useState("");

    function handleChange(event){
        setName(event.target.value);
        console.log(name);
    };

    return (
        <form>
            <input 
                type='text'
                placeholder='Enter your name'
                onChange={handleChange}
            />
        </form>
    )
}

export default Form;