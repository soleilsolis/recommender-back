import APITokenManager from "./APITokenManager.c806686d.js";
import { A as AppLayout } from "./AppLayout.bb7d01da.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./ActionMessage.d52efb2e.js";
import "@headlessui/react";
import "./Modal.a198b1e3.js";
import "./SectionTitle.a55e48fb.js";
import "react-dom";
import "./Checkbox.eba0016d.js";
import "./ConfirmationModal.a90475fc.js";
import "./DangerButton.f5533861.js";
import "./DialogModal.19dba5a3.js";
import "./FormSection.10e3661f.js";
import "./InputError.14bd9d6b.js";
import "./InputLabel.224b79d5.js";
import "./PrimaryButton.673227c8.js";
import "./TextInput.7e7c856a.js";
import "./SecondaryButton.a74045bf.js";
import "./SectionBorder.851f4e8d.js";
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
