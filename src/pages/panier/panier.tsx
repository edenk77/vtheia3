
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CartItemType } from "../catalogue/partials/catalogue-all"
import CartItem from "../cartitem/cartitem"
import { Badge } from "@/components/ui/badge";



type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Panier: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    //Me donne le calcul total du panier
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

    //Me donne la petite pastille qui me met le nombre de produit
    const calculateTotalBadge = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount, 0);


    return (
        <>
            {/* Commentaire : C'est ici que je stocke tout mes produits de panier */}
            <div className="pb-6">
                <Sheet>
                    <SheetTrigger asChild className="p-6 flex justify-end">
                        <Button variant="outline" className="">
                            Valider mon panier
                            <Badge variant="destructive" className="ml-2">
                                {calculateTotalBadge(cartItems)}
                            </Badge>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-auto">
                        <SheetHeader>
                            <SheetTitle>Votre panier</SheetTitle>
                            <SheetDescription>
                                Nous vous faisons un récapitulatif de ce que vous avez sélectionné.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="p-6">
                            {cartItems.length ? (
                                <div className="">
                                    {cartItems.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            addToCart={addToCart}
                                            removeFromCart={removeFromCart}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="mb-6">Votre panier est vide pour l'instant. Remplissez le comme bon vous semble.</div>
                            )}
                            <h2>Total: {calculateTotal(cartItems).toFixed(2)} €</h2>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Payer</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}


export default Panier
