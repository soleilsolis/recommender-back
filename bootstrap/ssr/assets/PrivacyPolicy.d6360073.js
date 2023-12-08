import { A as AuthenticationCardLogo } from "./AuthenticationCardLogo.37193628.js";
import { Head } from "@inertiajs/react";
import { a as jsxs, j as jsx } from "../ssr.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
function PrivacyPolicy({
  policy
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Privacy Policy"
    }), /* @__PURE__ */ jsx("div", {
      className: "font-sans text-gray-900 dark:text-gray-100 antialiased",
      children: /* @__PURE__ */ jsx("div", {
        className: "pt-4 bg-gray-100 dark:bg-gray-900",
        children: /* @__PURE__ */ jsxs("div", {
          className: "min-h-screen flex flex-col items-center pt-6 sm:pt-0",
          children: [/* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(AuthenticationCardLogo, {})
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert",
            dangerouslySetInnerHTML: {
              __html: policy
            }
          })]
        })
      })
    })]
  });
}
export {
  PrivacyPolicy as default
};
