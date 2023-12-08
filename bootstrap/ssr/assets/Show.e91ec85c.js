import DeleteTeamForm from "./DeleteTeamForm.2e4653f0.js";
import TeamMemberManager from "./TeamMemberManager.b68e35aa.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.c7bed578.js";
import { S as SectionBorder } from "./SectionBorder.7580c308.js";
import { A as AppLayout } from "./AppLayout.575130b7.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.e5dd0e43.js";
import "./SectionTitle.283fcff2.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.17bee6a4.js";
import "./DangerButton.0e7c3919.js";
import "./SecondaryButton.9346a1d5.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.f611912d.js";
import "./DialogModal.21aeec81.js";
import "./FormSection.fefa0a59.js";
import "./InputError.c9fabfa6.js";
import "./InputLabel.9c23c9c8.js";
import "./PrimaryButton.e99ccc5a.js";
import "./TextInput.bb601db5.js";
import "@inertiajs/core";
import "@material-tailwind/react";
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
