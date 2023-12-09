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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.7cb33ccf.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.fdc652bf.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.fcc35835.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.9cf7e595.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.52d1717f.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.f3fce1aa.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.c822caaa.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.fb97e4b4.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.f6553970.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.43537244.js"), "./Pages/DashboardStudent.tsx": () => import("./assets/DashboardStudent.7e98e507.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.304bb22e.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.242814af.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.c6a43f91.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.4941c822.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.9d4b1938.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.d978c7e1.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.3bee38e2.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.cf115986.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.8d6373c5.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.0dba1be2.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.2051b773.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.1e471f13.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.8fef973a.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.a3b04093.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.78649ab4.js"), "./Pages/Exams/QuestionStats.tsx": () => import("./assets/QuestionStats.702c9a66.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.ce23ee08.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.289b3829.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.73287100.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.0cbd7df8.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.f677278a.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.1a1a6c80.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.2ad0ff4a.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.e30c6866.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.13be0cf2.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.5eb130f6.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.f61b0780.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.b2763338.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.01141cd4.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.ecd4a26e.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.a11659d0.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.9b93308b.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.768827bf.js"), "./Pages/Test.tsx": () => import("./assets/Test.6d6d4df8.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.58eacc01.js") })),
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
