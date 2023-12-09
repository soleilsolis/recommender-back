import DeleteTeamForm from "./DeleteTeamForm.9df40b0b.js";
import TeamMemberManager from "./TeamMemberManager.cd8bb8d0.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.ee34b1a1.js";
import { S as SectionBorder } from "./SectionBorder.540532ea.js";
import { A as AppLayout } from "./AppLayout.ee15cdfc.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.d8722a44.js";
import "./SectionTitle.98d6b2c7.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.67656223.js";
import "./DangerButton.19b7ff16.js";
import "./SecondaryButton.aba8bb55.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.94173af1.js";
import "./DialogModal.532f87f8.js";
import "./FormSection.396f3208.js";
import "./InputError.35025349.js";
import "./InputLabel.242f5027.js";
import "./PrimaryButton.78b28481.js";
import "./TextInput.bb2e899d.js";
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
