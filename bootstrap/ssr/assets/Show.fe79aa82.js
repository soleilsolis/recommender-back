import DeleteUserForm from "./DeleteUserForm.5176e9e3.js";
import LogoutOtherBrowserSessions from "./LogoutOtherBrowserSessionsForm.e19ea41c.js";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm.2ff5a0ff.js";
import UpdatePasswordForm from "./UpdatePasswordForm.1b8c3ee9.js";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.bbc5b5fe.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { S as SectionBorder } from "./SectionBorder.b1157714.js";
import { A as AppLayout } from "./AppLayout.7c99ff82.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./Modal.931a38e1.js";
import "./SectionTitle.ab6add35.js";
import "@headlessui/react";
import "react-dom";
import "./DangerButton.68950ce9.js";
import "./DialogModal.d358ebd3.js";
import "./TextInput.ede2ca65.js";
import "./InputError.5c1cee79.js";
import "./SecondaryButton.8887185b.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./ActionMessage.91724842.js";
import "./PrimaryButton.9cd5d313.js";
import "@inertiajs/core";
import "axios";
import "./InputLabel.d440dfee.js";
import "./FormSection.dc9658b7.js";
import "@material-tailwind/react";
import "moment";
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
