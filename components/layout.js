import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js Tutorial</title>
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
