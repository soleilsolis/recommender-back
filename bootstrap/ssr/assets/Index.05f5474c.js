import APITokenManager from "./APITokenManager.a6b6f9ad.js";
import { A as AppLayout } from "./AppLayout.0b053b3e.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.14c4b9bf.js";
import "@headlessui/react";
import "./Modal.8b827a79.js";
import "./SectionTitle.851fb022.js";
import "react-dom";
import "./Checkbox.209ea8c0.js";
import "./ConfirmationModal.bcde1e12.js";
import "./DangerButton.5e853d7b.js";
import "./DialogModal.b125c14e.js";
import "./FormSection.46093c48.js";
import "./InputError.46a30786.js";
import "./InputLabel.017a652c.js";
import "./PrimaryButton.42c71c70.js";
import "./TextInput.af5ee599.js";
import "./SecondaryButton.fa7665f6.js";
import "./SectionBorder.4296d445.js";
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