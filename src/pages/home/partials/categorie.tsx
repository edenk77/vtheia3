import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function CategorieCta() {
    return (
        <Card className="w-full">
            <CardContent>
                <div className="xl:flex gap-6">
                    <div className="xl:w-full p-6">
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle>CTA</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <Button>hey</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}




