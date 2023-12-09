import DeleteTeamForm from "./DeleteTeamForm.01141cd4.js";
import TeamMemberManager from "./TeamMemberManager.ecd4a26e.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.a11659d0.js";
import { S as SectionBorder } from "./SectionBorder.ab12cefe.js";
import { A as AppLayout } from "./AppLayout.37411846.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.b62601d0.js";
import "./SectionTitle.7732b6dc.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.96bc1d8e.js";
import "./DangerButton.b155e654.js";
import "./SecondaryButton.0e2ad188.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.50f129ee.js";
import "./DialogModal.fd4a240e.js";
import "./FormSection.9dd3c0d6.js";
import "./InputError.52331b1c.js";
import "./InputLabel.bcddd259.js";
import "./PrimaryButton.7a3e5f8c.js";
import "./TextInput.e96833f1.js";
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
