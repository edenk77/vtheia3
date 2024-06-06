import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Banner = () => {
    return (
        <Card className='h-36 rounded-none p-2'>
            <CardHeader>
                <CardDescription>About - Checkout out the latest release of Basic tees</CardDescription>
                <CardTitle className='text-3xl'>Nouveaux arrivages</CardTitle>
            </CardHeader>
        </Card>
    )
}

export default Banner