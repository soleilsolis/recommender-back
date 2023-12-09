import CreateTeamForm from "./CreateTeamForm.a4778e24.js";
import { A as AppLayout } from "./AppLayout.764662fd.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.7cfcbe53.js";
import "@headlessui/react";
import "./FormSection.de145f32.js";
import "classnames";
import "./SectionTitle.c1c46bad.js";
import "./InputError.e2580f89.js";
import "./InputLabel.17128674.js";
import "./PrimaryButton.e132fa72.js";
import "./TextInput.77338c64.js";
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
