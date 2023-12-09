import DeleteTeamForm from "./DeleteTeamForm.b997d7b4.js";
import TeamMemberManager from "./TeamMemberManager.dd0b057f.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.74254e3d.js";
import { S as SectionBorder } from "./SectionBorder.72163e79.js";
import { A as AppLayout } from "./AppLayout.31725274.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.56ee8236.js";
import "./SectionTitle.c523bc81.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.e548386c.js";
import "./DangerButton.550a1e65.js";
import "./SecondaryButton.f69e0fa3.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.fa57e35d.js";
import "./DialogModal.60fcf0cc.js";
import "./FormSection.9ed002e0.js";
import "./InputError.03a5b9d5.js";
import "./InputLabel.13a82f82.js";
import "./PrimaryButton.cb103e03.js";
import "./TextInput.cf38c534.js";
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
