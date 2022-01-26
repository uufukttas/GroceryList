import React from 'react'

function List({ products }) {
    return (
        <div className="list-grocery">
            <h1>LIST</h1>
            <ul className="grocery-list">
                {
                    products.map((item, index) => 
                        <li className="grocery-list-item" key={index}>
                            <p>{item.product}</p>
                            <input className='grocery-remove-btn' type='button' value='Remove'/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default List