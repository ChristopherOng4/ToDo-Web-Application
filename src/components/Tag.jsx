import React from 'react'

import "./Tag.css"

const Tag = ({tagName, selectTag, selected}) => {
    const tagStyle = {
        Math: {backgroundColor: "#fda821"},
        English: {backgroundColor: "#15d4c8"},
        Biology: {backgroundColor: "#ffd12c"},
        History: {backgroundColor: "#4cdafc"},
        CS: {backgroundColor: "#0a6eff"},
        default: {backgroundColor: "#f9f9f9"},
    }
    return (
        <button 
            type="button" 
            className='tag'
            style= {selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    )
};

export default Tag