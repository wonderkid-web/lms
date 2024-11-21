import { memo } from "react";
import CardClass from "./CardClass";

const CardClassMemo = memo(CardClass);

export default function ListClass() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {[1, 2, 3, 4].map((i) => (
        <CardClassMemo classRoom={i} key={i} />
      ))}
    </div>
  );
}
