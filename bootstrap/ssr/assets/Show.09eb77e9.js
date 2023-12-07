import DeleteTeamForm from "./DeleteTeamForm.29afd52b.js";
import TeamMemberManager from "./TeamMemberManager.ef2be189.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm.5391303b.js";
import { S as SectionBorder } from "./SectionBorder.851f4e8d.js";
import { A as AppLayout } from "./AppLayout.bb7d01da.js";
import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import "./Modal.a198b1e3.js";
import "./SectionTitle.a55e48fb.js";
import "@headlessui/react";
import "classnames";
import "react";
import "react-dom";
import "./ConfirmationModal.a90475fc.js";
import "./DangerButton.f5533861.js";
import "./SecondaryButton.a74045bf.js";
import "@inertiajs/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.d52efb2e.js";
import "./DialogModal.19dba5a3.js";
import "./FormSection.10e3661f.js";
import "./InputError.14bd9d6b.js";
import "./InputLabel.224b79d5.js";
import "./PrimaryButton.673227c8.js";
import "./TextInput.7e7c856a.js";
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
