import React from "react";


const SearchBox = ({searchChange}): JSX.Element => {
    return (
    <div className='pa2'>
    <input 
        aria-label="Search Robots"
        className="pa3 ba b--green bg-light-green" 
        type='search' 
        placeholder='Search Buddys'
        onChange={searchChange}
    />
    </div>
    );
}

export default SearchBox