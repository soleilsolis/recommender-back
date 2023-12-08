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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.c8e065a6.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.cfc10054.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.5f77673a.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.b4200930.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.79489453.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.bdc3d61c.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.89baf0e1.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.a934e4c6.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.4ff8e397.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.ef6e157f.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.468699fd.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.e1725999.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.1cb98bda.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.5f92b00e.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.02eef258.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.d50083f1.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.3c4f69b9.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.5c36434b.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.b263c720.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.1b8fbb9d.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.92a134b8.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.0b5d0a0a.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.826482b3.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.a8b50079.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.fa518c92.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.7c45a9c7.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.5d525a11.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.bcdec18a.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.9a3dd9bc.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.5176e9e3.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.e19ea41c.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.2ff5a0ff.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.1b8c3ee9.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.bbc5b5fe.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.fe79aa82.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.8c07c708.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.1885e3c7.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.ae2a04ea.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.9668bcf6.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.9dd29b36.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.6130dad4.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.b210a5cb.js"), "./Pages/Test.tsx": () => import("./assets/Test.2b71fd89.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.68248e72.js") })),
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
