import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ImageLoader from '@/components/ui/image-loader'
import Img1 from '@/img/visiole_logo.png.png'
import Img2 from '@/img/coolblue_icon.png.png'
import Img3 from '@/img/maxiaids_logo.png.png'
import Img4 from '@/img/Group.png'

const BrandSponsor = () => {
    return (
        <div>
            <Card className="p-12 border-none shadow-none">
                <CardHeader className='text-center'>
                    <CardTitle className='text-5xl'>Nos marques alternatives</CardTitle>
                    <CardDescription>Nous sommes la somme d'une étude entre ses marques</CardDescription>
                </CardHeader>
                <CardContent className="inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0">
                    <div className='flex xl:flex-row flex-col justify-center gap-6 content-center'>
                        <div className='h-60 w-60 xl:mx-0 mx-auto'>
                            <ImageLoader src={Img1} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-60 w-full object-cover object-center" preview={''} />
                        </div>
                        <div className='h-30 w-30 content-center xl:mx-0 mx-auto'>
                            <ImageLoader src={Img2} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-full w-full object-cover object-center items-center" preview={''} />
                        </div>
                        <div className='h-60 w-60 content-center xl:mx-0 mx-auto'>
                            <ImageLoader src={Img3} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-30 w-full object-cover object-center" preview={''} />
                        </div>
                        <div className='h-60 w-60 content-center xl:mx-0 mx-auto'>
                            <ImageLoader src={Img4} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-30 w-full object-cover object-center" preview={''} />
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default BrandSponsor