import { router } from "@inertiajs/core";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import classNames from "classnames";
import { useState, useRef } from "react";
import { A as ActionSection } from "./Modal.a6f97e00.js";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { D as DialogModal } from "./DialogModal.5c1f7c45.js";
import { I as InputError } from "./InputError.7c75781f.js";
import { P as PrimaryButton } from "./PrimaryButton.5161cdb7.js";
import { T as TextInput } from "./TextInput.06c89cbc.js";
import { S as SecondaryButton } from "./SecondaryButton.58a85fc5.js";
import { D as DangerButton } from "./DangerButton.f1adc843.js";
import { I as InputLabel } from "./InputLabel.6fec858d.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import "./SectionTitle.00915fda.js";
import "@headlessui/react";
import "react-dom";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function ConfirmsPassword({
  title = "Confirm Password",
  content = "For your security, please confirm your password to continue.",
  button = "Confirm",
  onConfirm,
  children
}) {
  const route = useRoute();
  const [confirmingPassword, setConfirmingPassword] = useState(false);
  const [form, setForm] = useState({
    password: "",
    error: "",
    processing: false
  });
  const passwordRef = useRef(null);
  function startConfirmingPassword() {
    axios.get(route("password.confirmation")).then((response) => {
      if (response.data.confirmed) {
        onConfirm();
      } else {
        setConfirmingPassword(true);
        setTimeout(() => {
          var _a;
          return (_a = passwordRef.current) == null ? void 0 : _a.focus();
        }, 250);
      }
    });
  }
  function confirmPassword() {
    setForm({
      ...form,
      processing: true
    });
    axios.post(route("password.confirm"), {
      password: form.password
    }).then(() => {
      closeModal();
      setTimeout(() => onConfirm(), 250);
    }).catch((error) => {
      var _a;
      setForm({
        ...form,
        processing: false,
        error: error.response.data.errors.password[0]
      });
      (_a = passwordRef.current) == null ? void 0 : _a.focus();
    });
  }
  function closeModal() {
    setConfirmingPassword(false);
    setForm({
      processing: false,
      password: "",
      error: ""
    });
  }
  return /* @__PURE__ */ jsxs("span", {
    children: [/* @__PURE__ */ jsx("span", {
      onClick: startConfirmingPassword,
      children
    }), /* @__PURE__ */ jsxs(DialogModal, {
      isOpen: confirmingPassword,
      onClose: closeModal,
      children: [/* @__PURE__ */ jsxs(DialogModal.Content, {
        title,
        children: [content, /* @__PURE__ */ jsxs("div", {
          className: "mt-4",
          children: [/* @__PURE__ */ jsx(TextInput, {
            ref: passwordRef,
            type: "password",
            className: "mt-1 block w-3/4",
            placeholder: "Password",
            value: form.password,
            onChange: (e) => setForm({
              ...form,
              password: e.currentTarget.value
            })
          }), /* @__PURE__ */ jsx(InputError, {
            message: form.error,
            className: "mt-2"
          })]
        })]
      }), /* @__PURE__ */ jsxs(DialogModal.Footer, {
        children: [/* @__PURE__ */ jsx(SecondaryButton, {
          onClick: closeModal,
          children: "Cancel"
        }), /* @__PURE__ */ jsx(PrimaryButton, {
          className: classNames("ml-2", {
            "opacity-25": form.processing
          }),
          onClick: confirmPassword,
          disabled: form.processing,
          children: button
        })]
      })]
    })]
  });
}
function TwoFactorAuthenticationForm({
  requiresConfirmation
}) {
  var _a, _b, _c;
  const page = useTypedPage();
  const [enabling, setEnabling] = useState(false);
  const [disabling, setDisabling] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const [recoveryCodes, setRecoveryCodes] = useState([]);
  const [confirming, setConfirming] = useState(false);
  const [setupKey, setSetupKey] = useState(null);
  const confirmationForm = useForm({
    code: ""
  });
  const twoFactorEnabled = !enabling && ((_c = (_b = (_a = page.props) == null ? void 0 : _a.auth) == null ? void 0 : _b.user) == null ? void 0 : _c.two_factor_enabled);
  function enableTwoFactorAuthentication() {
    setEnabling(true);
    router.post("/user/two-factor-authentication", {}, {
      preserveScroll: true,
      onSuccess() {
        return Promise.all([showQrCode(), showSetupKey(), showRecoveryCodes()]);
      },
      onFinish() {
        setEnabling(false);
        setConfirming(requiresConfirmation);
      }
    });
  }
  function showSetupKey() {
    return axios.get("/user/two-factor-secret-key").then((response) => {
      setSetupKey(response.data.secretKey);
    });
  }
  function confirmTwoFactorAuthentication() {
    confirmationForm.post("/user/confirmed-two-factor-authentication", {
      preserveScroll: true,
      preserveState: true,
      errorBag: "confirmTwoFactorAuthentication",
      onSuccess: () => {
        setConfirming(false);
        setQrCode(null);
        setSetupKey(null);
      }
    });
  }
  function showQrCode() {
    return axios.get("/user/two-factor-qr-code").then((response) => {
      setQrCode(response.data.svg);
    });
  }
  function showRecoveryCodes() {
    return axios.get("/user/two-factor-recovery-codes").then((response) => {
      setRecoveryCodes(response.data);
    });
  }
  function regenerateRecoveryCodes() {
    axios.post("/user/two-factor-recovery-codes").then(() => {
      showRecoveryCodes();
    });
  }
  function disableTwoFactorAuthentication() {
    setDisabling(true);
    router.delete("/user/two-factor-authentication", {
      preserveScroll: true,
      onSuccess() {
        setDisabling(false);
        setConfirming(false);
      }
    });
  }
  return /* @__PURE__ */ jsxs(ActionSection, {
    title: "Two Factor Authentication",
    description: "Add additional security to your account using two factor authentication.",
    children: [(() => {
      if (twoFactorEnabled && !confirming) {
        return /* @__PURE__ */ jsx("h3", {
          className: "text-lg font-medium text-gray-900 dark:text-gray-100",
          children: "You have enabled two factor authentication."
        });
      }
      if (confirming) {
        return /* @__PURE__ */ jsx("h3", {
          className: "text-lg font-medium text-gray-900 dark:text-gray-100",
          children: "Finish enabling two factor authentication."
        });
      }
      return /* @__PURE__ */ jsx("h3", {
        className: "text-lg font-medium text-gray-900 dark:text-gray-100",
        children: "You have not enabled two factor authentication."
      });
    })(), /* @__PURE__ */ jsx("div", {
      className: "mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400",
      children: /* @__PURE__ */ jsx("p", {
        children: "When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application."
      })
    }), twoFactorEnabled || confirming ? /* @__PURE__ */ jsxs("div", {
      children: [qrCode ? /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("div", {
          className: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400",
          children: confirming ? /* @__PURE__ */ jsx("p", {
            className: "font-semibold",
            children: "To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code."
          }) : /* @__PURE__ */ jsx("p", {
            children: "Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key."
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: qrCode || ""
          }
        }), setupKey && /* @__PURE__ */ jsx("div", {
          className: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400",
          children: /* @__PURE__ */ jsxs("p", {
            className: "font-semibold",
            children: ["Setup Key:", " ", /* @__PURE__ */ jsx("span", {
              dangerouslySetInnerHTML: {
                __html: setupKey || ""
              }
            })]
          })
        }), confirming && /* @__PURE__ */ jsxs("div", {
          className: "mt-4",
          children: [/* @__PURE__ */ jsx(InputLabel, {
            htmlFor: "code",
            value: "Code"
          }), /* @__PURE__ */ jsx(TextInput, {
            id: "code",
            type: "text",
            name: "code",
            className: "block mt-1 w-1/2",
            inputMode: "numeric",
            autoFocus: true,
            autoComplete: "one-time-code",
            value: confirmationForm.data.code,
            onChange: (e) => confirmationForm.setData("code", e.currentTarget.value)
          }), /* @__PURE__ */ jsx(InputError, {
            message: confirmationForm.errors.code,
            className: "mt-2"
          })]
        })]
      }) : null, recoveryCodes.length > 0 && !confirming ? /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("div", {
          className: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400",
          children: /* @__PURE__ */ jsx("p", {
            className: "font-semibold",
            children: "Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost."
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg",
          children: recoveryCodes.map((code) => /* @__PURE__ */ jsx("div", {
            children: code
          }, code))
        })]
      }) : null]
    }) : null, /* @__PURE__ */ jsx("div", {
      className: "mt-5",
      children: twoFactorEnabled || confirming ? /* @__PURE__ */ jsxs("div", {
        children: [confirming ? /* @__PURE__ */ jsx(ConfirmsPassword, {
          onConfirm: confirmTwoFactorAuthentication,
          children: /* @__PURE__ */ jsx(PrimaryButton, {
            className: classNames("mr-3", {
              "opacity-25": enabling
            }),
            disabled: enabling,
            children: "Confirm"
          })
        }) : null, recoveryCodes.length > 0 && !confirming ? /* @__PURE__ */ jsx(ConfirmsPassword, {
          onConfirm: regenerateRecoveryCodes,
          children: /* @__PURE__ */ jsx(SecondaryButton, {
            className: "mr-3",
            children: "Regenerate Recovery Codes"
          })
        }) : null, recoveryCodes.length === 0 && !confirming ? /* @__PURE__ */ jsx(ConfirmsPassword, {
          onConfirm: showRecoveryCodes,
          children: /* @__PURE__ */ jsx(SecondaryButton, {
            className: "mr-3",
            children: "Show Recovery Codes"
          })
        }) : null, confirming ? /* @__PURE__ */ jsx(ConfirmsPassword, {
          onConfirm: disableTwoFactorAuthentication,
          children: /* @__PURE__ */ jsx(SecondaryButton, {
            className: classNames("mr-3", {
              "opacity-25": disabling
            }),
            disabled: disabling,
            children: "Cancel"
          })
        }) : /* @__PURE__ */ jsx(ConfirmsPassword, {
          onConfirm: disableTwoFactorAuthentication,
          children: /* @__PURE__ */ jsx(DangerButton, {
            className: classNames({
              "opacity-25": disabling
            }),
            disabled: disabling,
            children: "Disable"
          })
        })]
      }) : /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(ConfirmsPassword, {
          onConfirm: enableTwoFactorAuthentication,
          children: /* @__PURE__ */ jsx(PrimaryButton, {
            type: "button",
            className: classNames({
              "opacity-25": enabling
            }),
            disabled: enabling,
            children: "Enable"
          })
        })
      })
    })]
  });
}
export {
  TwoFactorAuthenticationForm as default
};
