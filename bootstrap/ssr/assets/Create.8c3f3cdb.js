import CreateExamForm from "./CreateExamForm.2dca6195.js";
import { A as AppLayout } from "./AppLayout.31725274.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.fa57e35d.js";
import "@headlessui/react";
import "./FormSection.9ed002e0.js";
import "classnames";
import "./SectionTitle.c523bc81.js";
import "./InputError.03a5b9d5.js";
import "./InputLabel.13a82f82.js";
import "./PrimaryButton.cb103e03.js";
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
