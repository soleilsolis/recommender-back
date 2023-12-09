import CreateExamTypeForm from "./CreateExamTypeForm.c6a43f91.js";
import { A as AppLayout } from "./AppLayout.37411846.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.50f129ee.js";
import "@headlessui/react";
import "./FormSection.9dd3c0d6.js";
import "classnames";
import "./SectionTitle.7732b6dc.js";
import "./InputError.52331b1c.js";
import "./InputLabel.bcddd259.js";
import "./PrimaryButton.7a3e5f8c.js";
import "./TextInput.e96833f1.js";
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
