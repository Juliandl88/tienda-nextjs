import Link from "next/link"
import styles from "../styles/menu.module.css"

export default function Menu(){
    return (
        <nav className={styles.menu}>
            <div>
                <Link href="./">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="./store">
                    <a className={styles.link}>Store</a>
                </Link>
                <Link href="./faq">
                    <a className={styles.link}>FAQ</a>
                </Link>
            </div>
            <div>
                <a href="#"> Cart (0)</a>
            </div>
        </nav>
    )
}