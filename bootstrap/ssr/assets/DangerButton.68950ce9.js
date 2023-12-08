import classNames from "classnames";
import { j as jsx } from "../ssr.js";
function DangerButton({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx("button", {
    ...props,
    className: classNames("inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150", props.className),
    children
  });
}
export {
  DangerButton as D
};
