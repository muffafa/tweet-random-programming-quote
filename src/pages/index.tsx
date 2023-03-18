/* eslint-disable react-hooks/exhaustive-deps */
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tweet Random Programmer Quote</title>
        <meta
          name="description"
          content="Tweet Random Programmer Quote By muffafa"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-twitter-900 min-h-screen text-white">
          <Banner onClick={() => null} />
          <Card />
          <Button onClick={() => null}>Tweet With Image</Button>
          <Button onClick={() => null}>Tweet Only Text</Button>
          <Button onClick={() => null}>Next Quote</Button>
        </div>
      </main>
    </>
  );
}
