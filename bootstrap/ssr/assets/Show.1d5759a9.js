import DeleteTeamForm from "./DeleteTeamForm.7caa1949.js";
import TeamMemberManager from "./TeamMemberManager.f2a2d977.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.701e592b.js";
import { S as SectionBorder } from "./SectionBorder.26df6eb0.js";
import { A as AppLayout } from "./AppLayout.02e9f5b4.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.ac639ebd.js";
import "./SectionTitle.50b541ef.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.39521e63.js";
import "./DangerButton.ee2440b4.js";
import "./SecondaryButton.69aa4493.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.f82c0bd6.js";
import "./DialogModal.5e8f7e46.js";
import "./FormSection.a425f821.js";
import "./InputError.02e7dd47.js";
import "./InputLabel.2a22b77f.js";
import "./PrimaryButton.1dfe9481.js";
import "./TextInput.1126d434.js";
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
