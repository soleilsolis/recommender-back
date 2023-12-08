import DeleteTeamForm from "./DeleteTeamForm.ae2a04ea.js";
import TeamMemberManager from "./TeamMemberManager.9668bcf6.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.9dd29b36.js";
import { S as SectionBorder } from "./SectionBorder.b1157714.js";
import { A as AppLayout } from "./AppLayout.7c99ff82.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.931a38e1.js";
import "./SectionTitle.ab6add35.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.c5952b10.js";
import "./DangerButton.68950ce9.js";
import "./SecondaryButton.8887185b.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.91724842.js";
import "./DialogModal.d358ebd3.js";
import "./FormSection.dc9658b7.js";
import "./InputError.5c1cee79.js";
import "./InputLabel.d440dfee.js";
import "./PrimaryButton.9cd5d313.js";
import "./TextInput.ede2ca65.js";
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
