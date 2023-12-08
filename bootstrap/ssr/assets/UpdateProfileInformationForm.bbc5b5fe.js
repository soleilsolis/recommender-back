import { router } from "@inertiajs/core";
import { useForm, Link } from "@inertiajs/react";
import classNames from "classnames";
import { useState, useRef } from "react";
import { u as useRoute, a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import { A as ActionMessage } from "./ActionMessage.91724842.js";
import { F as FormSection } from "./FormSection.dc9658b7.js";
import { I as InputError } from "./InputError.5c1cee79.js";
import { I as InputLabel } from "./InputLabel.d440dfee.js";
import { P as PrimaryButton } from "./PrimaryButton.9cd5d313.js";
import { T as TextInput } from "./TextInput.ede2ca65.js";
import { S as SecondaryButton } from "./SecondaryButton.8887185b.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "@headlessui/react";
import "./SectionTitle.ab6add35.js";
function UpdateProfileInformationForm({
  user
}) {
  const form = useForm({
    _method: "PUT",
    name: user.name,
    email: user.email,
    photo: null
  });
  const route = useRoute();
  const [photoPreview, setPhotoPreview] = useState(null);
  const photoRef = useRef(null);
  const page = useTypedPage();
  const [verificationLinkSent, setVerificationLinkSent] = useState(false);
  function updateProfileInformation() {
    form.post(route("user-profile-information.update"), {
      errorBag: "updateProfileInformation",
      preserveScroll: true,
      onSuccess: () => clearPhotoFileInput()
    });
  }
  function selectNewPhoto() {
    var _a;
    (_a = photoRef.current) == null ? void 0 : _a.click();
  }
  function updatePhotoPreview() {
    var _a, _b;
    const photo = (_b = (_a = photoRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (!photo) {
      return;
    }
    form.setData("photo", photo);
    const reader = new FileReader();
    reader.onload = (e) => {
      var _a2;
      setPhotoPreview((_a2 = e.target) == null ? void 0 : _a2.result);
    };
    reader.readAsDataURL(photo);
  }
  function deletePhoto() {
    router.delete(route("current-user-photo.destroy"), {
      preserveScroll: true,
      onSuccess: () => {
        setPhotoPreview(null);
        clearPhotoFileInput();
      }
    });
  }
  function clearPhotoFileInput() {
    var _a;
    if ((_a = photoRef.current) == null ? void 0 : _a.value) {
      photoRef.current.value = "";
      form.setData("photo", null);
    }
  }
  return /* @__PURE__ */ jsxs(FormSection, {
    onSubmit: updateProfileInformation,
    title: "Profile Information",
    description: `Update your account's profile information and email address.`,
    renderActions: () => /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(ActionMessage, {
        on: form.recentlySuccessful,
        className: "mr-3",
        children: "Saved."
      }), /* @__PURE__ */ jsx(PrimaryButton, {
        className: classNames({
          "opacity-25": form.processing
        }),
        disabled: form.processing,
        children: "Save"
      })]
    }),
    children: [page.props.jetstream.managesProfilePhotos ? /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx("input", {
        type: "file",
        className: "hidden",
        ref: photoRef,
        onChange: updatePhotoPreview
      }), /* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "photo",
        value: "Photo"
      }), photoPreview ? /* @__PURE__ */ jsx("div", {
        className: "mt-2",
        children: /* @__PURE__ */ jsx("span", {
          className: "block rounded-full w-20 h-20",
          style: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundImage: `url('${photoPreview}')`
          }
        })
      }) : /* @__PURE__ */ jsx("div", {
        className: "mt-2",
        children: /* @__PURE__ */ jsx("img", {
          src: user.profile_photo_url,
          alt: user.name,
          className: "rounded-full h-20 w-20 object-cover"
        })
      }), /* @__PURE__ */ jsx(SecondaryButton, {
        className: "mt-2 mr-2",
        type: "button",
        onClick: selectNewPhoto,
        children: "Select A New Photo"
      }), user.profile_photo_path ? /* @__PURE__ */ jsx(SecondaryButton, {
        type: "button",
        className: "mt-2",
        onClick: deletePhoto,
        children: "Remove Photo"
      }) : null, /* @__PURE__ */ jsx(InputError, {
        message: form.errors.photo,
        className: "mt-2"
      })]
    }) : null, /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "name",
        value: "Name"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "name",
        type: "text",
        className: "mt-1 block w-full",
        value: form.data.name,
        onChange: (e) => form.setData("name", e.currentTarget.value),
        autoComplete: "name"
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.name,
        className: "mt-2"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/* @__PURE__ */ jsx(InputLabel, {
        htmlFor: "email",
        value: "Email"
      }), /* @__PURE__ */ jsx(TextInput, {
        id: "email",
        type: "email",
        className: "mt-1 block w-full",
        value: form.data.email,
        onChange: (e) => form.setData("email", e.currentTarget.value)
      }), /* @__PURE__ */ jsx(InputError, {
        message: form.errors.email,
        className: "mt-2"
      }), page.props.jetstream.hasEmailVerification && user.email_verified_at === null ? /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsxs("p", {
          className: "text-sm mt-2 dark:text-white",
          children: ["Your email address is unverified.", /* @__PURE__ */ jsx(Link, {
            href: route("verification.send"),
            method: "post",
            as: "button",
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            onClick: (e) => {
              e.preventDefault();
              setVerificationLinkSent(true);
            },
            children: "Click here to re-send the verification email."
          })]
        }), verificationLinkSent && /* @__PURE__ */ jsx("div", {
          className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400",
          children: "A new verification link has been sent to your email address."
        })]
      }) : null]
    })]
  });
}
export {
  UpdateProfileInformationForm as default
};
