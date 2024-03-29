import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiChevronRight,
  mdiCircleSmall,
  mdiClose,
  mdiHeartOutline,
  mdiHeartPlus,
} from "@mdi/js";
import Button from "../Button";

const Banner = () => {
  const [isBannerActive, setIsBannerActive] = useState(true);

  const closeHeaderHandler = () => {
    setIsBannerActive(false);
  };

  if (!isBannerActive) {
    return <></>;
  }

  return (
    <div className="bg-gradient-to-b from-twitter-500 to-twitter-900 py-5 px-2">
      <div className="container flex items-center justify-between flex-wrap">
        <strong>Open Source</strong>
        <div className="space-x-2 hidden md:flex">
          <Icon path={mdiCircleSmall} size={1} />
          <p>You can contribute to project.</p>
        </div>
        <div className="flex space-x-2 justify-center items-center">
          <a
            href="https://github.com/sponsors/muffafa"
            className="bg-white text-black rounded-md p-3 flex items-center justify-evenly text-xs md:text-base"
          >
            Sponsor
            <Icon path={mdiHeartPlus} size={1} />
          </a>
          <a
            href="https://github.com/muffafa/tweet-random-programming-quote"
            className="bg-transparent border-2 rounded-md p-3 flex items-center justify-evenly text-xs md:text-base"
            target={"_blank"}
          >
            Go To Repo
            <Icon path={mdiChevronRight} size={1} />
          </a>
        </div>
        <Button onClick={closeHeaderHandler} theme="icon">
          <Icon path={mdiClose} size={1} />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
