import DeleteTeamForm from "./DeleteTeamForm.1df6d145.js";
import TeamMemberManager from "./TeamMemberManager.6347fd72.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.fc3ce6a9.js";
import { S as SectionBorder } from "./SectionBorder.5014e195.js";
import { A as AppLayout } from "./AppLayout.764662fd.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.d59a2f8b.js";
import "./SectionTitle.c1c46bad.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.ab411085.js";
import "./DangerButton.283e256c.js";
import "./SecondaryButton.fd0b5268.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.7cfcbe53.js";
import "./DialogModal.d4cbc4b0.js";
import "./FormSection.de145f32.js";
import "./InputError.e2580f89.js";
import "./InputLabel.17128674.js";
import "./PrimaryButton.e132fa72.js";
import "./TextInput.77338c64.js";
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
