import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { useState, useRef } from "react";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { A as ActionSection } from "./Modal.8b827a79.js";
import { D as DangerButton } from "./DangerButton.5e853d7b.js";
import { D as DialogModal } from "./DialogModal.b125c14e.js";
import { T as TextInput } from "./TextInput.af5ee599.js";
import { I as InputError } from "./InputError.46a30786.js";
import { S as SecondaryButton } from "./SecondaryButton.fa7665f6.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./SectionTitle.851fb022.js";
import "@headlessui/react";
import "react-dom";
function DeleteUserForm() {
  const route = useRoute();
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const form = useForm({
    password: ""
  });
  const passwordRef = useRef(null);
  function confirmUserDeletion() {
    setConfirmingUserDeletion(true);
    setTimeout(() => {
      var _a;
      return (_a = passwordRef.current) == null ? void 0 : _a.focus();
    }, 250);
  }
  function deleteUser() {
    form.delete(route("current-user.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
        var _a;
        return (_a = passwordRef.current) == null ? void 0 : _a.focus();
      },
      onFinish: () => form.reset()
    });
  }
  function closeModal() {
    setConfirmingUserDeletion(false);
    form.reset();
  }
  return /* @__PURE__ */ jsxs(ActionSection, {
    title: "Delete Account",
    description: "Permanently delete your account.",
    children: [/* @__PURE__ */ jsx("div", {
      className: "max-w-xl text-sm text-gray-600 dark:text-gray-400",
      children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-5",
      children: /* @__PURE__ */ jsx(DangerButton, {
        onClick: confirmUserDeletion,
        children: "Delete Account"
      })
    }), /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: confirmingUserDeletion,
      onClose: closeModal,
      children: [/* @__PURE__ */ jsxs(DialogModal.Content, {
        title: "Delete Account",
        children: ["Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.", /* @__PURE__ */ jsxs("div", {
          className: "mt-4",
          children: [/* @__PURE__ */ jsx(TextInput, {
            type: "password",
            className: "mt-1 block w-3/4",
            placeholder: "Password",
            value: form.data.password,
            onChange: (e) => form.setData("password", e.currentTarget.value)
          }), /* @__PURE__ */ jsx(InputError, {
            message: form.errors.password,
            className: "mt-2"
          })]
        })]
      }), /* @__PURE__ */ jsxs(DialogModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: closeModal,
          children: "Cancel"
        }), /* @__PURE__ */ jsx(DangerButton, {
          onClick: deleteUser,
          className: classNames("ml-2", {
            "opacity-25": form.processing
          }),
          disabled: form.processing,
          children: "Delete Account"
        })]
      })]
    })]
  });
}
export {
  DeleteUserForm as default
};
