import React from 'react';

const Style = {
    fontWeight: "bold", 
    color: "green"
}

export const Form = ({ type, name, className, id=null, value, placeholder=null }) => {
    return(
        <form>{value}</form>
    )
}

export const Input = ({ type, name, className, id=null, value=null, placeholder=null }) => {
    return (
        <input 
            type={type}
            name={name}
            value={value} 
            className={className}
            id={id}
            placeholder={placeholder}
        />
    )
}

export const Button = ({ type, name, value, className=null, id=null }) => {
    return (
        <button
            type={type}
            name={name}
            className={className}
            id={id}
        >
            {value}
        </button>
    )
}

export const Select = ({ name, key, value, className, id }) => {
    return (
        <select 
            name={name} 
            className={className} 
            id={id}
        >
            <option key={key}>{value}</option>
        </select>
    )
}

export const TextArea = ({ name, value, className=null, id=null }) => {
    return (
        <textArea 
            name={name} 
            className={className} 
            id={id}
        >
            {value}
        </textArea>
    )
}

export const Label = ({ htmlFor, value }) => {
    return (
        <label htmlFor={htmlFor} style={Style}>{value}</label>
    )
}

export const Table = () => {}