import React, { useEffect, useState } from 'react';

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({});
    useEffect(() => {
        fetchItem();
    }, []);
    const fetchItem = async () => {
        try {
            const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
            const item = await fetchItem.json();
            setItem(item);
        } catch(error) {
            console.error(error);
        }
    }
    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
        </div>
    );
}
 
export default ItemDetail;