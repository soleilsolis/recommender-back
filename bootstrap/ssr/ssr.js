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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.a50ee32e.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.5c072fab.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.ab3c142d.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.8a107a17.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.2471ca80.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.be2cfa54.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.cd62b9bb.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.7509c33c.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.fcd6be00.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.b969679f.js"), "./Pages/DashboardStudent.tsx": () => import("./assets/DashboardStudent.757d54c3.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.b10254f5.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.3d2fd2b3.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.2adb07cc.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.6dd72dce.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.2f95f46a.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.cd03fc7e.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.8c3f3cdb.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.c6308a18.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.a41fbc01.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.4b8e80ba.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.e468c193.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.95230151.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.ccdb25d4.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.2dca6195.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.523f250e.js"), "./Pages/Exams/QuestionStats.tsx": () => import("./assets/QuestionStats.32d92af4.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.9cd94d97.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.7e265d59.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.83499e48.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.08850500.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.d3a06547.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.cd2c6ec7.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.b421462c.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.eed5ba8f.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.1d3aeece.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.bb70cb88.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.98ece74b.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.ce1bd0de.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.b997d7b4.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.dd0b057f.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.74254e3d.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.f6f624f8.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.8e516c09.js"), "./Pages/Test.tsx": () => import("./assets/Test.df646c60.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.237e543e.js") })),
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
