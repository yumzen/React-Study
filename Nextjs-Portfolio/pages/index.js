import Image from "next/image"
import Head from "next/head"
import Navbar from "@/Components/Navbar"
import Main from "@/Components/Main"
import About from "@/Components/About"
import Skills from "@/Components/Skills"

export default function Home() {
    return (
    <div>
        <Head>
            <title>Front-End Developer</title>
        </Head>
        <Navbar/>
        <Main/>
        <About />
        <Skills />
    </div>
    )
}