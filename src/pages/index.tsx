/* eslint-disable react-hooks/exhaustive-deps */
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Head from "next/head";
import Card from "../components/Card";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiTwitter } from "@mdi/js";
import Content from "@/components/Content";

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
      <div className="min-h-screen text-white">
        <Banner />
        <main>
          <Content />
          <div className="flex justify-center my-5">
            <iframe className="rounded-xl h-96 sm:h-56"
              src="https://github.com/sponsors/muffafa/card"
              title="Sponsor muffafa"
              height="225"
              width="600"
            ></iframe>
          </div>
        </main>
      </div>
    </>
  );
}
