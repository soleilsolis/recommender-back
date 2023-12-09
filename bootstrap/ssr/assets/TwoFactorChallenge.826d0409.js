import { useForm, Head } from "@inertiajs/react";
import classNames from "classnames";
import { useState, useRef } from "react";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { A as AuthenticationCard } from "./AuthenticationCard.9bb6dc62.js";
import { I as InputLabel } from "./InputLabel.242f5027.js";
import { P as PrimaryButton } from "./PrimaryButton.78b28481.js";
import { T as TextInput } from "./TextInput.bb2e899d.js";
import { I as InputError } from "./InputError.35025349.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./AuthenticationCardLogo.ffcab63b.js";
function TwoFactorChallenge() {
  const route = useRoute();
  const [recovery, setRecovery] = useState(false);
  const form = useForm({
    code: "",
    recovery_code: ""
  });
  const recoveryCodeRef = useRef(null);
  const codeRef = useRef(null);
  function toggleRecovery(e) {
    e.preventDefault();
    const isRecovery = !recovery;
    setRecovery(isRecovery);
    setTimeout(() => {
      var _a, _b;
      if (isRecovery) {
        (_a = recoveryCodeRef.current) == null ? void 0 : _a.focus();
        form.setData("code", "");
      } else {
        (_b = codeRef.current) == null ? void 0 : _b.focus();
        form.setData("recovery_code", "");
      }
    }, 100);
  }
  function onSubmit(e) {
    e.preventDefault();
    form.post(route("two-factor.login"));
  }
  return /* @__PURE__ */ jsxs(AuthenticationCard, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Two-Factor Confirmation"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600 dark:text-gray-400",
      children: recovery ? "Please confirm access to your account by entering one of your emergency recovery codes." : "Please confirm access to your account by entering the authentication code provided by your authenticator application."
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit,
      children: [recovery ? /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "recovery_code",
          children: "Recovery Code"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "recovery_code",
          type: "text",
          className: "mt-1 block w-full",
          value: form.data.recovery_code,
          onChange: (e) => form.setData("recovery_code", e.currentTarget.value),
          ref: recoveryCodeRef,
          autoComplete: "one-time-code"
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.recovery_code
        })]
      }) : /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "code",
          children: "Code"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "code",
          type: "text",
          inputMode: "numeric",
          className: "mt-1 block w-full",
          value: form.data.code,
          onChange: (e) => form.setData("code", e.currentTarget.value),
          autoFocus: true,
          autoComplete: "one-time-code",
          ref: codeRef
        }), /* @__PURE__ */ jsx(InputError, {
          className: "mt-2",
          message: form.errors.code
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex items-center justify-end mt-4",
        children: [/* @__PURE__ */ jsx("button", {
          type: "button",
          className: "text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",
          onClick: toggleRecovery,
          children: recovery ? "Use an authentication code" : "Use a recovery code"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames("ml-4", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Log in"
        })]
      })]
    })]
  });
}
export {
  TwoFactorChallenge as default
};
