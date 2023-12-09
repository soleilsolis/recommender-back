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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.3dbbf2ed.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.19bcbb24.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.9e4fe740.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.d8d4b9f5.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.07fc69b4.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.1fbcf61d.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.48032d1e.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.826d0409.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.800efc30.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.fe4f5140.js"), "./Pages/DashboardStudent.tsx": () => import("./assets/DashboardStudent.a9b1a4c8.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.096c8d78.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.b91f9169.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.0fa078ef.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.ee128a88.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.22998b5b.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.7bc632b2.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.9abb5097.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.676d56e7.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.b41d4ed9.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.c66d6c19.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.98b66884.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.e53ee6fa.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.a67f261b.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.d7ba8995.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.4b177779.js"), "./Pages/Exams/QuestionStats.tsx": () => import("./assets/QuestionStats.84b81f85.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.01cc801e.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.b37d24a2.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.a1b65a4f.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.90a3412a.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.6dfc822f.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.f0d7989b.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.ef05d244.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.4921218d.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.66ebc1d0.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.8a0a293d.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.e5fe5365.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.5e126cb0.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.9df40b0b.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.cd8bb8d0.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.ee34b1a1.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.35b73461.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.b4ad8e0d.js"), "./Pages/Test.tsx": () => import("./assets/Test.1cdfc145.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.ae7aa561.js") })),
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
