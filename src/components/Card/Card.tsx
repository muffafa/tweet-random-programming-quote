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
    <div className="flex w-full justify-center my-10">
      <div className="flex sm:aspect-square w-128 p-5 bg-twitter-900">
        <div className="bg-gradient-to-b from-twitter-500 to-twitter-90 rounded-xl p-6 w-full">
          <div className="container flex flex-col h-full">
            <div className="flex items-center">
              <Icon path={mdiFormatQuoteOpen} size={"6rem"} color={"#14171a"} className=""/>
              <div>
                <h1 className="text-base md:text-xl">Tweet Random Programmer Quote</h1>
                <h2 className="text-sm md:text-lg">@Quote Programmer</h2>
              </div>
            </div>
            <div className="p-5 h-full">
              {state === "loading" ? (
                <p>loading...</p>
              ) : state === "error" ? (
                <p>error...</p>
              ) : (
                <div className="text-sm md:text-base flex flex-col justify-between h-full space-y-24">
                  <p>{quote?.quote}</p>
                  <p className="text-end">{quote?.author}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
