import React from 'react'
import { CartItemType } from '../catalogue/partials/catalogue-all';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IconBadge4k, IconCircleMinus, IconCirclePlus, IconCirclePlusFilled } from '@tabler/icons-react';


// Opération utilisé pour checker et retourner les données qui vont passer dans les pages
type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};


// J'utilise les éléments que j'ai déclarer dans la variable que je rappelle - ITEM dans CART ITEM
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <>
            <Card className='mb-6'>
                <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>
                        <div>
                            <p>Prix: {item.price} €</p>
                            <p>Total: {(item.amount * item.price).toFixed(2)} €</p>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <img src={item.imageSrc} alt={item.name} />

                </CardContent>
                <CardFooter>
                    <div className='flex justify-between'>
                        <div>
                            <IconCircleMinus onClick={() => removeFromCart(item.id)} />
                        </div>
                        <p>{item.amount}</p>
                        <div>
                            <IconCirclePlus onClick={() => addToCart(item)} />
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default CartItem;