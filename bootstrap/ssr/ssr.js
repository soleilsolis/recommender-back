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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.ccac34d3.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.6d9d5292.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.bd4f8c82.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.3063739d.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.3564480a.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.efea92ac.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.b6fe3c80.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.54e2a750.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.10f449e2.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.a5828aa7.js"), "./Pages/DashboardStudent.tsx": () => import("./assets/DashboardStudent.ea790608.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.f10ee3bd.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.ffb70a11.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.64eeeaa3.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.90bc2cc1.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.4420d3ad.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.1d0e1b09.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.5138c21f.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.dafedd47.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.0480b7c3.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.58b2d811.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.66a6a9c5.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.9d473785.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.623d3b51.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.57d6d2e5.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.d09a87d6.js"), "./Pages/Exams/QuestionStats.tsx": () => import("./assets/QuestionStats.d19d6c9d.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.8b5e544f.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.7e91aed2.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.95c8d6cf.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.32d80404.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.35fe285e.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.647fe368.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.33e25e22.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.65e67bfb.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.76acb5e0.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.9db2ee4a.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.f9f96ba1.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.50bc5c98.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.5e9a0661.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.d0d42626.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.359ab314.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.947b4b71.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.d82b6929.js"), "./Pages/Test.tsx": () => import("./assets/Test.4cb34f36.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.a72b44cd.js") })),
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
