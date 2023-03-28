import Icon from "@mdi/react";
import { mdiChevronRight, mdiTwitter } from "@mdi/js";
import Button from "../Button";

const Buttons = () => {
  return (
    <div className="grid grid-cols-6 gap-4 pb-10 mx-4">
      <div className="col-span-2 flex justify-center">
        <Button onClick={() => null} textClassName="w-full">
          <Icon path={mdiTwitter} size={1} />
          Tweet With Image
        </Button>
      </div>
      <div className="col-span-2 flex justify-center">
        <Button onClick={() => null} textClassName="w-full">
          <Icon path={mdiTwitter} size={1} />
          Tweet Only Text
        </Button>
      </div>
      <div className="col-span-2 flex justify-center">
        <Button onClick={() => null} theme="secondary" textClassName="w-full">
          Next Quote
          <Icon path={mdiChevronRight} size={1} />
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
