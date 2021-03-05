import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products');
            const items = await data.json();
            console.log(items);
            setItems([...items]);
        } catch(error) {
            console.error(error);            
        }
    }
    return (
        <div>
            {items.map(item => (
                <h1 key={item.id}>
                    {/*
                        When you link to something, that component (via Switch) gets some props
                        through react-router-dom.
                    */}
                    <Link to={`/shop/${item.id}`}>
                        {item.title}
                    </Link>
                </h1>
            ))}
        </div>
    );
}
 
export default Shop;