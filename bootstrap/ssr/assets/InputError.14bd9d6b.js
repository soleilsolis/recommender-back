import { j as jsx } from "../ssr.js";
function InputError({
  message,
  className,
  children
}) {
  if (!message && !children) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", {
    className,
    children: /* @__PURE__ */ jsx("p", {
      className: "text-sm text-red-600 dark:text-red-400",
      children: message || children
    })
  });
}
export {
  InputError as I
};
