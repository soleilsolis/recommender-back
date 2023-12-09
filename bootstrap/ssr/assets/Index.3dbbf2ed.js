import APITokenManager from "./APITokenManager.19bcbb24.js";
import { A as AppLayout } from "./AppLayout.ee15cdfc.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.94173af1.js";
import "@headlessui/react";
import "./Modal.d8722a44.js";
import "./SectionTitle.98d6b2c7.js";
import "react-dom";
import "./Checkbox.a18ae67f.js";
import "./ConfirmationModal.67656223.js";
import "./DangerButton.19b7ff16.js";
import "./DialogModal.532f87f8.js";
import "./FormSection.396f3208.js";
import "./InputError.35025349.js";
import "./InputLabel.242f5027.js";
import "./PrimaryButton.78b28481.js";
import "./TextInput.bb2e899d.js";
import "./SecondaryButton.aba8bb55.js";
import "./SectionBorder.540532ea.js";
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
