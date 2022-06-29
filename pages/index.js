import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from '../components/layouts'

export default function Home() {
  return (
    <Layout title="Bienvenido">
        <div>Estas en index</div>
    </Layout>
  )
}
