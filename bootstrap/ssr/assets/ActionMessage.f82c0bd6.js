import { Transition } from "@headlessui/react";
import { j as jsx } from "../ssr.js";
function ActionMessage({
  on,
  className,
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className,
    children: /* @__PURE__ */ jsx(Transition, {
      show: on,
      leave: "transition ease-in duration-1000",
      "leave-from-class": "opacity-100",
      leaveTo: "opacity-0",
      children: /* @__PURE__ */ jsx("div", {
        className: "text-sm text-gray-600 dark:text-gray-400",
        children
      })
    })
  });
}
export {
  ActionMessage as A
};
