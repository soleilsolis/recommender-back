import APITokenManager from "./APITokenManager.15131485.js";
import { A as AppLayout } from "./AppLayout.acdc7158.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.18e7f4ca.js";
import "@headlessui/react";
import "./Modal.f93ae5bf.js";
import "./SectionTitle.5ac7f2d4.js";
import "react-dom";
import "./Checkbox.686ae21b.js";
import "./ConfirmationModal.83fc4d78.js";
import "./DangerButton.a1cad53b.js";
import "./DialogModal.c8d8ddd5.js";
import "./FormSection.b1d979ed.js";
import "./InputError.3687cf08.js";
import "./InputLabel.f76d1bcb.js";
import "./PrimaryButton.eae88601.js";
import "./TextInput.66795522.js";
import "./SecondaryButton.a1ef905d.js";
import "./SectionBorder.8a4c687a.js";
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
