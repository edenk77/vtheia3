
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



type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Panier: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

    return (
        <>
            {/* Commentaire : C'est ici que je stocke tout mes produits de panier */}
            <div className="pb-6">
                <Sheet>
                    <SheetTrigger asChild className="p-6">
                        <Button variant="outline">Valider mon panier</Button>
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
                                <div>Votre panier est vide pour l'instant. Remplissez le comme bon vous semble.</div>
                            )}
                            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
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
