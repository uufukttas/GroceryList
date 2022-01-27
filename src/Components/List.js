import React from 'react'

function List({ products, setProducts }) {
    const removeProduct = event => {
        const product = event.target.parentElement.textContent;

        getFilteredData(product);
        setProducts(products);
        setStorageData();
    };

    const updateProduct = event => {
        const updatedItem = event.target.parentElement.textContent;
        const product = prompt('You can update');

        getFilteredData(updatedItem);
        products.push({ product: product });
        setProducts(products);
        setStorageData();
    };

    const getStorageData = () => JSON.parse(window.localStorage.getItem('grocery-list'));
    const setStorageData = () => window.localStorage.setItem('grocery-list', JSON.stringify(products));
    const getFilteredData = product => {
        products = getStorageData().filter(item => {
            return item.product !== product;
        });
    };

    return (
        <div className="list-grocery">
            <h1>LIST</h1>
            <ul className="grocery-list">
                {
                    products.map((item, index) => 
                        <li className="grocery-list-item" key={index}>
                            <p>{item.product}</p>
                            <input className='grocery-remove-btn' type='button' value='Remove' onClick={removeProduct}/>
                            <input className='grocery-update-btn' type='button' value='Update' onClick={updateProduct}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default List