import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { createContext, useContext } from "react";
import route from "ziggy-js";
import * as jsxRuntime from "react/jsx-runtime";
const RouteContext = createContext(null);
function useRoute() {
  const fn = useContext(RouteContext);
  if (!fn) {
    throw new Error("Route function must be provided");
  }
  return fn;
}
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const appName = "Laravel";
createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.1d10919e.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.43617537.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.17a3734e.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.662111cf.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.6ff52261.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.23f0fcdd.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.1c2b8785.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.5c2f00d7.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.e0481bd0.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.c97bf531.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.3ddbb88f.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.800064e5.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.7b592991.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.4a2acbd7.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.a04285b6.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.cdbf309e.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.f0bf7438.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.7a9efad4.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.78b557d2.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.b152c9ba.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.7c235c1e.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.7f886c46.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.c72dad62.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.8bc78040.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.5d419a9e.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.50ef16cb.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.21ee029b.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.38d3ac26.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.ab848d64.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.52900929.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.4e5e7006.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.b202db23.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.2550fba0.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.d638d33d.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.89b595b0.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.0b7bf68d.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.68ca564c.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.2e4653f0.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.b68e35aa.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.c7bed578.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.e91ec85c.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.ee8d2d4a.js"), "./Pages/Test.tsx": () => import("./assets/Test.2e94b8d2.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.efabdbe4.js") })),
  setup: ({
    App,
    props
  }) => {
    const ssrRoute = (name, params, absolute, config) => {
      return route(name, params, absolute, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.url),
        ...config
      });
    };
    return /* @__PURE__ */ jsx(RouteContext.Provider, {
      value: ssrRoute,
      children: /* @__PURE__ */ jsx(App, {
        ...props
      })
    });
  }
}));
export {
  Fragment as F,
  jsxs as a,
  jsx as j,
  useRoute as u
};
