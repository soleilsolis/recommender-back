import classNames from "classnames";
import { S as SectionTitle } from "./SectionTitle.5026acf4.js";
import { a as jsxs, j as jsx } from "../ssr.js";
function FormSection({
  onSubmit,
  renderActions,
  title,
  description,
  children
}) {
  const hasActions = !!renderActions;
  return /* @__PURE__ */ jsxs("div", {
    className: "md:grid md:grid-cols-3 md:gap-6",
    children: [/* @__PURE__ */ jsx(SectionTitle, {
      title,
      description
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-5 md:mt-0 md:col-span-2",
      children: /* @__PURE__ */ jsxs("form", {
        onSubmit: (e) => {
          e.preventDefault();
          onSubmit();
        },
        children: [/* @__PURE__ */ jsx("div", {
          className: classNames("px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow", hasActions ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md"),
          children: /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-6 gap-6",
            children
          })
        }), hasActions && /* @__PURE__ */ jsx("div", {
          className: "flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md",
          children: renderActions == null ? void 0 : renderActions()
        })]
      })
    })]
  });
}
export {
  FormSection as F
};
