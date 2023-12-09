import CreateTeamForm from "./CreateTeamForm.5e126cb0.js";
import { A as AppLayout } from "./AppLayout.ee15cdfc.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.94173af1.js";
import "@headlessui/react";
import "./FormSection.396f3208.js";
import "classnames";
import "./SectionTitle.98d6b2c7.js";
import "./InputError.35025349.js";
import "./InputLabel.242f5027.js";
import "./PrimaryButton.78b28481.js";
import "./TextInput.bb2e899d.js";
import "react";
import "@inertiajs/core";
import "@material-tailwind/react";
import "moment";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function Create() {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Create Classroom",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Create Classroom"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(CreateTeamForm, {})
      })
    })
  });
}
export {
  Create as default
};
