import EditExamForm from "./EditExamForm.d09a87d6.js";
import { A as AppLayout } from "./AppLayout.47d7f6cf.js";
import AddCategoriesForm from "./AddCategoriesForm.623d3b51.js";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "@inertiajs/react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { j as jsx, a as jsxs } from "../ssr.js";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.9615fab2.js";
import "@headlessui/react";
import "./FormSection.efcd153d.js";
import "classnames";
import "./SectionTitle.e3572315.js";
import "./InputError.5b3ccbba.js";
import "./InputLabel.de0cbe34.js";
import "./PrimaryButton.f593478d.js";
import "moment";
import "@inertiajs/core";
import "react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function Edit({
  examTypes,
  exam
}) {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Edit Exam",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Edit Exam Details"
    }),
    children: /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: [/* @__PURE__ */ jsxs(Breadcrumbs, {
          className: "mb-5",
          children: [/* @__PURE__ */ jsx(Link, {
            href: "/dashboard",
            className: "opacity-60",
            children: /* @__PURE__ */ jsx(HomeIcon, {
              className: "h-4 w-4"
            })
          }), /* @__PURE__ */ jsx(Link, {
            href: "/exams",
            className: "opacity-60",
            children: /* @__PURE__ */ jsx("span", {
              children: "Exams"
            })
          }), /* @__PURE__ */ jsx(Link, {
            href: `/exam/${exam.id}`,
            children: /* @__PURE__ */ jsx("span", {
              children: exam.name
            })
          }), /* @__PURE__ */ jsx(Link, {
            href: "#",
            children: "Edit"
          })]
        }), /* @__PURE__ */ jsx(EditExamForm, {
          examTypes,
          exam
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(AddCategoriesForm, {
          exam
        })
      })]
    })
  });
}
export {
  Edit as default
};
