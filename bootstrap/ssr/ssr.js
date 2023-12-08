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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.05f5474c.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.a6b6f9ad.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.69e8f502.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.ba995f7e.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.dc5734be.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.a3e19277.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.82e07836.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.4696b730.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.36260519.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.547e86a9.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.4ec47d01.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.c56c1d16.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.13f6177f.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.1eab9912.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.338054e6.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.d0c878c3.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.e3a86c76.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.e065d29c.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.ececcb5d.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.9dcab476.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.1ca612d4.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.13576449.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.de0ef88e.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.b20464c7.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.8d4297ad.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.564544b7.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.935f060c.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.7f188e87.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.d6360073.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.5e387933.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.c50925c0.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.16130d05.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.d260bbe2.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.cb89d201.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.a516d3b7.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.9ce22ef3.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.5692c903.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.28435359.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.c66510c9.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.2baaa787.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.cefe99eb.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.90c8a3b4.js"), "./Pages/Test.tsx": () => import("./assets/Test.f1a722cd.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.c2e89cd3.js") })),
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
