import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { useState, useRef } from "react";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { A as ActionSection } from "./Modal.a198b1e3.js";
import { D as DangerButton } from "./DangerButton.f5533861.js";
import { D as DialogModal } from "./DialogModal.19dba5a3.js";
import { T as TextInput } from "./TextInput.7e7c856a.js";
import { I as InputError } from "./InputError.14bd9d6b.js";
import { S as SecondaryButton } from "./SecondaryButton.a74045bf.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "./SectionTitle.a55e48fb.js";
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
