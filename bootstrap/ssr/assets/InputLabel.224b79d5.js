import { j as jsx } from "../ssr.js";
function InputLabel({
  value,
  htmlFor,
  children
}) {
  return /* @__PURE__ */ jsx("label", {
    className: "block font-medium text-sm text-gray-700 dark:text-gray-300",
    htmlFor,
    children: value || children
  });
}
export {
  InputLabel as I
};
