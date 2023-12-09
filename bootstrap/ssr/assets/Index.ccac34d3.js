import APITokenManager from "./APITokenManager.6d9d5292.js";
import { A as AppLayout } from "./AppLayout.47d7f6cf.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.9615fab2.js";
import "@headlessui/react";
import "./Modal.f331cb78.js";
import "./SectionTitle.e3572315.js";
import "react-dom";
import "./Checkbox.c7abccf2.js";
import "./ConfirmationModal.5d7216bd.js";
import "./DangerButton.eb5afb3f.js";
import "./DialogModal.6a234e26.js";
import "./FormSection.efcd153d.js";
import "./InputError.5b3ccbba.js";
import "./InputLabel.de0cbe34.js";
import "./PrimaryButton.f593478d.js";
import "./TextInput.fab707ea.js";
import "./SecondaryButton.7eb95daa.js";
import "./SectionBorder.79c9b16f.js";
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
