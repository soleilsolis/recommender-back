import DeleteTeamForm from "./DeleteTeamForm.1a7c0772.js";
import TeamMemberManager from "./TeamMemberManager.5bb57ebb.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.5ea21dd5.js";
import { S as SectionBorder } from "./SectionBorder.dc5eac4e.js";
import { A as AppLayout } from "./AppLayout.e470f6cc.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.59f22b1c.js";
import "./SectionTitle.5026acf4.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.2b9b54ec.js";
import "./DangerButton.ce5ca450.js";
import "./SecondaryButton.2b9eff27.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.acba4187.js";
import "./DialogModal.55f7d828.js";
import "./FormSection.bdf61855.js";
import "./InputError.6b93874b.js";
import "./InputLabel.a34aaf80.js";
import "./PrimaryButton.e4feac23.js";
import "./TextInput.a1e7e997.js";
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
