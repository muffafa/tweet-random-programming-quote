import React from "react";
import { useState, useEffect, use } from "react";
import axios, { AxiosError } from "axios";
import Icon from "@mdi/react";
import { mdiFormatQuoteOpen } from "@mdi/js";

interface Props {
  children?: React.ReactNode;
}

type Quote = {
  author: string;
  quote: string;
};

const Card: React.FC<Props> = ({ children }) => {
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
    <div className="bg-gradient-to-b from-twitter-500 to-twitter-900 max-w-3xl">
      <div className="flex items-center">
        <Icon path={mdiFormatQuoteOpen} size={6} color={'#14171a'}/>
        <div>
          <h1 className="text-2xl">Tweet Random Programmer Quote</h1>
          <h2>@Quote Programmer</h2>
        </div>
      </div>
      <div>
        {state === "loading" ? (
          <p>loading...</p>
        ) : state === "error" ? (
          <p>error...</p>
        ) : (
          <div>
            <p>{quote?.quote}</p>
            <p style={{ textAlign: "end" }}>{quote?.author}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
