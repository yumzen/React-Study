import Image from "next/image"
import Head from "next/head"
import Navbar from "@/Components/Navbar"
import Main from "@/Components/Main"

export default function Home() {
    return (
    <div>
        <Head>
            <title>Front-End Developer</title>
        </Head>
        <Navbar/>
        <Main/>
    </div>
    )
}