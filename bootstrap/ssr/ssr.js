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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.0a5851be.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.c806686d.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.890463c9.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.3a2d5e41.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.4f3edd86.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.0944a22c.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.e89d9949.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.c87d62c3.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.ebecbbcb.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.70f0cbd9.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.9af74259.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.6e4af858.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.4d98d333.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.3c5b94b5.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.99411848.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.b8110edc.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.a7971046.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.dd5297a6.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.74106794.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.b83df76f.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.3187c791.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.65a5ae5f.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.359ec289.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.ec545f73.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.b0c634fe.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.cdd8fe9b.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.13df5556.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.d8f45851.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.c8b76565.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.871460b9.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.efd00dc5.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.e549f769.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.f046b22f.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.05cc2e63.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.dba12677.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.382c3de4.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.648a7e22.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.29afd52b.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.ef2be189.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.5391303b.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.09eb77e9.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.45cce1f4.js"), "./Pages/Test.tsx": () => import("./assets/Test.59cc67ac.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.f11612d9.js") })),
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
