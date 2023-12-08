import CreateExamTypeForm from "./CreateExamTypeForm.13f6177f.js";
import { A as AppLayout } from "./AppLayout.0b053b3e.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.14c4b9bf.js";
import "@headlessui/react";
import "./FormSection.46093c48.js";
import "classnames";
import "./SectionTitle.851fb022.js";
import "./InputError.46a30786.js";
import "./InputLabel.017a652c.js";
import "./PrimaryButton.42c71c70.js";
import "./TextInput.af5ee599.js";
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