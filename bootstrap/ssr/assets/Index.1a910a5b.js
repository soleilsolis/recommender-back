import APITokenManager from "./APITokenManager.8e14b6c3.js";
import { A as AppLayout } from "./AppLayout.433bae9b.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.7447a784.js";
import "@headlessui/react";
import "./Modal.ecaaf61b.js";
import "./SectionTitle.29f3552c.js";
import "react-dom";
import "./Checkbox.7dc56887.js";
import "./ConfirmationModal.2323c210.js";
import "./DangerButton.beb72284.js";
import "./DialogModal.04e591bf.js";
import "./FormSection.6dd9cf95.js";
import "./InputError.b3bb85f5.js";
import "./InputLabel.d803ea58.js";
import "./PrimaryButton.7e3b498c.js";
import "./TextInput.6aef6783.js";
import "./SecondaryButton.dff92de8.js";
import "./SectionBorder.e16c4a94.js";
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
