import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { useState } from "react";
import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { A as ActionMessage } from "./ActionMessage.d52efb2e.js";
import { A as ActionSection } from "./Modal.a198b1e3.js";
import { C as Checkbox } from "./Checkbox.eba0016d.js";
import { C as ConfirmationModal } from "./ConfirmationModal.a90475fc.js";
import { D as DangerButton } from "./DangerButton.f5533861.js";
import { D as DialogModal } from "./DialogModal.19dba5a3.js";
import { F as FormSection } from "./FormSection.10e3661f.js";
import { I as InputError } from "./InputError.14bd9d6b.js";
import { I as InputLabel } from "./InputLabel.224b79d5.js";
import { P as PrimaryButton } from "./PrimaryButton.673227c8.js";
import { T as TextInput } from "./TextInput.7e7c856a.js";
import { S as SecondaryButton } from "./SecondaryButton.a74045bf.js";
import { S as SectionBorder } from "./SectionBorder.851f4e8d.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.a55e48fb.js";
import "react-dom";
function APITokenManager({
  tokens,
  availablePermissions,
  defaultPermissions
}) {
  var _a, _b, _c;
  const route = useRoute();
  const createApiTokenForm = useForm({
    name: "",
    permissions: defaultPermissions
  });
  const updateApiTokenForm = useForm({
    permissions: []
  });
  const deleteApiTokenForm = useForm({});
  const [displayingToken, setDisplayingToken] = useState(false);
  const [managingPermissionsFor, setManagingPermissionsFor] = useState(null);
  const [apiTokenBeingDeleted, setApiTokenBeingDeleted] = useState(null);
  const page = useTypedPage();
  function createApiToken() {
    createApiTokenForm.post(route("api-tokens.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setDisplayingToken(true);
        createApiTokenForm.reset();
      }
    });
  }
  function manageApiTokenPermissions(token) {
    updateApiTokenForm.setData("permissions", token.abilities);
    setManagingPermissionsFor(token);
  }
  function updateApiToken() {
    if (!managingPermissionsFor) {
      return;
    }
    updateApiTokenForm.put(route("api-tokens.update", [managingPermissionsFor]), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => setManagingPermissionsFor(null)
    });
  }
  function confirmApiTokenDeletion(token) {
    setApiTokenBeingDeleted(token);
  }
  function deleteApiToken() {
    if (!apiTokenBeingDeleted) {
      return;
    }
    deleteApiTokenForm.delete(route("api-tokens.destroy", [apiTokenBeingDeleted]), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => setApiTokenBeingDeleted(null)
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs(FormSection, {
      onSubmit: createApiToken,
      title: "Create API Token",
      description: "API tokens allow third-party services to authenticate with our application on your behalf.",
      renderActions: () => /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(ActionMessage, {
          on: createApiTokenForm.recentlySuccessful,
          className: "mr-3",
          children: "Created."
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames({
            "opacity-25": createApiTokenForm.processing
          }),
          disabled: createApiTokenForm.processing,
          children: "Create"
        })]
      }),
      children: [/* @__PURE__ */ jsxs("div", {
        className: "col-span-6 sm:col-span-4",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "name",
          children: "Name"
        }), /* @__PURE__ */ jsx(TextInput, {
          id: "name",
          type: "text",
          className: "mt-1 block w-full",
          value: createApiTokenForm.data.name,
          onChange: (e) => createApiTokenForm.setData("name", e.currentTarget.value),
          autoFocus: true
        }), /* @__PURE__ */ jsx(InputError, {
          message: createApiTokenForm.errors.name,
          className: "mt-2"
        })]
      }), availablePermissions.length > 0 && /* @__PURE__ */ jsxs("div", {
        className: "col-span-6",
        children: [/* @__PURE__ */ jsx(InputLabel, {
          htmlFor: "permissions",
          children: "Permissions"
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4",
          children: availablePermissions.map((permission) => /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsxs("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx(Checkbox, {
                value: permission,
                checked: createApiTokenForm.data.permissions.includes(permission),
                onChange: (e) => {
                  if (createApiTokenForm.data.permissions.includes(e.currentTarget.value)) {
                    createApiTokenForm.setData("permissions", createApiTokenForm.data.permissions.filter((p) => p !== e.currentTarget.value));
                  } else {
                    createApiTokenForm.setData("permissions", [e.currentTarget.value, ...createApiTokenForm.data.permissions]);
                  }
                }
              }), /* @__PURE__ */ jsx("span", {
                className: "ml-2 text-sm text-gray-600 dark:text-gray-400",
                children: permission
              })]
            })
          }, permission))
        })]
      })]
    }), tokens.length > 0 ? /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(SectionBorder, {}), /* @__PURE__ */ jsx("div", {
        className: "mt-10 sm:mt-0",
        children: /* @__PURE__ */ jsx(ActionSection, {
          title: "Manage API Tokens",
          description: "You may delete any of your existing tokens if they are no longer needed.",
          children: /* @__PURE__ */ jsx("div", {
            className: "space-y-6",
            children: tokens.map((token) => /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-between",
              children: [/* @__PURE__ */ jsx("div", {
                className: "break-all dark:text-white",
                children: token.name
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [token.last_used_ago && /* @__PURE__ */ jsxs("div", {
                  className: "text-sm text-gray-400",
                  children: ["Last used ", token.last_used_ago]
                }), availablePermissions.length > 0 ? /* @__PURE__ */ jsx(PrimaryButton, {
                  className: "cursor-pointer ml-6 text-sm text-gray-400 underline",
                  onClick: () => manageApiTokenPermissions(token),
                  children: "Permissions"
                }) : null, /* @__PURE__ */ jsx(PrimaryButton, {
                  className: "cursor-pointer ml-6 text-sm text-red-500",
                  onClick: () => confirmApiTokenDeletion(token),
                  children: "Delete"
                })]
              })]
            }, token.id))
          })
        })
      })]
    }) : null, /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: displayingToken,
      onClose: () => setDisplayingToken(false),
      children: [/* @__PURE__ */ jsxs(DialogModal.Content, {
        title: "API Token",
        children: [/* @__PURE__ */ jsx("div", {
          children: "Please copy your new API token. For your security, it won't be shown again."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500",
          children: (_c = (_b = (_a = page.props) == null ? void 0 : _a.jetstream) == null ? void 0 : _b.flash) == null ? void 0 : _c.token
        })]
      }), /* @__PURE__ */ jsx(DialogModal.Footer, {
        children: /* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setDisplayingToken(false),
          children: "Close"
        })
      })]
    }), /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: !!managingPermissionsFor,
      onClose: () => setManagingPermissionsFor(null),
      children: [/* @__PURE__ */ jsx(DialogModal.Content, {
        title: "API Token Permissions",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: availablePermissions.map((permission) => /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsxs("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx(Checkbox, {
                value: permission,
                checked: updateApiTokenForm.data.permissions.includes(permission),
                onChange: (e) => {
                  if (updateApiTokenForm.data.permissions.includes(e.currentTarget.value)) {
                    updateApiTokenForm.setData("permissions", updateApiTokenForm.data.permissions.filter((p) => p !== e.currentTarget.value));
                  } else {
                    updateApiTokenForm.setData("permissions", [e.currentTarget.value, ...updateApiTokenForm.data.permissions]);
                  }
                }
              }), /* @__PURE__ */ jsx("span", {
                className: "ml-2 text-sm text-gray-600 dark:text-gray-400",
                children: permission
              })]
            })
          }, permission))
        })
      }), /* @__PURE__ */ jsxs(DialogModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setManagingPermissionsFor(null),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          onClick: updateApiToken,
          className: classNames("ml-2", {
            "opacity-25": updateApiTokenForm.processing
          }),
          disabled: updateApiTokenForm.processing,
          children: "Save"
        })]
      })]
    }), /* @__PURE__ */ jsxs(ConfirmationModal, {
      isOpen: !!apiTokenBeingDeleted,
      onClose: () => setApiTokenBeingDeleted(null),
      children: [/* @__PURE__ */ jsx(ConfirmationModal.Content, {
        title: "Delete API Token",
        children: "Are you sure you would like to delete this API token?"
      }), /* @__PURE__ */ jsxs(ConfirmationModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: () => setApiTokenBeingDeleted(null),
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: deleteApiToken,
          className: classNames("ml-2", {
            "opacity-25": deleteApiTokenForm.processing
          }),
          disabled: deleteApiTokenForm.processing,
          children: "Delete"
        })]
      })]
    })]
  });
}
export {
  APITokenManager as default
};
