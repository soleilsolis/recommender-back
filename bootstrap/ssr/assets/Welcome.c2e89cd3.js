import { Head, Link } from "@inertiajs/react";
import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as AuthenticationCardLogo } from "./AuthenticationCardLogo.37193628.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
function Welcome({
  canLogin,
  canRegister,
  laravelVersion,
  phpVersion
}) {
  const route = useRoute();
  const page = useTypedPage();
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Welcome"
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white",
      children: [canLogin ? /* @__PURE__ */ jsx("div", {
        className: "sm:fixed sm:top-0 sm:right-0 p-6 text-right",
        children: page.props.auth.user ? /* @__PURE__ */ jsx(Link, {
          href: route("dashboard"),
          className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
          children: "Dashboard"
        }) : /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(Link, {
            href: route("login"),
            className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Log in"
          }), canRegister ? /* @__PURE__ */ jsx(Link, {
            href: route("register"),
            className: "ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Register"
          }) : null]
        })
      }) : null, /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto p-6 lg:p-8",
        children: /* @__PURE__ */ jsx(AuthenticationCardLogo, {})
      })]
    })]
  });
}
export {
  Welcome as default
};
