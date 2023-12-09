import CreateExamTypeForm from "./CreateExamTypeForm.9a3ce08d.js";
import { A as AppLayout } from "./AppLayout.0db67c80.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.4d88d90c.js";
import "@headlessui/react";
import "./FormSection.47de93ec.js";
import "classnames";
import "./SectionTitle.00915fda.js";
import "./InputError.7c75781f.js";
import "./InputLabel.6fec858d.js";
import "./PrimaryButton.5161cdb7.js";
import "./TextInput.06c89cbc.js";
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
