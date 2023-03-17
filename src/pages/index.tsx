/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Button from "./components/Button";
import { useState, useEffect, use } from "react";
import axios, { AxiosError } from "axios";

type Quote = {
  author: string;
  quote: string;
};

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>();
  const [state, setState] = useState<"loading" | "error" | "done" | null>(null);

  const fetchRandomQuote = async () => {
    const res = await axios.get(
      "https://programming-quotesapi.vercel.app/api/random"
    );
    return {
      author: res.data.author,
      quote: res.data.quote,
    };
  };

  const getNewTweet = () => {
    console.log("getNewTweet");
    setState("loading");
    fetchRandomQuote()
      .then((quote) => setQuote(quote))
      .then(() => setState("done"))
      .catch((e: Error | AxiosError) => setState("error"));
  };

  useEffect(() => {
    getNewTweet();
  }, []);

  const shareTweet = () => {
    const tweetText = quote?.quote + " - " + quote?.author;
    console.log("shareTweet");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetUrl, "_blank");
  };

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
      <main className={styles.main}>
        <h1 style={{ textAlign: "center" }}>Tweet Random Programmer Quote</h1>
        <h2 style={{ textAlign: "center", color: "gray" }}>by muffafa</h2>
        <div className={styles.quoteContainer}>
          {state === "loading" ? (
            <p>loading...</p>
          ) : state === "error" ? (
            <p>error...</p>
          ) : (
            <div className={styles.quote}>
              <p>{quote?.quote}</p>
              <p style={{ textAlign: "end" }}>{quote?.author}</p>
            </div>
          )}
        </div>
        <div className={styles.buttonsWrapper}>
          <Button onClick={getNewTweet}>New Tweet</Button>
          <Button onClick={shareTweet}>Share Tweet</Button>
        </div>
      </main>
    </>
  );
}
