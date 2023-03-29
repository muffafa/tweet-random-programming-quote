import React from "react";
import Icon from "@mdi/react";
import { mdiFormatQuoteOpen } from "@mdi/js";
import { selectQuote, setQuoteStatus, setQuoteSlice } from "@/redux/QuotesSlice";
import { useSelector } from "react-redux";

const Content = () => {
  const quoteState = useSelector(selectQuote);

  let content;

  if (quoteState.status === "idle") {
    content = <p>Welcome</p>;
  } else if (quoteState.status === "pending") {
    content = <p>Loading...</p>;
  } else if (quoteState.status === "error") {
    content = <p>Error</p>;
  } else if (quoteState.status === "done") {
    content = (
      <div className="text-sm md:text-base flex flex-col justify-between h-full space-y-24">
        <p>{quoteState?.quote}</p>
        <p className="text-end">{quoteState?.author}</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <Icon
          path={mdiFormatQuoteOpen}
          size={"6rem"}
          color={"#14171a"}
          className=""
        />
        <div>
          <h1 className="text-base md:text-xl">
            Tweet Random Programmer Quote
          </h1>
          <h2 className="text-sm md:text-lg">@Quote Programmer</h2>
        </div>
      </div>
      <div className="p-5 h-full">{content}</div>
    </>
  );
};

const Card = () => {
  return (
    <div className="flex w-full justify-center text-white">
      <div className="flex sm:aspect-square w-128 p-5 bg-twitter-900">
        <div className="bg-gradient-to-b from-twitter-500 to-twitter-90 rounded-xl p-6 w-full">
          <div className="container flex flex-col h-full">{Content()}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
