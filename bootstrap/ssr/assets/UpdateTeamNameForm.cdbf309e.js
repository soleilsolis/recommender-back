import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { A as ActionMessage } from "./ActionMessage.f611912d.js";
import { F as FormSection } from "./FormSection.fefa0a59.js";
import { I as InputError } from "./InputError.c9fabfa6.js";
import { I as InputLabel } from "./InputLabel.9c23c9c8.js";
import { P as PrimaryButton } from "./PrimaryButton.e99ccc5a.js";
import { T as TextInput } from "./TextInput.bb601db5.js";
import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.283fcff2.js";
function UpdateTeamNameForm({
  team,
  permissions
}) {
  const route = useRoute();
  const form = useForm({
    name: team.name
  });
  function updateTeamName() {
    form.put(route("teams.update", [team]), {
      errorBag: "updateTeamName",
      preserveScroll: true
    });
  }
  return /* @__PURE__ */ jsxs(FormSection, {
    onSubmit: updateTeamName,
    title: "Classroom Name",
    description: `The team's name and owner information.`,
    renderActions: permissions.canUpdateTeam ? () => /* @__PURE__ */ jsxs(Fragment, {
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
    }) : void 0,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "col-span-6",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        value: "Classroom Owner"
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex items-center mt-2",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-12 h-12 rounded-full object-cover",
          src: team.owner.profile_photo_url,
          alt: team.owner.name
        }), /* @__PURE__ */ jsxs("div", {
          className: "ml-4 leading-tight",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-gray-900 dark:text-white",
            children: team.owner.name
          }), /* @__PURE__ */ jsx("div", {
            className: "text-gray-700 dark:text-gray-300 text-sm",
            children: team.owner.email
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "name",
        value: "Classroom Name"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "name",
        type: "text",
        className: "mt-1 block w-full",
        value: form.data.name,
        onChange: (e) => form.setData("name", e.currentTarget.value),
        disabled: !permissions.canUpdateTeam
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.name,
        className: "mt-2"
      })]
    })]
  });
}
export {
  UpdateTeamNameForm as default
};
