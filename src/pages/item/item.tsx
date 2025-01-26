import React from 'react'
import { CartItemType } from '../catalogue/partials/catalogue-all'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';

// Ici je rappelle ma déclaration d'items dans CARTITEM et je vais lu rajouter un bouton pour se rajouter dans le panier
type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
};


const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <div>
        <div>
            <Card key={item.id}>
                <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription className='underline decoration-dotted hover:text-blue-400'>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                    <p className="text-sm font-medium text-gray-900">{item.price}</p>
                </CardContent>
                <CardFooter>
                    <Button
                        color="primary"
                        onClick={() => handleAddToCart(item)}
                    >
                        Add to cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div >
);


export default Item