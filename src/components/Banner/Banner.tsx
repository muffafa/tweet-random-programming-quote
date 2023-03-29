import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiCircleSmall, mdiClose, mdiHeartOutline, mdiHeartPlus } from "@mdi/js";
import Button from "../Button";

const Banner = () => {
  const [isBannerActive, setIsBannerActive] = useState(true);

  const goRepoHandler = () => {
    const repoUrl = "https://github.com/muffafa/tweet-random-programming-quote";
    createAndClickALink(repoUrl);
  };

  const goSponsorHandler = () => {
    const sponsorUrl = "https://github.com/sponsors/muffafa";
    createAndClickALink(sponsorUrl);
  };

  const createAndClickALink = (url: string) => {
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.target = "_blank";
    a.click();
    document.body.removeChild(a);
  }

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
          <Button onClick={goSponsorHandler} textClassName="bg-white text-black">
            Sponsor
            <Icon path={mdiHeartPlus} size={1} />
          </Button>
          <Button onClick={goRepoHandler} theme="secondary">
            Go To Repo
            <Icon path={mdiChevronRight} size={1} />
          </Button>
        </div>
        <Button onClick={closeHeaderHandler} theme="icon">
          <Icon path={mdiClose} size={1} />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
