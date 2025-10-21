import Image from "next/image";
import WorkBoard from "../component/WorkBoard";
import SelectBoard from "../component/SelectBoard";
import page from "./login/page";

export default function Home() {
  return (
    <div>
      <div className="flex gap-10 flex-wrap">
        <div>
          <WorkBoard />
        </div>
        <div>
          <SelectBoard />
        </div>
      </div>
      <div className="w-full border-1"> joshi</div>
    </div>
  );
}
