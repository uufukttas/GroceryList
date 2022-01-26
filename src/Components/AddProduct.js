import React, { useState } from 'react'

const initialState = { product: '' };

function AddProduct({ products, setProducts }) {
    const [form, setForm] = useState(initialState);

    const submitForm = e => {
        e.preventDefault();

        if (form.product === '') {
            return false;
        }

        setProducts([...products, form]);
        setForm(initialState);
    };

    const onChangeInput = e => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="add-product">
            <h1>GROCERY LIST</h1>
            <form onSubmit={submitForm}>
                <div className="grocery-list-product">
                    <label name="product"> Product </label>
                    <input name="product" type="text" value={form.product} onChange={onChangeInput}/>
                </div>

                <input className="grocery-list-btn" type="submit" value="Add Product"/>
            </form>
        </div>
    )
}

export default AddProduct;