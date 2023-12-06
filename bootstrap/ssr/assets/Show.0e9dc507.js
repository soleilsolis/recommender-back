import DeleteTeamForm from "./DeleteTeamForm.02c1cce9.js";
import TeamMemberManager from "./TeamMemberManager.7db7609f.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.0889aca2.js";
import { S as SectionBorder } from "./SectionBorder.e16c4a94.js";
import { A as AppLayout } from "./AppLayout.433bae9b.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.ecaaf61b.js";
import "./SectionTitle.29f3552c.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.2323c210.js";
import "./DangerButton.beb72284.js";
import "./SecondaryButton.dff92de8.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.7447a784.js";
import "./DialogModal.04e591bf.js";
import "./FormSection.6dd9cf95.js";
import "./InputError.b3bb85f5.js";
import "./InputLabel.d803ea58.js";
import "./PrimaryButton.7e3b498c.js";
import "./TextInput.6aef6783.js";
import "@inertiajs/core";
import "@material-tailwind/react";
function Show({
  team,
  availableRoles,
  permissions
}) {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Team Settings",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Team Settings"
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
