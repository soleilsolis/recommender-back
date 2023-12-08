import CreateTeamForm from "./CreateTeamForm.92f1265d.js";
import { A as AppLayout } from "./AppLayout.e470f6cc.js";
import { j as jsx } from "../ssr.js";
import "@inertiajs/react";
import "./useTypedPage.7ef925b5.js";
import "./ActionMessage.acba4187.js";
import "@headlessui/react";
import "./FormSection.bdf61855.js";
import "classnames";
import "./SectionTitle.5026acf4.js";
import "./InputError.6b93874b.js";
import "./InputLabel.a34aaf80.js";
import "./PrimaryButton.e4feac23.js";
import "./TextInput.a1e7e997.js";
import "react";
import "@inertiajs/core";
import "@material-tailwind/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
function Create() {
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Create Team",
    renderHeader: () => /* @__PURE__ */ jsx("h2", {
      className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
      children: "Create Team"
    }),
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(CreateTeamForm, {})
      })
    })
  });
}
export {
  Create as default
};
