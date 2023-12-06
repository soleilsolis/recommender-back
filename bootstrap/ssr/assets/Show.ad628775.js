import DeleteUserForm from "./DeleteUserForm.400e6405.js";
import LogoutOtherBrowserSessions from "./LogoutOtherBrowserSessionsForm.33b28da0.js";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm.e684c35d.js";
import UpdatePasswordForm from "./UpdatePasswordForm.ebe7aaaf.js";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.bac191eb.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { S as SectionBorder } from "./SectionBorder.e16c4a94.js";
import { A as AppLayout } from "./AppLayout.433bae9b.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./Modal.ecaaf61b.js";
import "./SectionTitle.29f3552c.js";
import "@headlessui/react";
import "react-dom";
import "./DangerButton.beb72284.js";
import "./DialogModal.04e591bf.js";
import "./TextInput.6aef6783.js";
import "./InputError.b3bb85f5.js";
import "./SecondaryButton.dff92de8.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./ActionMessage.7447a784.js";
import "./PrimaryButton.7e3b498c.js";
import "@inertiajs/core";
import "axios";
import "./InputLabel.d803ea58.js";
import "./FormSection.6dd9cf95.js";
import "@material-tailwind/react";
function Show({
  sessions,
  confirmsTwoFactorAuthentication
}) {
  const page = useTypedPage();
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Profile",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Profile"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: [page.props.jetstream.canUpdateProfileInformation ? /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(UpdateProfileInformationForm, {
            user: page.props.auth.user
          }), /* @__PURE__ */ jsx(SectionBorder, {})]
        }) : null, page.props.jetstream.canUpdatePassword ? /* @__PURE__ */ jsxs("div", {
          className: "mt-10 sm:mt-0",
          children: [/* @__PURE__ */ jsx(UpdatePasswordForm, {}), /* @__PURE__ */ jsx(SectionBorder, {})]
        }) : null, page.props.jetstream.canManageTwoFactorAuthentication ? /* @__PURE__ */ jsxs("div", {
          className: "mt-10 sm:mt-0",
          children: [/* @__PURE__ */ jsx(TwoFactorAuthenticationForm, {
            requiresConfirmation: confirmsTwoFactorAuthentication
          }), /* @__PURE__ */ jsx(SectionBorder, {})]
        }) : null, /* @__PURE__ */ jsx("div", {
          className: "mt-10 sm:mt-0",
          children: /* @__PURE__ */ jsx(LogoutOtherBrowserSessions, {
            sessions
          })
        }), page.props.jetstream.hasAccountDeletionFeatures ? /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
            className: "mt-10 sm:mt-0",
            children: /* @__PURE__ */ jsx(DeleteUserForm, {})
          })]
        }) : null]
      })
    })
  });
}
export {
  Show as default
};
