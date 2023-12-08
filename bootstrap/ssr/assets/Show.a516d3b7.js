import DeleteUserForm from "./DeleteUserForm.5e387933.js";
import LogoutOtherBrowserSessions from "./LogoutOtherBrowserSessionsForm.c50925c0.js";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm.16130d05.js";
import UpdatePasswordForm from "./UpdatePasswordForm.d260bbe2.js";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.cb89d201.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { S as SectionBorder } from "./SectionBorder.4296d445.js";
import { A as AppLayout } from "./AppLayout.0b053b3e.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./Modal.8b827a79.js";
import "./SectionTitle.851fb022.js";
import "@headlessui/react";
import "react-dom";
import "./DangerButton.5e853d7b.js";
import "./DialogModal.b125c14e.js";
import "./TextInput.af5ee599.js";
import "./InputError.46a30786.js";
import "./SecondaryButton.fa7665f6.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./ActionMessage.14c4b9bf.js";
import "./PrimaryButton.42c71c70.js";
import "@inertiajs/core";
import "axios";
import "./InputLabel.017a652c.js";
import "./FormSection.46093c48.js";
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
