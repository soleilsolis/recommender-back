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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.c541a70d.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.0656f968.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.59e78b96.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.0b708afa.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.9bc40a88.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.3d6ae9dc.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.3b32597e.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.87aebb54.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.d1a41bdb.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.1f76d0f0.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.aae451d4.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.1f712bea.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.be2dd19c.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.10e3e13d.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.1de21a33.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.5ab20471.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.6beba9c0.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.2994ab00.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.23231ca8.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.194e9e9a.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.c324a431.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.fc8c21ab.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.7de2b71d.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.a8e8097e.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.f688570e.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.225a9169.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.29a9c7b3.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.b6113b81.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.859ae76f.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.e4def292.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.4cce2248.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.1947e13b.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.7ace796c.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.2fba25e0.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.ec24dde1.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.11ef0ee3.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.7caa1949.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.f2a2d977.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.701e592b.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.1d5759a9.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.62854905.js"), "./Pages/Test.tsx": () => import("./assets/Test.d6ec2f63.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.1b55a154.js") })),
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
