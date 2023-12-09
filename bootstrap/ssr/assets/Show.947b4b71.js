import DeleteTeamForm from "./DeleteTeamForm.5e9a0661.js";
import TeamMemberManager from "./TeamMemberManager.d0d42626.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.359ab314.js";
import { S as SectionBorder } from "./SectionBorder.79c9b16f.js";
import { A as AppLayout } from "./AppLayout.47d7f6cf.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.f331cb78.js";
import "./SectionTitle.e3572315.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.5d7216bd.js";
import "./DangerButton.eb5afb3f.js";
import "./SecondaryButton.7eb95daa.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.9615fab2.js";
import "./DialogModal.6a234e26.js";
import "./FormSection.efcd153d.js";
import "./InputError.5b3ccbba.js";
import "./InputLabel.de0cbe34.js";
import "./PrimaryButton.f593478d.js";
import "./TextInput.fab707ea.js";
import "@inertiajs/core";
import "@material-tailwind/react";
import "moment";
function Show({
  team,
  availableRoles,
  permissions
}) {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Classroom Settings",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Classroom Settings"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(UpdateTeamNameForm, {
          team,
          permissions
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-10 sm:mt-0",
          children: /* @__PURE__ */ jsx(TeamMemberManager, {
            team,
            availableRoles,
            userPermissions: permissions
          })
        }), permissions.canDeleteTeam && !team.personal_team ? /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
            className: "mt-10 sm:mt-0",
            children: /* @__PURE__ */ jsx(DeleteTeamForm, {
              team
            })
          })]
        }) : null]
      })
    })
  });
}
export {
  Show as default
};
