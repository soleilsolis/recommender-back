import APITokenManager from "./APITokenManager.fdc652bf.js";
import { A as AppLayout } from "./AppLayout.37411846.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.50f129ee.js";
import "@headlessui/react";
import "./Modal.b62601d0.js";
import "./SectionTitle.7732b6dc.js";
import "react-dom";
import "./Checkbox.7b7d809f.js";
import "./ConfirmationModal.96bc1d8e.js";
import "./DangerButton.b155e654.js";
import "./DialogModal.fd4a240e.js";
import "./FormSection.9dd3c0d6.js";
import "./InputError.52331b1c.js";
import "./InputLabel.bcddd259.js";
import "./PrimaryButton.7a3e5f8c.js";
import "./TextInput.e96833f1.js";
import "./SecondaryButton.0e2ad188.js";
import "./SectionBorder.ab12cefe.js";
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
