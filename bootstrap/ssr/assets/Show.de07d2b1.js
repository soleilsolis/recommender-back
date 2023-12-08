import DeleteUserForm from "./DeleteUserForm.ee795951.js";
import LogoutOtherBrowserSessions from "./LogoutOtherBrowserSessionsForm.c6bfca7d.js";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm.dc8b8800.js";
import UpdatePasswordForm from "./UpdatePasswordForm.3407aea0.js";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.ef03c69c.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { S as SectionBorder } from "./SectionBorder.dc5eac4e.js";
import { A as AppLayout } from "./AppLayout.e470f6cc.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "@inertiajs/react";
import "classnames";
import "react";
import "./Modal.59f22b1c.js";
import "./SectionTitle.5026acf4.js";
import "@headlessui/react";
import "react-dom";
import "./DangerButton.ce5ca450.js";
import "./DialogModal.55f7d828.js";
import "./TextInput.a1e7e997.js";
import "./InputError.6b93874b.js";
import "./SecondaryButton.2b9eff27.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./ActionMessage.acba4187.js";
import "./PrimaryButton.e4feac23.js";
import "@inertiajs/core";
import "axios";
import "./InputLabel.a34aaf80.js";
import "./FormSection.bdf61855.js";
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
