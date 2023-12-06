import CreateExamTypeForm from "./CreateExamTypeForm.643a4b5d.js";
import { A as AppLayout } from "./AppLayout.433bae9b.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.7447a784.js";
import "@headlessui/react";
import "./FormSection.6dd9cf95.js";
import "classnames";
import "./SectionTitle.29f3552c.js";
import "./InputError.b3bb85f5.js";
import "./InputLabel.d803ea58.js";
import "./PrimaryButton.7e3b498c.js";
import "./TextInput.6aef6783.js";
import "react";
import "@inertiajs/core";
import "@material-tailwind/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function Create() {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Create Exam Type",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Create Exam Type"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(CreateExamTypeForm, {})
      })
    })
  });
}
export {
  Create as default
};
