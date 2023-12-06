import { M as Modal } from "./Modal.ecaaf61b.js";
import { j as jsx, a as jsxs } from "../ssr.js";
DialogModal.Content = function DialogModalContent({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "px-6 py-4",
    children: [/* @__PURE__ */ jsx("div", {
      className: "text-lg font-medium text-gray-900 dark:text-gray-100",
      children: title
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-4 text-sm text-gray-600 dark:text-gray-400",
      children
    })]
  });
};
DialogModal.Footer = function DialogModalFooter({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right",
    children
  });
};
function DialogModal({
  children,
  ...modalProps
}) {
  return /* @__PURE__ */ jsx(Modal, {
    ...modalProps,
    children
  });
}
export {
  DialogModal as D
};
