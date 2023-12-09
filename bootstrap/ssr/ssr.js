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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.d8a14a65.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.15131485.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.55de1ce1.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.cbf591c0.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.e046dcf0.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.bbe766f4.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.72aa8f88.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.bfa2d567.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.f307132f.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.09816087.js"), "./Pages/DashboardStudent.tsx": () => import("./assets/DashboardStudent.3e8e2116.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.8026c0df.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.074ceefd.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.729e93f3.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.93c9a221.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.fffb2b79.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.c8296723.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.7e482271.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.750b6841.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.d839dc31.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.cf19d39b.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.01a29505.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.7b588878.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.5303a644.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.271fe55b.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.2905a028.js"), "./Pages/Exams/QuestionStats.tsx": () => import("./assets/QuestionStats.f3c67adc.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.170bb2ab.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.2816c6e5.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.9b6b58b9.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.8c0d6108.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.4b21d073.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.7f819db8.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.10b5f4bf.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.aa30e44e.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.1bc4d929.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.83a58c96.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.c23b9f8d.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.ecdb6e51.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.c67b7576.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.2ba51330.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.b90dfb5e.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.5d0cd3f6.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.9664b99d.js"), "./Pages/Test.tsx": () => import("./assets/Test.0104b317.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.641cc1b4.js") })),
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
