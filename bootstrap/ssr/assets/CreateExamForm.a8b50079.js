import { useForm } from "@inertiajs/react";
import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as ActionMessage } from "./ActionMessage.91724842.js";
import { F as FormSection } from "./FormSection.dc9658b7.js";
import { I as InputError } from "./InputError.5c1cee79.js";
import { I as InputLabel } from "./InputLabel.d440dfee.js";
import { P as PrimaryButton } from "./PrimaryButton.9cd5d313.js";
import classNames from "classnames";
import { Input, Select, Option, Textarea } from "@material-tailwind/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.ab6add35.js";
function CreateExamForm({
  examTypes
}) {
  const route = useRoute();
  useTypedPage();
  const form = useForm({
    name: "",
    exam_type_id: "",
    description: "",
    date: "",
    time: "",
    attempts: "",
    limit: ""
  });
  function createExam() {
    form.post(route("exam.store"), {
      errorBag: "createExam",
      preserveScroll: true
    });
  }
  return /* @__PURE__ */ jsxs(FormSection, {
    onSubmit: createExam,
    title: "Exam Details",
    description: "Create a new Exam",
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
    children: [/* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
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
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4 mt-2",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "exam_type_id",
        value: "Exam Type"
      }), /* @__PURE__ */ jsx(Select, {
        id: "exam_type_id",
        value: form.data.exam_type_id,
        onChange: (e) => form.setData("exam_type_id", e),
        children: examTypes.map(({
          id,
          name
        }) => /* @__PURE__ */ jsx(Option, {
          value: `${id}`,
          children: name
        }, id))
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.exam_type_id,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "attempts",
        value: "Number of Attempts"
      }), /* @__PURE__ */ jsx(Input, {
        id: "attempts",
        type: "text",
        value: form.data.attempts,
        crossOrigin: void 0,
        onInput: (e) => {
          let text = e.currentTarget.value.match(/^[0-9]{0,10}/g);
          form.setData("attempts", text[0]);
          e.currentTarget.value = text[0];
        }
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.attempts,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "limit",
        value: "Time Limit (Minutes)"
      }), /* @__PURE__ */ jsx(Input, {
        id: "limit",
        type: "text",
        value: form.data.limit,
        crossOrigin: void 0,
        onInput: (e) => {
          let text = e.currentTarget.value.match(/^[0-9]{0,10}/g);
          form.setData("limit", text[0]);
          e.currentTarget.value = text[0];
        }
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.limit,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "description",
        value: "Description"
      }), /* @__PURE__ */ jsx(Textarea, {
        id: "description",
        value: form.data.description,
        onChange: (e) => form.setData("description", e.currentTarget.value)
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.description,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "date",
        value: "Date (Deadline)"
      }), /* @__PURE__ */ jsx(Input, {
        id: "date",
        type: "date",
        value: form.data.date,
        onChange: (e) => form.setData("date", e.currentTarget.value),
        autoFocus: true,
        crossOrigin: void 0
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.date,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "date",
        value: "Time (Deadline)"
      }), /* @__PURE__ */ jsx(Input, {
        id: "time",
        type: "time",
        value: form.data.time,
        onChange: (e) => form.setData("time", e.currentTarget.value),
        autoFocus: true,
        crossOrigin: void 0
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.time,
        className: "mt-2"
      })]
    })]
  });
}
export {
  CreateExamForm as default
};
