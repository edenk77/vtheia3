import {
    Card,
    CardContent,
} from "@/components/ui/card"
import ImageLoader from '@/components/ui/image-loader'
import Img1 from '@/img/teams.jpg'


const ImageBanner = () => {
    return (
        <div className='p-8'>
            <Card className='h-96 p-0'>
                <CardContent className='p-0'>
                    <ImageLoader src={Img1} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-96 w-full object-cover object-center" preview={''} />
                </CardContent>
            </Card>
        </div>

    )
}

export default ImageBanner