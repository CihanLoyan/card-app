import React from 'react'
import Card from '../Card';
import './index.scss';

const List = (props) => {
    return (
        <div className='List'>
            {props.card.map( (c) => {
                return <Card key={c.id} product={c} />;
            })}
        </div>
    );
};

export default List;
