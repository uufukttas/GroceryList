import React, { useState } from 'react'

function List({ products, setProducts }) {
    const removeProduct = (event) => {
        const removedItem = event.target.parentElement;
        const product = removedItem.textContent;

        products = JSON.parse(window.localStorage.getItem('grocery-list')).filter(item => {
            return item.product !== product;
        });

        setProducts(products);
        window.localStorage.setItem('grocery-list', JSON.stringify(products));
    }

    return (
        <div className="list-grocery">
            <h1>LIST</h1>
            <ul className="grocery-list">
                {
                    products.map((item, index) => 
                        <li className="grocery-list-item" key={index}>
                            <p>{item.product}</p>
                            <input className='grocery-remove-btn' type='button' value='Remove' onClick={removeProduct}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default List