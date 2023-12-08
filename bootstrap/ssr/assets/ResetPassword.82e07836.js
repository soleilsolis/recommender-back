import { useForm, Head } from "@inertiajs/react";
import classNames from "classnames";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { A as AuthenticationCard } from "./AuthenticationCard.eddb26fa.js";
import { I as InputLabel } from "./InputLabel.017a652c.js";
import { P as PrimaryButton } from "./PrimaryButton.42c71c70.js";
import { T as TextInput } from "./TextInput.af5ee599.js";
import { I as InputError } from "./InputError.46a30786.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "./AuthenticationCardLogo.37193628.js";
function ResetPassword({
  token,
  email
}) {
  const route = useRoute();
  const form = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("password.update"), {
      onFinish: () => form.reset("password", "password_confirmation")
    });
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Reset Password"
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "email",
          children: "Email"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "email",
          type: "email",
          className: "mt-1 block w-full",
          value: form.data.email,
          onChange: (e) => form.setData("email", e.currentTarget.value),
          required: true,
          autoFocus: true
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.email
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "password",
          children: "Password"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "password",
          type: "password",
          className: "mt-1 block w-full",
          value: form.data.password,
          onChange: (e) => form.setData("password", e.currentTarget.value),
          required: true,
          autoComplete: "new-password"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "password_confirmation",
          children: "Confirm Password"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "password_confirmation",
          type: "password",
          className: "mt-1 block w-full",
          value: form.data.password_confirmation,
          onChange: (e) => form.setData("password_confirmation", e.currentTarget.value),
          required: true,
          autoComplete: "new-password"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password_confirmation
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex items-center justify-end mt-4",
        children: /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames({
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Reset Password"
        })
      })]
    })]
  });
}
export {
  ResetPassword as default
};
