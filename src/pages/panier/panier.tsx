
import { Button } from "@/components/ui/button";
import { CartProvider } from "../store/cart-context"
import { useCart } from "../store/cart-context"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



function Panier() {
    const { cart, removeFromCart } = useCart();

    return (
        <>
            <CartProvider>

                <Card>
                    <CardHeader>
                        <CardTitle>Panier</CardTitle>
                        <CardDescription>Garder ici un aperçu de votre panier</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {cart.map(product => (
                            <li key={product.id}>
                                {product.name} - ${product.price}
                                <button onClick={() => removeFromCart(product.id)}>Retirer</button>
                            </li>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button>Payer</Button>
                    </CardFooter>
                </Card>

            </CartProvider>
        </>
    )
}


export default Panier
