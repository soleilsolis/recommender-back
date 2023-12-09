import DeleteTeamForm from "./DeleteTeamForm.207a7b7c.js";
import TeamMemberManager from "./TeamMemberManager.11c9eeae.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.361afa18.js";
import { S as SectionBorder } from "./SectionBorder.879cde12.js";
import { A as AppLayout } from "./AppLayout.0db67c80.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.a6f97e00.js";
import "./SectionTitle.00915fda.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.1ac8c155.js";
import "./DangerButton.f1adc843.js";
import "./SecondaryButton.58a85fc5.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.4d88d90c.js";
import "./DialogModal.5c1f7c45.js";
import "./FormSection.47de93ec.js";
import "./InputError.7c75781f.js";
import "./InputLabel.6fec858d.js";
import "./PrimaryButton.5161cdb7.js";
import "./TextInput.06c89cbc.js";
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
