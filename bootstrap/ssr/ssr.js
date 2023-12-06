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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.tsx": () => import("./assets/Index.1a910a5b.js"), "./Pages/API/Partials/APITokenManager.tsx": () => import("./assets/APITokenManager.8e14b6c3.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword.9bfcb047.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword.69a27b93.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login.e7d62f4a.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register.f7deb045.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword.a640d818.js"), "./Pages/Auth/TwoFactorChallenge.tsx": () => import("./assets/TwoFactorChallenge.2d7f3bba.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail.fa672c64.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard.f2e94197.js"), "./Pages/ExamTypes/Create.tsx": () => import("./assets/Create.a7446ef8.js"), "./Pages/ExamTypes/Index.tsx": () => import("./assets/Index.ec676730.js"), "./Pages/ExamTypes/Partials/CreateExamTypeForm.tsx": () => import("./assets/CreateExamTypeForm.643a4b5d.js"), "./Pages/ExamTypes/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.314cb55d.js"), "./Pages/ExamTypes/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.08eabdbf.js"), "./Pages/ExamTypes/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.298c0452.js"), "./Pages/Exams/Create.tsx": () => import("./assets/Create.f2324172.js"), "./Pages/Exams/CurrentExam.tsx": () => import("./assets/CurrentExam.2ee78ddf.js"), "./Pages/Exams/Edit.tsx": () => import("./assets/Edit.3847b29b.js"), "./Pages/Exams/Index.tsx": () => import("./assets/Index.ffe429ec.js"), "./Pages/Exams/IndexStudent.tsx": () => import("./assets/IndexStudent.a818ad58.js"), "./Pages/Exams/Instances.tsx": () => import("./assets/Instances.6c3dd03b.js"), "./Pages/Exams/Partials/AddCategoriesForm.tsx": () => import("./assets/AddCategoriesForm.c2b23eec.js"), "./Pages/Exams/Partials/CreateExamForm.tsx": () => import("./assets/CreateExamForm.a468474d.js"), "./Pages/Exams/Partials/EditExamForm.tsx": () => import("./assets/EditExamForm.364ece8b.js"), "./Pages/Exams/Show.tsx": () => import("./assets/Show.3a3cb8cc.js"), "./Pages/Exams/ShowStudent.tsx": () => import("./assets/ShowStudent.4b60fda7.js"), "./Pages/Exams/Submission.tsx": () => import("./assets/Submission.f41069cc.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy.d507862a.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm.400e6405.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.tsx": () => import("./assets/LogoutOtherBrowserSessionsForm.33b28da0.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.tsx": () => import("./assets/TwoFactorAuthenticationForm.e684c35d.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm.ebe7aaaf.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm.bac191eb.js"), "./Pages/Profile/Show.tsx": () => import("./assets/Show.ad628775.js"), "./Pages/Teams/Create.tsx": () => import("./assets/Create.220bd649.js"), "./Pages/Teams/Partials/CreateTeamForm.tsx": () => import("./assets/CreateTeamForm.9c835956.js"), "./Pages/Teams/Partials/DeleteTeamForm.tsx": () => import("./assets/DeleteTeamForm.02c1cce9.js"), "./Pages/Teams/Partials/TeamMemberManager.tsx": () => import("./assets/TeamMemberManager.7db7609f.js"), "./Pages/Teams/Partials/UpdateTeamNameForm.tsx": () => import("./assets/UpdateTeamNameForm.0889aca2.js"), "./Pages/Teams/Show.tsx": () => import("./assets/Show.0e9dc507.js"), "./Pages/TermsOfService.tsx": () => import("./assets/TermsOfService.a5395874.js"), "./Pages/Test.tsx": () => import("./assets/Test.e9152835.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome.5f4144d7.js") })),
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
