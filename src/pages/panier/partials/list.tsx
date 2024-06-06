
import { useCart } from '@/pages/store/cart-context'
import { Button } from '@/components/ui/button'
import ImageLoader from '@/components/ui/image-loader';

const List: React.FC = () => {

    const { cart, removeFromCart } = useCart();

    return (
        // <div className='flex'>
        //     <div className='h-screen w-1/2'>
        //         <img
        //             src={Img1}
        //             alt="Front of men's Basic Tee in black."
        //             className="h-screen w-full object-cover object-center lg:h-full lg:w-full"
        //         />
        //     </div>
        //     <div className='h-full w-1/2'>
        //         <Card className='h-full p-12'>
        //             <CardHeader>
        //                 <CardDescription>Paiement reussi</CardDescription>
        //                 <CardTitle className='text-5xl'>Merci de votre achat</CardTitle>
        //                 <CardDescription>Nous apprécions votre commande, nous sommes en train de la traiter. Nous vous enverrons une confirmation très bientôt !</CardDescription>
        //             </CardHeader>
        //             <CardContent>
        //                 <div className='mb-6'>
        //                     <p>Tracking number</p>
        //                     <p>51547878755545848512</p>
        //                 </div>

        <div>
            <ul>
                {cart.map(product => (
                    <li>
                        <div key={product.id} className='w-full flex mb-6'>
                            <div className='flex w-2/3'>
                                <div className='h-32 w-32'>
                                    <ImageLoader src={product.imageSrc} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-32 w-32 rounded-lg object-cover object-center" preview={''} />
                                </div>
                                <div className='ml-2'>
                                    <p>{product.name}</p>
                                    <p>Carcoal</p>
                                </div>
                            </div>
                            <div className='w-1/3 flex justify-end'>
                                <p>{product.price}€</p>
                                <Button onClick={() => removeFromCart(product.id)}>Retirer</Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>


        //                 <Separator className="my-4" />
        //                 <div className='flex justify-between mb-6'>
        //                     <p>Sous total</p>
        //                     <p>$72.00</p>
        //                 </div>
        //                 <div className='flex justify-between mb-6'>
        //                     <p>Livraison</p>
        //                     <p>$8.00</p>
        //                 </div>
        //                 <div className='flex justify-between mb-6'>
        //                     <p>TVA</p>
        //                     <p>$6.40</p>
        //                 </div>
        //                 <Separator className="my-4" />
        //                 <div className='flex justify-between mb-12'>
        //                     <p>Total</p>
        //                     <p>$86.40</p>
        //                 </div>

        //                 <div className='flex justify-between'>
        //                     <div>
        //                         <p>Adresse de livraison</p>
        //                         <p>Kristin Watson</p>
        //                         <p>7363 Cynthia Pass</p>
        //                         <p>Bruxelles, 1000</p>
        //                     </div>
        //                     <div>
        //                         <IconBrandVisa />
        //                         <div>
        //                             <p>Ending with 4242</p>
        //                             <p>Expires 12 / 24</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <Separator className="my-4" />



        //             </CardContent>
        //             <CardFooter>

        //                 <div className='flex'>
        //                     <Link to={'/'}>Continuer le shopping  </Link>
        //                     <IconArrowRight />
        //                 </div>
        //             </CardFooter>
        //         </Card>
        //     </div>
        // </div>
    )
}

export default List