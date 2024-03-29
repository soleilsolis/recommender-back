import { M as Modal } from "./Modal.a6f97e00.js";
import { j as jsx, a as jsxs } from "../ssr.js";
ConfirmationModal.Content = function ConfirmationModalContent({
  title,
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    children: /* @__PURE__ */ jsxs("div", {
      className: "sm:flex sm:items-start",
      children: [/* @__PURE__ */ jsx("div", {
        className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",
        children: /* @__PURE__ */ jsx("svg", {
          className: "h-6 w-6 text-red-600 dark:text-red-400",
          stroke: "currentColor",
          fill: "none",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          })
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "text-lg font-medium text-gray-900 dark:text-gray-100",
          children: title
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-4 text-sm text-gray-600 dark:text-gray-400",
          children
        })]
      })]
    })
  });
};
ConfirmationModal.Footer = function ConfirmationModalFooter({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right",
    children
  });
};
function ConfirmationModal({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(Modal, {
    ...props,
    children
  });
}
export {
  ConfirmationModal as C
};
