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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.9951f4c8.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.2264b998.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.4b20a774.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.a36ae4f3.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.0dab916e.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.a82aa278.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.9ed1b1e0.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.baeb3514.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.86c860f7.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.a0d42e87.js"), "./Pages/DashboardStudent.tsx": () => import("./assets/DashboardStudent.6dfb7963.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.f185b8f6.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.a1355de3.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.9a3ce08d.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.f037cb18.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.4fe97399.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.47eef5e0.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.9931b07e.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.2a855402.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.634e0682.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.f537a72d.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.0407e486.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.f5ba85dc.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.9666c706.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.8d1e16a1.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.166979bb.js"), "./Pages/Exams/QuestionStats.tsx": () => import("./assets/QuestionStats.8f32d415.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.719b1b76.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.7a41b901.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.de86f6d5.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.7780b58f.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.677923d6.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.5c9981de.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.112f104c.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.056bdbc7.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.a19d79e4.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.5d13750e.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.7081cd3a.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.1d0f801c.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.207a7b7c.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.11c9eeae.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.361afa18.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.0b8fb935.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.905b1bd2.js"), "./Pages/Test.tsx": () => import("./assets/Test.24d26f12.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.2b71ed96.js") })),
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
