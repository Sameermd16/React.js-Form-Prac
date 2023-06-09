import React from 'react';

function Form() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employmentStatus: '',
        favColor: '',
    });

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData((prevFormData)=> {
            return ({
                ...prevFormData,
                [name] : type === 'checkbox' ? checked : value
            })
        })
    };
    function submitForm(event) {
        event.preventDefault();
        //submitAPI()
        console.log(formData)
    }

    return (
        <form onSubmit={submitForm}>
            <input 
                type='text'
                placeholder='first name'
                onChange={handleChange}
                name='firstName'
                value={formData.firstName}
            />
            <input 
                type='text'
                placeholder='last name'
                onChange={handleChange}
                name='lastName'
                value={formData.lastName}
            />
            <input 
                type='email'
                placeholder='email address'
                onChange={handleChange}
                name='email'
                value={formData.email}
            />
            <textarea 
                placeholder='comments'
                onChange={handleChange}
                name='comments'
                value={formData.comments}
            />
            <input 
                type='checkbox'
                onChange={handleChange}
                name='isFriendly'
                checked={formData.isFriendly}
                id='isFriendly'
            />
            <label htmlFor='isFriendly'>Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current Employment Status</legend>
                <input type='radio' id='unemployed' name='employmentStatus' onChange={handleChange} value='unemployed' 
                    checked={formData.employmentStatus === "unemployed"}
                />
                <label htmlFor='unemployed'>Unemployed</label>
                <br />
                <input type='radio' id='part-time' name='employmentStatus' onChange={handleChange} value='part-time' 
                    checked={formData.employmentStatus === "part-time"}
                />
                <label htmlFor='part-time'>Part-time</label>
                <br />
                <input type='radio' id='full-time' name='employmentStatus'onChange={handleChange} value='full-time' 
                    checked={formData.employmentStatus === "full-time"}
                />
                <label htmlFor='full-time'>Full-time</label>
                <br />
            </fieldset>
            <br />
            <label>Choose your favourite color</label>
            <select
                id='favColor'
                name='favColor'
                onChange={handleChange}
                value={formData.favColor}
            >
                <option value='' selected >-- Choose --</option>
                <option value='red' >Red</option>
                <option value='orange' >Orange</option>
                <option value='yellow' >Yellow</option>
                <option value='blue' >Blue</option>
                <option value='violet' >Voilet</option>
                <option value='green' >Green</option>
                <option value='black' >Black</option>
                <option value='purple' >Purple</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Form;