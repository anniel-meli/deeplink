import { useRouter } from 'next/router'

export default function Congrats() {
    const router = useRouter()
    console.log(router.query);
    return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        Url:
        <p>{router.query.link_url}</p>
        Price:
        <p>{router.query.price}</p>
        cart_id:
        <p>{router.query.cart_id}</p>
        Source:
        <p>{router.query.source}</p>
        <p></p>
    </div>
    )
}