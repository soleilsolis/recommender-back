import CreateExamTypeForm from "./CreateExamTypeForm.729e93f3.js";
import { A as AppLayout } from "./AppLayout.acdc7158.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.18e7f4ca.js";
import "@headlessui/react";
import "./FormSection.b1d979ed.js";
import "classnames";
import "./SectionTitle.5ac7f2d4.js";
import "./InputError.3687cf08.js";
import "./InputLabel.f76d1bcb.js";
import "./PrimaryButton.eae88601.js";
import "./TextInput.66795522.js";
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
