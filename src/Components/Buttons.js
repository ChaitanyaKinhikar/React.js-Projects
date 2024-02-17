import React from 'react'

function Buttons({ onClick, label, className, type, editid }) {
    return (
        <button className={className} type={type} onClick={onClick}  >{label}</button>
    )
}

export default Buttons