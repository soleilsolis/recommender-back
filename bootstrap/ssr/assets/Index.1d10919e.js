import APITokenManager from "./APITokenManager.43617537.js";
import { A as AppLayout } from "./AppLayout.575130b7.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.f611912d.js";
import "@headlessui/react";
import "./Modal.e5dd0e43.js";
import "./SectionTitle.283fcff2.js";
import "react-dom";
import "./Checkbox.791644dc.js";
import "./ConfirmationModal.17bee6a4.js";
import "./DangerButton.0e7c3919.js";
import "./DialogModal.21aeec81.js";
import "./FormSection.fefa0a59.js";
import "./InputError.c9fabfa6.js";
import "./InputLabel.9c23c9c8.js";
import "./PrimaryButton.e99ccc5a.js";
import "./TextInput.bb601db5.js";
import "./SecondaryButton.9346a1d5.js";
import "./SectionBorder.7580c308.js";
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
