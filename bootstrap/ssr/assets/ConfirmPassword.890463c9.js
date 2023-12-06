import { useForm, Head } from "@inertiajs/react";
import classNames from "classnames";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { A as AuthenticationCard } from "./AuthenticationCard.2927a1cc.js";
import { I as InputError } from "./InputError.14bd9d6b.js";
import { I as InputLabel } from "./InputLabel.224b79d5.js";
import { P as PrimaryButton } from "./PrimaryButton.673227c8.js";
import { T as TextInput } from "./TextInput.7e7c856a.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "./AuthenticationCardLogo.f3092124.js";
function ConfirmPassword() {
  const route = useRoute();
  const form = useForm({
    password: ""
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("password.confirm"), {
      onFinish: () => form.reset()
    });
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Secure Area"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600 dark:text-gray-400",
      children: "This is a secure area of the application. Please confirm your password before continuing."
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [/* @__PURE__ */ jsxs("div", {
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
          autoComplete: "current-password",
          autoFocus: true
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-end mt-4",
        children: /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames("ml-4", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Confirm"
        })
      })]
    })]
  });
}
export {
  ConfirmPassword as default
};
