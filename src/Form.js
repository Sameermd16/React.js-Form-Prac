import React from 'react';

function Form() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employmentStatus: '',
    });

    console.log(formData.employmentStatus);

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData((prevFormData)=> {
            return ({
                ...prevFormData,
                [name] : type === 'checkbox' ? checked : value
            })
        })
    };

    return (
        <form>
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
        </form>
    )
}

export default Form;