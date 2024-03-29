import classNames from "classnames";
import { j as jsx } from "../ssr.js";
function PrimaryButton({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx("button", {
    ...props,
    className: classNames("inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150", props.className),
    children
  });
}
export {
  PrimaryButton as P
};
