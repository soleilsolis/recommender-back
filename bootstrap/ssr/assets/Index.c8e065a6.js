import APITokenManager from "./APITokenManager.cfc10054.js";
import { A as AppLayout } from "./AppLayout.7c99ff82.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.91724842.js";
import "@headlessui/react";
import "./Modal.931a38e1.js";
import "./SectionTitle.ab6add35.js";
import "react-dom";
import "./Checkbox.b8567e9e.js";
import "./ConfirmationModal.c5952b10.js";
import "./DangerButton.68950ce9.js";
import "./DialogModal.d358ebd3.js";
import "./FormSection.dc9658b7.js";
import "./InputError.5c1cee79.js";
import "./InputLabel.d440dfee.js";
import "./PrimaryButton.9cd5d313.js";
import "./TextInput.ede2ca65.js";
import "./SecondaryButton.8887185b.js";
import "./SectionBorder.b1157714.js";
import "./useTypedPage.7ef925b5.js";
import "@inertiajs/core";
import "@material-tailwind/react";
import "moment";
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
