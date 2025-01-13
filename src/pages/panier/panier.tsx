
import { useCart } from "../store/cart-context"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function Panier() {
    const { cart, removeFromCart } = useCart();

    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0)

    return (
        <>
            {/* Commentaire : C'est ici que je stocke tout mes produits de panier */}

            <Card>
                <CardHeader>
                    <CardTitle>Panier</CardTitle>
                    <CardDescription>Garder ici un aperçu de votre panier</CardDescription>
                </CardHeader>
                <CardContent>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Payer</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Voici votre panier</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div>
                                {cart.length > 0 ? (
                                    cart.map(product => (
                                        <li key={product.id}>
                                            <img src={product.imageSrc} alt={product.name} style={{ width: 50, height: 50 }} />
                                            <p>{product.name}</p>
                                            <p>{product.price} €</p>
                                            <button onClick={() => removeFromCart(product.id)}>Retirer</button>
                                        </li>
                                    ))
                                ) : (
                                    <p>Votre panier est vide.</p>
                                )}
                            </div>

                            <div>
                                Total: {totalPrice} $
                            </div>

                            <DialogFooter className="">
                                <Button type="submit">Payer</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </>
    )
}


export default Panier
