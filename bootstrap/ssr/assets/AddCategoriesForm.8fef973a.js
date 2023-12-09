import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as ActionMessage } from "./ActionMessage.50f129ee.js";
import { F as FormSection } from "./FormSection.9dd3c0d6.js";
import { I as InputError } from "./InputError.52331b1c.js";
import { I as InputLabel } from "./InputLabel.bcddd259.js";
import { P as PrimaryButton } from "./PrimaryButton.7a3e5f8c.js";
import classNames from "classnames";
import { Typography, Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.7732b6dc.js";
function AddCategoriesForm({
  exam
}) {
  const route = useRoute();
  useTypedPage();
  const form = useForm({
    exam_id: exam.id,
    name: ""
  });
  const deleteCategoryForm = useForm({
    id: null
  });
  function deleteCategory() {
    deleteCategoryForm.delete(route("category.delete"), {
      errorBag: "deleteCategory",
      preserveScroll: true
    });
    setOpen(!open);
  }
  function addCategory() {
    form.post(route("category.store"), {
      errorBag: "addCategory",
      preserveScroll: true
    });
    form.data.name = null;
  }
  const [open, setOpen] = useState(false);
  const handleOpen = ($id = null) => {
    deleteCategoryForm.setData("id", $id);
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs(FormSection, {
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
    children: [/* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [exam.categories.map((category) => /* @__PURE__ */ jsxs("div", {
        className: "flex items-center gap-2",
        children: [/* @__PURE__ */ jsx(Typography, {
          variant: "lead",
          children: category.name
        }), /* @__PURE__ */ jsx(Typography, {
          variant: "small",
          color: "red",
          className: "cursor-pointer",
          onClick: (e) => {
            deleteCategoryForm.data.id = category.id;
            handleOpen(category.id);
            console.log(deleteCategoryForm.data.id);
          },
          children: "Delete"
        })]
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
    }), /* @__PURE__ */ jsxs(Dialog, {
      handler: handleOpen,
      open,
      children: [/* @__PURE__ */ jsx(DialogHeader, {
        children: "Delete Category"
      }), /* @__PURE__ */ jsx(DialogBody, {
        children: /* @__PURE__ */ jsxs(Typography, {
          variant: "h3",
          color: "red",
          children: ["Are you sure? ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("br", {}), "It will delete all the questions in this category as well!"]
        })
      }), /* @__PURE__ */ jsxs(DialogFooter, {
        children: [/* @__PURE__ */ jsx(Button, {
          variant: "text",
          color: "black",
          onClick: handleOpen,
          className: "mr-1",
          children: /* @__PURE__ */ jsx("span", {
            children: "Cancel"
          })
        }), /* @__PURE__ */ jsx(Button, {
          variant: "gradient",
          color: "red",
          onClick: deleteCategory,
          children: /* @__PURE__ */ jsx("span", {
            children: "Confirm"
          })
        })]
      })]
    })]
  });
}
export {
  AddCategoriesForm as default
};
