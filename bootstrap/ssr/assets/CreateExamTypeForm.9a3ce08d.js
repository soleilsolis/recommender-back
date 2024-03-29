import { useForm } from "@inertiajs/react";
import { u as useRoute, j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as ActionMessage } from "./ActionMessage.4d88d90c.js";
import { F as FormSection } from "./FormSection.47de93ec.js";
import { I as InputError } from "./InputError.7c75781f.js";
import { I as InputLabel } from "./InputLabel.6fec858d.js";
import { P as PrimaryButton } from "./PrimaryButton.5161cdb7.js";
import { T as TextInput } from "./TextInput.06c89cbc.js";
import classNames from "classnames";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.00915fda.js";
function CreateExamTypeForm() {
  const route = useRoute();
  useTypedPage();
  const form = useForm({
    name: ""
  });
  function createExamType() {
    form.post(route("examType.store"), {
      errorBag: "createExamType",
      preserveScroll: true
    });
  }
  return /* @__PURE__ */ jsx(FormSection, {
    onSubmit: createExamType,
    title: "Exam Type Details",
    description: "Create a new Exam Type",
    renderActions: () => /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(ActionMessage, {
        on: form.recentlySuccessful,
        className: "mr-3",
        children: "Saved."
      }), /* @__PURE__ */ jsx(PrimaryButton, {
        className: classNames({
          "opacity-25": form.processing
        }),
        disabled: form.processing,
        children: "Save"
      })]
    }),
    children: /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "name",
        value: "Exam Type Name"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "name",
        type: "text",
        className: "mt-1 block w-full",
        value: form.data.name,
        onChange: (e) => form.setData("name", e.currentTarget.value),
        autoFocus: true
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.name,
        className: "mt-2"
      })]
    })
  });
}
export {
  CreateExamTypeForm as default
};
