import { Link } from "@inertiajs/react";
import { j as jsx } from "../ssr.js";
function AuthenticationCardLogo() {
  return /* @__PURE__ */ jsx(Link, {
    href: "/",
    children: /* @__PURE__ */ jsx("img", {
      className: "w-16 h-16",
      src: "/storage/logo.png"
    })
  });
}
export {
  AuthenticationCardLogo as A
};
