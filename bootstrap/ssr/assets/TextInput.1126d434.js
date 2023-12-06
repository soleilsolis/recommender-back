import classNames from "classnames";
import { forwardRef } from "react";
import { j as jsx } from "../ssr.js";
const TextInput = forwardRef((props, ref) => /* @__PURE__ */ jsx("input", {
  ...props,
  ref,
  className: classNames("border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm", props.className)
}));
const TextInput$1 = TextInput;
export {
  TextInput$1 as T
};
