import Icon from "@mdi/react";
import { mdiChevronRight, mdiContentCopy, mdiDownload, mdiTwitter } from "@mdi/js";
import Button from "../Button";
import Card from "../Card";
import { createRef, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectQuote, setQuoteSlice, setQuoteStatus } from "@/redux/QuotesSlice";
import html2canvas from "html2canvas";

const Content = () => {
  const exportRef = createRef<HTMLDivElement>();
  const quoteState = useSelector(selectQuote);
  const dispatch = useDispatch();

  useEffect(() => {
    getNewTweet();
  }, [])

  const fetchRandomQuote = async () => {
    const res = await axios.get(
      "https://programming-quotesapi.vercel.app/api/random"
    );
    return res.data;
  };

  const getNewTweet = () => {
    console.log("getNewTweet");
    dispatch(setQuoteStatus("pending"));
    fetchRandomQuote()
      .then((data) => {
        dispatch(setQuoteStatus("done"));
        dispatch(setQuoteSlice(data));
      })
      .catch((e: Error | AxiosError) => dispatch(setQuoteStatus("error")));
  };

  const shareTweet = () => {
    const tweetText = quoteState?.quote + " - " + quoteState?.author;
    console.log("shareTweet");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      getQuoteText()
    )}`;
    window.open(tweetUrl, "_blank");
  };

  const getQuoteText = () => {
    return quoteState?.quote + " - " + quoteState?.author;
  }

  const copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(getQuoteText());
      window.alert("Content has been copied to the clipboard and you can paste (shortcut: ctrl+v) and share it.");
    } catch (err) {
      console.error("Failed to copy: ", err);
    } 
  }

  const exportAsImage = async (el: any, imageFileName: string) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/jpeg", 1.0);
    downloadImage(image, imageFileName); 
  };

  const downloadImage = (blob :any, fileName:string) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.download = fileName;
    fakeLink.href = blob;
    fakeLink.style.display = "none";
    
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    
    fakeLink.remove();
    };
  
  return (
    <div className="flex flex-col w-full justify-center items-center mt-5">
      <div ref={exportRef}>
        <Card />
      </div>
      <div className="grid grid-cols-8 gap-4 pb-10 mx-4 mt-5">
      <div className="col-span-4 md:col-span-2 flex justify-center">
        <Button onClick={() => shareTweet()} textClassName="w-full">
          <Icon path={mdiTwitter} size={1} />
          Tweet
        </Button>
      </div>
      <div className="col-span-4 md:col-span-2 flex justify-center">
        <Button onClick={() => exportAsImage(exportRef.current, "test")} textClassName="w-full">
          <Icon path={mdiDownload} size={1} />
          Download JPEG
        </Button>
      </div>
      <div className="col-span-4 md:col-span-2 flex justify-center">
        <Button onClick={() => copyQuote()} textClassName="w-full">
          Copy Quote
          <Icon path={mdiContentCopy} size={1} />
        </Button>
      </div>
      <div className="col-span-4 md:col-span-2 flex justify-center">
        <Button onClick={() => getNewTweet()} theme="secondary" textClassName="w-full">
          Next Quote
          <Icon path={mdiChevronRight} size={1} />
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Content;
