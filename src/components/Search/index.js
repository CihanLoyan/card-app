import React from 'react'
import './index.scss';

const Search = ({onChange}) => {  // DESTRUCTURING
    return (
        <div className="Search">
            <input type="text" onChange={onChange} />
        </div>
    );
};

export default Search;
