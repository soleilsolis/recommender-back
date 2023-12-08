import CreateExamForm from "./CreateExamForm.a8b50079.js";
import { A as AppLayout } from "./AppLayout.7c99ff82.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.91724842.js";
import "@headlessui/react";
import "./FormSection.dc9658b7.js";
import "classnames";
import "./SectionTitle.ab6add35.js";
import "./InputError.5c1cee79.js";
import "./InputLabel.d440dfee.js";
import "./PrimaryButton.9cd5d313.js";
import "@material-tailwind/react";
import "@inertiajs/core";
import "react";
import "moment";
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
