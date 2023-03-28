import Icon from "@mdi/react";
import { mdiChevronRight, mdiCircleSmall, mdiClose } from "@mdi/js";
import Button from "../Button";
import Card from "../Card";
import Buttons from "./Buttons";

const Content = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-5">
      <Card />
      <Buttons />
    </div>
  );
};

export default Content;
