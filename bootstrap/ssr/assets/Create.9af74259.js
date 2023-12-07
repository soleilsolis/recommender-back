import CreateExamTypeForm from "./CreateExamTypeForm.4d98d333.js";
import { A as AppLayout } from "./AppLayout.bb7d01da.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.d52efb2e.js";
import "@headlessui/react";
import "./FormSection.10e3661f.js";
import "classnames";
import "./SectionTitle.a55e48fb.js";
import "./InputError.14bd9d6b.js";
import "./InputLabel.224b79d5.js";
import "./PrimaryButton.673227c8.js";
import "./TextInput.7e7c856a.js";
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
