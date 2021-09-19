import React from 'react'
import './index.scss';

const Card = ({product}) => { // - DESTRUCTURING YÖNTEMİ - props.product.title gibi uzunca yazmamak için
    return (
        <div className='Card'>
            <h1>{product.title}</h1>
            <p>Adet(KG/Lt):{product.quantity}</p>
            <p>Birim Fiyat(TL):{product.price}</p>
            <p>Toplam(TL):{(product.price * product.quantity).toFixed}</p>
        </div>
    )
}

export default Card;
