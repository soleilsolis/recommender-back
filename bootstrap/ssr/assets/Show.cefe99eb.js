import DeleteTeamForm from "./DeleteTeamForm.28435359.js";
import TeamMemberManager from "./TeamMemberManager.c66510c9.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.2baaa787.js";
import { S as SectionBorder } from "./SectionBorder.4296d445.js";
import { A as AppLayout } from "./AppLayout.0b053b3e.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.8b827a79.js";
import "./SectionTitle.851fb022.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.bcde1e12.js";
import "./DangerButton.5e853d7b.js";
import "./SecondaryButton.fa7665f6.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.14c4b9bf.js";
import "./DialogModal.b125c14e.js";
import "./FormSection.46093c48.js";
import "./InputError.46a30786.js";
import "./InputLabel.017a652c.js";
import "./PrimaryButton.42c71c70.js";
import "./TextInput.af5ee599.js";
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
