
import { useCart } from '@/pages/store/cart-context'
import { Button } from '@/components/ui/button'
import ImageLoader from '@/components/ui/image-loader';

const List: React.FC = () => {

    const { cart, removeFromCart } = useCart();

    return (

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
    )
}

export default List