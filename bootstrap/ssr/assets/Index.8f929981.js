import APITokenManager from "./APITokenManager.14b96c0d.js";
import { A as AppLayout } from "./AppLayout.e470f6cc.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.acba4187.js";
import "@headlessui/react";
import "./Modal.59f22b1c.js";
import "./SectionTitle.5026acf4.js";
import "react-dom";
import "./Checkbox.5bb9716b.js";
import "./ConfirmationModal.2b9b54ec.js";
import "./DangerButton.ce5ca450.js";
import "./DialogModal.55f7d828.js";
import "./FormSection.bdf61855.js";
import "./InputError.6b93874b.js";
import "./InputLabel.a34aaf80.js";
import "./PrimaryButton.e4feac23.js";
import "./TextInput.a1e7e997.js";
import "./SecondaryButton.2b9eff27.js";
import "./SectionBorder.dc5eac4e.js";
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
