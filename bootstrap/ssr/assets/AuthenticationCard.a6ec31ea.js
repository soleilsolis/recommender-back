import { A as AuthenticationCardLogo } from "./AuthenticationCardLogo.ee82cb1e.js";
import { a as jsxs, j as jsx } from "../ssr.js";
function AuthenticationCard({
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900",
    children: [/* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx(AuthenticationCardLogo, {})
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg",
      children
    })]
  });
}
export {
  AuthenticationCard as A
};
