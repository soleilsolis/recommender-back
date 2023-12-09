import { useForm, Head, Link } from "@inertiajs/react";
import classNames from "classnames";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { A as AuthenticationCard } from "./AuthenticationCard.13186d97.js";
import { C as Checkbox } from "./Checkbox.bc375074.js";
import { I as InputLabel } from "./InputLabel.6fec858d.js";
import { P as PrimaryButton } from "./PrimaryButton.5161cdb7.js";
import { T as TextInput } from "./TextInput.06c89cbc.js";
import { I as InputError } from "./InputError.7c75781f.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "./AuthenticationCardLogo.953a9553.js";
function Login({
  canResetPassword,
  status
}) {
  const route = useRoute();
  const form = useForm({
    email: "",
    password: "",
    remember: ""
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("login"), {
      onFinish: () => form.reset("password")
    });
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "login"
    }), status && /* @__PURE__ */ jsx("div", {
      className: "mb-4 font-medium text-sm text-green-600 dark:text-green-400",
      children: status
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
          autoComplete: "current-password"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.password
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-4",
        children: /* @__PURE__ */ jsxs("label", {
          className: "flex items-center",
          children: [/* @__PURE__ */ jsx(Checkbox, {
            name: "remember",
            checked: form.data.remember === "on",
            onChange: (e) => form.setData("remember", e.currentTarget.checked ? "on" : "")
          }), /* @__PURE__ */ jsx("span", {
            className: "ml-2 text-sm text-gray-600 dark:text-gray-400",
            children: "Remember me"
          })]
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 mt-4",
        children: [canResetPassword && /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx(Link, {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: "Forgot your password?"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-end",
          children: [/* @__PURE__ */ jsx(Link, {
            href: route("register"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: "Need an account?"
          }), /* @__PURE__ */ jsx(PrimaryButton, {
            className: classNames("ml-4", {
              "opacity-25": form.processing
            }),
            disabled: form.processing,
            children: "Log in"
          })]
        })]
      })]
    })]
  });
}
export {
  Login as default
};
