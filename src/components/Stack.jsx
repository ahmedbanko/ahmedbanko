import StackItem from "./StackItem";
import { STACK_ITEMS } from "../data";

export default function Stack(){
    return (
        <ul className="space-y-2">
        {STACK_ITEMS.map((item, index) => (
          <StackItem key={index} item={item} />
        ))}
      </ul>
    );
}