import CreateExamForm from "./CreateExamForm.8bc78040.js";
import { A as AppLayout } from "./AppLayout.575130b7.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.f611912d.js";
import "@headlessui/react";
import "./FormSection.fefa0a59.js";
import "classnames";
import "./SectionTitle.283fcff2.js";
import "./InputError.c9fabfa6.js";
import "./InputLabel.9c23c9c8.js";
import "./PrimaryButton.e99ccc5a.js";
import "@material-tailwind/react";
import "@inertiajs/core";
import "react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function Create({
  examTypes
}) {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Create Exam",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Create Exam"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(CreateExamForm, {
          examTypes
        })
      })
    })
  });
}
export {
  Create as default
};
