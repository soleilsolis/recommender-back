import { u as useRoute, a as jsxs, j as jsx, F as Fragment } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { A as ActionMessage } from "./ActionMessage.4d88d90c.js";
import { A as ActionSection } from "./Modal.a6f97e00.js";
import { C as ConfirmationModal } from "./ConfirmationModal.1ac8c155.js";
import { D as DangerButton } from "./DangerButton.f1adc843.js";
import { D as DialogModal } from "./DialogModal.5c1f7c45.js";
import { F as FormSection } from "./FormSection.47de93ec.js";
import { I as InputError } from "./InputError.7c75781f.js";
import { I as InputLabel } from "./InputLabel.6fec858d.js";
import { P as PrimaryButton } from "./PrimaryButton.5161cdb7.js";
import { T as TextInput } from "./TextInput.06c89cbc.js";
import { S as SecondaryButton } from "./SecondaryButton.58a85fc5.js";
import { S as SectionBorder } from "./SectionBorder.879cde12.js";
import { router } from "@inertiajs/core";
import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { useState } from "react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.00915fda.js";
import "react-dom";
function TeamMemberManager({
  team,
  availableRoles,
  userPermissions
}) {
  const route = useRoute();
  const addTeamMemberForm = useForm({
    email: "",
    role: null
  });
  const updateRoleForm = useForm({
    role: null
  });
  const leaveTeamForm = useForm({});
  const removeTeamMemberForm = useForm({});
  const [currentlyManagingRole, setCurrentlyManagingRole] = useState(false);
  const [managingRoleFor, setManagingRoleFor] = useState(null);
  const [confirmingLeavingTeam, setConfirmingLeavingTeam] = useState(false);
  const [teamMemberBeingRemoved, setTeamMemberBeingRemoved] = useState(null);
  const page = useTypedPage();
  function addTeamMember() {
    addTeamMemberForm.post(route("team-members.store", [team]), {
      errorBag: "addTeamMember",
      preserveScroll: true,
      onSuccess: () => addTeamMemberForm.reset()
    });
  }
  function cancelTeamInvitation(invitation) {
    router.delete(route("team-invitations.destroy", [invitation]), {
      preserveScroll: true
    });
  }
  function manageRole(teamMember) {
    setManagingRoleFor(teamMember);
    updateRoleForm.setData("role", teamMember.membership.role);
    setCurrentlyManagingRole(true);
  }
  function updateRole() {
    if (!managingRoleFor) {
      return;
    }
    updateRoleForm.put(route("team-members.update", [team, managingRoleFor]), {
      preserveScroll: true,
      onSuccess: () => setCurrentlyManagingRole(false)
    });
  }
  function confirmLeavingTeam() {
    setConfirmingLeavingTeam(true);
  }
  function leaveTeam() {
    leaveTeamForm.delete(route("team-members.destroy", [team, page.props.auth.user]));
  }
  function confirmTeamMemberRemoval(teamMember) {
    setTeamMemberBeingRemoved(teamMember);
  }
  function removeTeamMember() {
    if (!teamMemberBeingRemoved) {
      return;
    }
    removeTeamMemberForm.delete(route("team-members.destroy", [team, teamMemberBeingRemoved]), {
      errorBag: "removeTeamMember",
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => setTeamMemberBeingRemoved(null)
    });
  }
  function displayableRole(role) {
    var _a;
    return (_a = availableRoles.find((r) => r.key === role)) == null ? void 0 : _a.name;
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [userPermissions.canAddTeamMembers ? /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsxs(FormSection, {
        onSubmit: addTeamMember,
        title: "Add Classroom Member",
        description: "Add a new student to your classroom, allowing them to collaborate with you.",
        renderActions: () => /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(ActionMessage, {
            on: addTeamMemberForm.recentlySuccessful,
            className: "mr-3",
            children: "Added."
          }), /* @__PURE__ */ jsx(PrimaryButton, {
            className: classNames({
              "opacity-25": addTeamMemberForm.processing
            }),
            disabled: addTeamMemberForm.processing,
            children: "Add"
          })]
        }),
        children: [/* @__PURE__ */ jsx("div", {
          className: "col-span-6",
          children: /* @__PURE__ */ jsx("div", {
            className: "max-w-xl text-sm text-gray-600 dark:text-gray-400",
            children: "Please provide the email address of the person you would like to add to this clasroom."
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-span-6 sm:col-span-4",
          children: [/* @__PURE__ */ jsx(InputLabel, {
            htmlFor: "email",
            value: "Email"
          }), /* @__PURE__ */ jsx(TextInput, {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: addTeamMemberForm.data.email,
            onChange: (e) => addTeamMemberForm.setData("email", e.currentTarget.value)
          }), /* @__PURE__ */ jsx(InputError, {
            message: addTeamMemberForm.errors.email,
            className: "mt-2"
          })]
        }), availableRoles.length > 0 ? /* @__PURE__ */ jsxs("div", {
          className: "col-span-6 lg:col-span-4",
          children: [/* @__PURE__ */ jsx(InputLabel, {
            htmlFor: "roles",
            value: "Role"
          }), /* @__PURE__ */ jsx(InputError, {
            message: addTeamMemberForm.errors.role,
            className: "mt-2"
          }), /* @__PURE__ */ jsx("div", {
            className: "relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer",
            children: availableRoles.map((role, i) => /* @__PURE__ */ jsx("button", {
              type: "button",
              className: classNames("relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600", {
                "border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none": i > 0,
                "rounded-b-none": i != Object.keys(availableRoles).length - 1
              }),
              onClick: () => addTeamMemberForm.setData("role", role.key),
              children: /* @__PURE__ */ jsxs("div", {
                className: classNames({
                  "opacity-50": addTeamMemberForm.data.role && addTeamMemberForm.data.role != role.key
                }),
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "flex items-center",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: classNames("text-sm text-gray-600 dark:text-gray-400", {
                      "font-semibold": addTeamMemberForm.data.role == role.key
                    }),
                    children: role.name
                  }), addTeamMemberForm.data.role == role.key ? /* @__PURE__ */ jsx("svg", {
                    className: "ml-2 h-5 w-5 text-green-400",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("path", {
                      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  }) : null]
                }), /* @__PURE__ */ jsx("div", {
                  className: "mt-2 text-xs text-gray-600 dark:text-gray-400",
                  children: role.description
                })]
              })
            }, role.key))
          })]
        }) : null]
      })]
    }) : null, team.team_invitations.length > 0 && userPermissions.canAddTeamMembers ? /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
        className: "mt-10 sm:mt-0"
      }), /* @__PURE__ */ jsx(ActionSection, {
        title: "Pending Classroom Invitations",
        description: "These people have been invited to your classroom and have been sent an invitation email. They may join the classroom by accepting the email invitation.",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-6",
          children: team.team_invitations.map((invitation) => /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-between",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-gray-600 dark:text-gray-400",
              children: invitation.email
            }), /* @__PURE__ */ jsx("div", {
              className: "flex items-center",
              children: userPermissions.canRemoveTeamMembers ? /* @__PURE__ */ jsx("button", {
                className: "cursor-pointer ml-6 text-sm text-red-500 focus:outline-none",
                onClick: () => cancelTeamInvitation(invitation),
                children: "Cancel"
              }) : null
            })]
          }, invitation.id))
        })
      })]
    }) : null, team.users.length > 0 ? /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
        className: "mt-10 sm:mt-0"
      }), /* @__PURE__ */ jsx(ActionSection, {
        title: "Team Members",
        description: "All of the people that are part of this classroom.",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-6",
          children: team.users.map((user) => {
            var _a;
            return /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-between",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [/* @__PURE__ */ jsx("img", {
                  className: "w-8 h-8 rounded-full",
                  src: user.profile_photo_url,
                  alt: user.name
                }), /* @__PURE__ */ jsx("div", {
                  className: "ml-4 dark:text-white",
                  children: user.name
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [userPermissions.canAddTeamMembers && availableRoles.length ? /* @__PURE__ */ jsx("button", {
                  className: "ml-2 text-sm text-gray-400 underline",
                  onClick: () => manageRole(user),
                  children: displayableRole(user.membership.role)
                }) : availableRoles.length ? /* @__PURE__ */ jsx("div", {
                  className: "ml-2 text-sm text-gray-400",
                  children: displayableRole(user.membership.role)
                }) : null, ((_a = page.props.auth.user) == null ? void 0 : _a.id) === user.id ? /* @__PURE__ */ jsx("button", {
                  className: "cursor-pointer ml-6 text-sm text-red-500",
                  onClick: confirmLeavingTeam,
                  children: "Leave"
                }) : null, userPermissions.canRemoveTeamMembers ? /* @__PURE__ */ jsx("button", {
                  className: "cursor-pointer ml-6 text-sm text-red-500",
                  onClick: () => confirmTeamMemberRemoval(user),
                  children: "Remove"
                }) : null]
              })]
            }, user.id);
          })
        })
      })]
    }) : null, /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: currentlyManagingRole,
      onClose: () => setCurrentlyManagingRole(false),
      children: [/* @__PURE__ */ jsx(DialogModal.Content, {
        title: "Manage Role"
      }), managingRoleFor ? /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("div", {
          className: "relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer",
          children: availableRoles.map((role, i) => /* @__PURE__ */ jsx("button", {
            type: "button",
            className: classNames("relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600", {
              "border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none": i > 0,
              "rounded-b-none": i !== Object.keys(availableRoles).length - 1
            }),
            onClick: () => updateRoleForm.setData("role", role.key),
            children: /* @__PURE__ */ jsxs("div", {
              className: classNames({
                "opacity-50": updateRoleForm.data.role && updateRoleForm.data.role !== role.key
              }),
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [/* @__PURE__ */ jsx("div", {
                  className: classNames("text-sm text-gray-600 dark:text-gray-400", {
                    "font-semibold": updateRoleForm.data.role === role.key
                  }),
                  children: role.name
                }), updateRoleForm.data.role === role.key ? /* @__PURE__ */ jsx("svg", {
                  className: "ml-2 h-5 w-5 text-green-400",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  })
                }) : null]
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-2 text-xs text-gray-600 dark:text-gray-400",
                children: role.description
              })]
            })
          }, role.key))
        })
      }) : null, /* @__PURE__ */ jsxs(DialogModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setCurrentlyManagingRole(false),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          onClick: updateRole,
          className: classNames("ml-2", {
            "opacity-25": updateRoleForm.processing
          }),
          disabled: updateRoleForm.processing,
          children: "Save"
        })]
      })]
    }), /* @__PURE__ */ jsxs(ConfirmationModal, {
      isOpen: confirmingLeavingTeam,
      onClose: () => setConfirmingLeavingTeam(false),
      children: [/* @__PURE__ */ jsx(ConfirmationModal.Content, {
        title: "Leave Team",
        children: "Are you sure you would like to leave this team?"
      }), /* @__PURE__ */ jsxs(ConfirmationModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setConfirmingLeavingTeam(false),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: leaveTeam,
          className: classNames("ml-2", {
            "opacity-25": leaveTeamForm.processing
          }),
          disabled: leaveTeamForm.processing,
          children: "Leave"
        })]
      })]
    }), /* @__PURE__ */ jsxs(ConfirmationModal, {
      isOpen: !!teamMemberBeingRemoved,
      onClose: () => setTeamMemberBeingRemoved(null),
      children: [/* @__PURE__ */ jsx(ConfirmationModal.Content, {
        title: "Remove Team Member",
        children: "Are you sure you would like to remove this person from the classroom?"
      }), /* @__PURE__ */ jsxs(ConfirmationModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setTeamMemberBeingRemoved(null),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: removeTeamMember,
          className: classNames("ml-2", {
            "opacity-25": removeTeamMemberForm.processing
          }),
          disabled: removeTeamMemberForm.processing,
          children: "Remove"
        })]
      })]
    })]
  });
}
export {
  TeamMemberManager as default
};
