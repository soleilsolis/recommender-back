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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.2f65a044.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.c6f85af6.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.9f6187e5.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.d0cf5bc0.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.f629cda2.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.a3f28d33.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.6c1e9d30.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.1df7c168.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.f453f6e8.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.d02eecbd.js"), "./Pages/DashboardStudent.tsx": () => import("./assets/DashboardStudent.a1a2fc94.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.1e4f65a8.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.074e93c2.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.02ebd7e3.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.2f47e7fc.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.0555a2af.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.dede4e80.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.308ea976.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.eb302233.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.97227350.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.e7aef49c.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.2eda29d2.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.85926b22.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.35ac8210.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.cf9a70ec.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.1499cb90.js"), "./Pages/Exams/QuestionStats.tsx": () => import("./assets/QuestionStats.2bf7a9ef.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.04b5f56b.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.d83070aa.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.0c08e172.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.88eea8a8.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.9273fae5.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.6bba0f80.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.9c8ab488.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.2ae1ed78.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.1d02de43.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.a3307d2c.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.042d2142.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.a4778e24.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.1df6d145.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.6347fd72.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.fc3ce6a9.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.b0ff34a4.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.d6fcb2f9.js"), "./Pages/Test.tsx": () => import("./assets/Test.138412b6.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.a1867aaa.js") })),
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
