import { memo } from "react";
import CardClass from "./CardClass";
import { classes } from "@/static";

const CardClassMemo = memo(CardClass);

export default function ListClass() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {classes.map((c, i) => (
        <CardClassMemo {...c} key={i} />
      ))}
    </div>
  );
}
