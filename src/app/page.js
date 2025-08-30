import Image from "next/image";
import WorkBoard from "../component/WorkBoard";
import SelectBoard from "../component/SelectBoard";

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
    </div>
  );
}
