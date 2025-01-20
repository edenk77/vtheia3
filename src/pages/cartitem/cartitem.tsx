import React from 'react'
import { CartItemType } from '../catalogue/partials/catalogue-all';
import { Button } from '@/components/ui/button';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';




type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <>
            <div className="content">
                <h3>{item.name}</h3>
                <div className="information">
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button onClick={() => removeFromCart(item.id)}>
                        <MinusCircleIcon />
                    </Button>
                    <p>{item.amount}</p>
                    <Button onClick={() => addToCart(item)}>
                        <PlusCircleIcon />
                    </Button>
                </div>
            </div><div className="image">
                <img src={item.imageSrc} alt={item.name} />
            </div>
        </>
    )
}

export default CartItem;