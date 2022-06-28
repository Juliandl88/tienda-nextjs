import Link from "next/link"

export default function faq(){
    return <div>
        <h1>FAQ</h1>
        <p>Hola {""}
        <Link href="/">
            <a>Home</a>
        </Link>
        </p>
    </div>
}