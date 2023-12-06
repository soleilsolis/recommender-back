import CreateExamTypeForm from "./CreateExamTypeForm.be2dd19c.js";
import { A as AppLayout } from "./AppLayout.02e9f5b4.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.f82c0bd6.js";
import "@headlessui/react";
import "./FormSection.a425f821.js";
import "classnames";
import "./SectionTitle.50b541ef.js";
import "./InputError.02e7dd47.js";
import "./InputLabel.2a22b77f.js";
import "./PrimaryButton.1dfe9481.js";
import "./TextInput.1126d434.js";
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
