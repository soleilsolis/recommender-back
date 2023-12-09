import DeleteTeamForm from "./DeleteTeamForm.c67b7576.js";
import TeamMemberManager from "./TeamMemberManager.2ba51330.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.b90dfb5e.js";
import { S as SectionBorder } from "./SectionBorder.8a4c687a.js";
import { A as AppLayout } from "./AppLayout.acdc7158.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.f93ae5bf.js";
import "./SectionTitle.5ac7f2d4.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.83fc4d78.js";
import "./DangerButton.a1cad53b.js";
import "./SecondaryButton.a1ef905d.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.18e7f4ca.js";
import "./DialogModal.c8d8ddd5.js";
import "./FormSection.b1d979ed.js";
import "./InputError.3687cf08.js";
import "./InputLabel.f76d1bcb.js";
import "./PrimaryButton.eae88601.js";
import "./TextInput.66795522.js";
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
