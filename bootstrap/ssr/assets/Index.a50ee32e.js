import APITokenManager from "./APITokenManager.5c072fab.js";
import { A as AppLayout } from "./AppLayout.31725274.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.fa57e35d.js";
import "@headlessui/react";
import "./Modal.56ee8236.js";
import "./SectionTitle.c523bc81.js";
import "react-dom";
import "./Checkbox.ed031e1e.js";
import "./ConfirmationModal.e548386c.js";
import "./DangerButton.550a1e65.js";
import "./DialogModal.60fcf0cc.js";
import "./FormSection.9ed002e0.js";
import "./InputError.03a5b9d5.js";
import "./InputLabel.13a82f82.js";
import "./PrimaryButton.cb103e03.js";
import "./TextInput.cf38c534.js";
import "./SecondaryButton.f69e0fa3.js";
import "./SectionBorder.72163e79.js";
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
