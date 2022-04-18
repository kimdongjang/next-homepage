import { useRouter } from "next/router";
import Layout from "../../components/Layout";


const Content = (props:any) => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            <h1>{router.query.title}</h1>
        </div>
    )
}

export default Content;