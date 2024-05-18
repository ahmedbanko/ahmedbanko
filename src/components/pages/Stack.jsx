import StackItem from "../StackItem";
import { STACK_ITEMS } from "../../data";

export default function Stack() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
        STACK
      </h1>
      <ul className="space-y-2">
        {STACK_ITEMS.map((item, index) => (
          <StackItem key={index} item={item} />
        ))}
      </ul>
    </>
  );
}
