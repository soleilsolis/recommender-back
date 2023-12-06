import { useForm } from "@inertiajs/react";
import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as ActionMessage } from "./ActionMessage.7447a784.js";
import { F as FormSection } from "./FormSection.6dd9cf95.js";
import { I as InputError } from "./InputError.b3bb85f5.js";
import { I as InputLabel } from "./InputLabel.d803ea58.js";
import { P as PrimaryButton } from "./PrimaryButton.7e3b498c.js";
import { T as TextInput } from "./TextInput.6aef6783.js";
import classNames from "classnames";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.29f3552c.js";
function CreateTeamForm() {
  var _a, _b, _c, _d;
  const route = useRoute();
  const page = useTypedPage();
  const form = useForm({
    name: ""
  });
  function createTeam() {
    form.post(route("teams.store"), {
      errorBag: "createTeam",
      preserveScroll: true
    });
  }
  return /* @__PURE__ */ jsxs(FormSection, {
    onSubmit: createTeam,
    title: "Team Details",
    description: "Create a new team to collaborate with others on projects.",
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
      className: "col-span-6",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        value: "Team Owner"
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex items-center mt-2",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-12 h-12 rounded-full object-cover",
          src: (_a = page.props.auth.user) == null ? void 0 : _a.profile_photo_url,
          alt: (_b = page.props.auth.user) == null ? void 0 : _b.name
        }), /* @__PURE__ */ jsxs("div", {
          className: "ml-4 leading-tight",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-gray-900 dark:text-white",
            children: (_c = page.props.auth.user) == null ? void 0 : _c.name
          }), /* @__PURE__ */ jsx("div", {
            className: "text-gray-700 dark:text-gray-300 text-sm",
            children: (_d = page.props.auth.user) == null ? void 0 : _d.email
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "name",
        value: "Team Name"
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
    })]
  });
}
export {
  CreateTeamForm as default
};
