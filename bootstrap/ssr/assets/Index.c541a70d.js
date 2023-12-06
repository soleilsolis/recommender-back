import APITokenManager from "./APITokenManager.0656f968.js";
import { A as AppLayout } from "./AppLayout.02e9f5b4.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.f82c0bd6.js";
import "@headlessui/react";
import "./Modal.ac639ebd.js";
import "./SectionTitle.50b541ef.js";
import "react-dom";
import "./Checkbox.57b5d71c.js";
import "./ConfirmationModal.39521e63.js";
import "./DangerButton.ee2440b4.js";
import "./DialogModal.5e8f7e46.js";
import "./FormSection.a425f821.js";
import "./InputError.02e7dd47.js";
import "./InputLabel.2a22b77f.js";
import "./PrimaryButton.1dfe9481.js";
import "./TextInput.1126d434.js";
import "./SecondaryButton.69aa4493.js";
import "./SectionBorder.26df6eb0.js";
import "./useTypedPage.7ef925b5.js";
import "@inertiajs/core";
import "@material-tailwind/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function ApiTokenIndex({
  tokens,
  availablePermissions,
  defaultPermissions
}) {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "API Tokens",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "API Tokens"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(APITokenManager, {
          tokens,
          availablePermissions,
          defaultPermissions
        })
      })
    })
  });
}
export {
  ApiTokenIndex as default
};
