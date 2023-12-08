import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { useRef } from "react";
import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { A as ActionMessage } from "./ActionMessage.14c4b9bf.js";
import { F as FormSection } from "./FormSection.46093c48.js";
import { I as InputError } from "./InputError.46a30786.js";
import { I as InputLabel } from "./InputLabel.017a652c.js";
import { P as PrimaryButton } from "./PrimaryButton.42c71c70.js";
import { T as TextInput } from "./TextInput.af5ee599.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.851fb022.js";
function UpdatePasswordForm() {
  const route = useRoute();
  const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const passwordRef = useRef(null);
  const currentPasswordRef = useRef(null);
  function updatePassword() {
    form.put(route("user-password.update"), {
      errorBag: "updatePassword",
      preserveScroll: true,
      onSuccess: () => form.reset(),
      onError: () => {
        var _a, _b;
        if (form.errors.password) {
          form.reset("password", "password_confirmation");
          (_a = passwordRef.current) == null ? void 0 : _a.focus();
        }
        if (form.errors.current_password) {
          form.reset("current_password");
          (_b = currentPasswordRef.current) == null ? void 0 : _b.focus();
        }
      }
    });
  }
  return /* @__PURE__ */ jsxs(FormSection, {
    onSubmit: updatePassword,
    title: "Update Password",
    description: "Ensure your account is using a long, random password to stay secure.",
    renderActions: () => /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(ActionMessage, {
        on: form.recentlySuccessful,
        className: "mr-3",
        children: "Saved."
      }), /* @__PURE__ */ jsx(PrimaryButton, {
        className: classNames({
          "opacity-25": form.processing
        }),
        disabled: form.processing,
        children: "Save"
      })]
    }),
    children: [/* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "current_password",
        children: "Current Password"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "current_password",
        type: "password",
        className: "mt-1 block w-full",
        ref: currentPasswordRef,
        value: form.data.current_password,
        onChange: (e) => form.setData("current_password", e.currentTarget.value),
        autoComplete: "current-password"
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.current_password,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "password",
        children: "New Password"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "password",
        type: "password",
        className: "mt-1 block w-full",
        value: form.data.password,
        onChange: (e) => form.setData("password", e.currentTarget.value),
        autoComplete: "new-password",
        ref: passwordRef
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.password,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "password_confirmation",
        children: "Confirm Password"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "password_confirmation",
        type: "password",
        className: "mt-1 block w-full",
        value: form.data.password_confirmation,
        onChange: (e) => form.setData("password_confirmation", e.currentTarget.value),
        autoComplete: "new-password"
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.password_confirmation,
        className: "mt-2"
      })]
    })]
  });
}
export {
  UpdatePasswordForm as default
};
