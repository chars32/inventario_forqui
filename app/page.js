import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>Esto sera el login </h1>
      <Link href='/inventario'>Inventario</Link>
    </div>
  )
}
