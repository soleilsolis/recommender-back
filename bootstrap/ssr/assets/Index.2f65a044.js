import APITokenManager from "./APITokenManager.c6f85af6.js";
import { A as AppLayout } from "./AppLayout.764662fd.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.7cfcbe53.js";
import "@headlessui/react";
import "./Modal.d59a2f8b.js";
import "./SectionTitle.c1c46bad.js";
import "react-dom";
import "./Checkbox.305d572f.js";
import "./ConfirmationModal.ab411085.js";
import "./DangerButton.283e256c.js";
import "./DialogModal.d4cbc4b0.js";
import "./FormSection.de145f32.js";
import "./InputError.e2580f89.js";
import "./InputLabel.17128674.js";
import "./PrimaryButton.e132fa72.js";
import "./TextInput.77338c64.js";
import "./SecondaryButton.fd0b5268.js";
import "./SectionBorder.5014e195.js";
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
