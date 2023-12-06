import { useForm } from "@inertiajs/react";
import { u as useRoute, j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as ActionMessage } from "./ActionMessage.f82c0bd6.js";
import { F as FormSection } from "./FormSection.a425f821.js";
import { I as InputError } from "./InputError.02e7dd47.js";
import { I as InputLabel } from "./InputLabel.2a22b77f.js";
import { P as PrimaryButton } from "./PrimaryButton.1dfe9481.js";
import classNames from "classnames";
import { Typography, Input } from "@material-tailwind/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.50b541ef.js";
function AddCategoriesForm({
  exam
}) {
  const route = useRoute();
  useTypedPage();
  const form = useForm({
    exam_id: exam.id,
    name: ""
  });
  console.log(exam.categories);
  function addCategory() {
    form.post(route("category.store"), {
      errorBag: "addCategory",
      preserveScroll: true
    });
  }
  return /* @__PURE__ */ jsx(FormSection, {
    onSubmit: addCategory,
    title: "Categories",
    description: "Create Categories",
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
      children: [exam.categories.map((category) => /* @__PURE__ */ jsx(Typography, {
        variant: "lead",
        children: category.name
      })), /* @__PURE__ */ jsxs("div", {
        className: "mt-2",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "name",
          value: "Name"
        }), /* @__PURE__ */ jsx(Input, {
          id: "name",
          type: "text",
          value: form.data.name,
          onChange: (e) => form.setData("name", e.currentTarget.value),
          autoFocus: true,
          crossOrigin: void 0
        }), /* @__PURE__ */ jsx(InputError, {
          message: form.errors.name,
          className: "mt-2"
        })]
      })]
    })
  });
}
export {
  AddCategoriesForm as default
};
