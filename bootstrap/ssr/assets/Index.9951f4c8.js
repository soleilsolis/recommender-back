import APITokenManager from "./APITokenManager.2264b998.js";
import { A as AppLayout } from "./AppLayout.0db67c80.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.4d88d90c.js";
import "@headlessui/react";
import "./Modal.a6f97e00.js";
import "./SectionTitle.00915fda.js";
import "react-dom";
import "./Checkbox.bc375074.js";
import "./ConfirmationModal.1ac8c155.js";
import "./DangerButton.f1adc843.js";
import "./DialogModal.5c1f7c45.js";
import "./FormSection.47de93ec.js";
import "./InputError.7c75781f.js";
import "./InputLabel.6fec858d.js";
import "./PrimaryButton.5161cdb7.js";
import "./TextInput.06c89cbc.js";
import "./SecondaryButton.58a85fc5.js";
import "./SectionBorder.879cde12.js";
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
