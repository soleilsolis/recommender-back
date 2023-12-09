import CreateTeamForm from "./CreateTeamForm.50bc5c98.js";
import { A as AppLayout } from "./AppLayout.47d7f6cf.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.9615fab2.js";
import "@headlessui/react";
import "./FormSection.efcd153d.js";
import "classnames";
import "./SectionTitle.e3572315.js";
import "./InputError.5b3ccbba.js";
import "./InputLabel.de0cbe34.js";
import "./PrimaryButton.f593478d.js";
import "./TextInput.fab707ea.js";
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
