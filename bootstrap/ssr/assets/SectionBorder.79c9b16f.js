import { j as jsx } from "../ssr.js";
function SectionBorder() {
  return /* @__PURE__ */ jsx("div", {
    className: "hidden sm:block",
    children: /* @__PURE__ */ jsx("div", {
      className: "py-8",
      children: /* @__PURE__ */ jsx("div", {
        className: "border-t border-gray-200 dark:border-gray-700"
      })
    })
  });
}
export {
  SectionBorder as S
};
