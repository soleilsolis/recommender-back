import { useForm, Head, Link } from "@inertiajs/react";
import classNames from "classnames";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as AuthenticationCard } from "./AuthenticationCard.a7e96c5d.js";
import { C as Checkbox } from "./Checkbox.57b5d71c.js";
import { I as InputLabel } from "./InputLabel.2a22b77f.js";
import { P as PrimaryButton } from "./PrimaryButton.1dfe9481.js";
import { T as TextInput } from "./TextInput.1126d434.js";
import { I as InputError } from "./InputError.02e7dd47.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "./AuthenticationCardLogo.7cea93cd.js";
function Register() {
  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false
  });
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("register"), {
      onFinish: () => form.reset("password", "password_confirmation")
    });
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Register"
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "name",
          children: "Name"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "name",
          type: "text",
          className: "mt-1 block w-full",
          value: form.data.name,
          onChange: (e) => form.setData("name", e.currentTarget.value),
          required: true,
          autoFocus: true,
          autoComplete: "name"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.name
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "email",
          children: "Email"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "email",
          type: "email",
          className: "mt-1 block w-full",
          value: form.data.email,
          onChange: (e) => form.setData("email", e.currentTarget.value),
          required: true
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
      }), page.props.jetstream.hasTermsAndPrivacyPolicyFeature && /* @__PURE__ */ jsx("div", {
        className: "mt-4",
        children: /* @__PURE__ */ jsxs(InputLabel, {
          htmlFor: "terms",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex items-center",
            children: [/* @__PURE__ */ jsx(Checkbox, {
              name: "terms",
              id: "terms",
              checked: form.data.terms,
              onChange: (e) => form.setData("terms", e.currentTarget.checked),
              required: true
            }), /* @__PURE__ */ jsxs("div", {
              className: "ml-2",
              children: ["I agree to the", /* @__PURE__ */ jsx("a", {
                target: "_blank",
                href: route("terms.show"),
                className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                children: "Terms of Service"
              }), "and", /* @__PURE__ */ jsx("a", {
                target: "_blank",
                href: route("policy.show"),
                className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                children: "Privacy Policy"
              })]
            })]
          }), /* @__PURE__ */ jsx(InputError, {
            className: "mt-2",
            message: form.errors.terms
          })]
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex items-center justify-end mt-4",
        children: [/* @__PURE__ */ jsx(Link, {
          href: route("login"),
          className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
          children: "Already registered?"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames("ml-4", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Register"
        })]
      })]
    })]
  });
}
export {
  Register as default
};
