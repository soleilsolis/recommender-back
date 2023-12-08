import { A as AppLayout } from "./AppLayout.0b053b3e.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/core";
import "@inertiajs/react";
import "classnames";
import "react";
import "./useTypedPage.7ef925b5.js";
import "@headlessui/react";
import "@material-tailwind/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function Dashboard() {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Dashboard",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Dashboard"
    }),
    children: /* @__PURE__ */ jsx("div", {
      className: "py-12",
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx("div", {
          className: "bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"
        })
      })
    })
  });
}
export {
  Dashboard as default
};
