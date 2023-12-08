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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.8f929981.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.14b96c0d.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.38ad3318.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.4b8f3466.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.9a87822e.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.969b1f1f.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.f952f30a.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.b507f936.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.6484f6a5.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.b4d5eee5.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.f40bf439.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.416b8b18.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.c58994cf.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.4a8f735c.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.901cc5fc.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.f162cb06.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.f1f4994b.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.78444772.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.934a26ba.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.32988e0f.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.e5dcfdad.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.9acafe23.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.bfdcdebc.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.91ee449c.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.088af09f.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.852be92f.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.6629a215.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.6221cfcb.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.e5bb1e84.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.ee795951.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.c6bfca7d.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.dc8b8800.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.3407aea0.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.ef03c69c.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.de07d2b1.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.944041af.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.92f1265d.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.1a7c0772.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.5bb57ebb.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.5ea21dd5.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.94693580.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.c6081001.js"), "./Pages/Test.tsx": () => import("./assets/Test.eb204f5d.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.7e02442d.js") })),
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
