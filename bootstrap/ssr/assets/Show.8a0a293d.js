import DeleteUserForm from "./DeleteUserForm.6dfc822f.js";
import LogoutOtherBrowserSessions from "./LogoutOtherBrowserSessionsForm.f0d7989b.js";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm.ef05d244.js";
import UpdatePasswordForm from "./UpdatePasswordForm.4921218d.js";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.66ebc1d0.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { S as SectionBorder } from "./SectionBorder.540532ea.js";
import { A as AppLayout } from "./AppLayout.ee15cdfc.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./Modal.d8722a44.js";
import "./SectionTitle.98d6b2c7.js";
import "@headlessui/react";
import "react-dom";
import "./DangerButton.19b7ff16.js";
import "./DialogModal.532f87f8.js";
import "./TextInput.bb2e899d.js";
import "./InputError.35025349.js";
import "./SecondaryButton.aba8bb55.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./ActionMessage.94173af1.js";
import "./PrimaryButton.78b28481.js";
import "@inertiajs/core";
import "axios";
import "./InputLabel.242f5027.js";
import "./FormSection.396f3208.js";
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
