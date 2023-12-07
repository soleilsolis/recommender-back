import { router } from "@inertiajs/core";
import { Link, Head } from "@inertiajs/react";
import classNames from "classnames";
import { useState } from "react";
import { j as jsx, a as jsxs, u as useRoute, F as Fragment } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { Transition } from "@headlessui/react";
import { Card, CardBody, Spinner, Typography } from "@material-tailwind/react";
function ApplicationMark(props) {
  return /* @__PURE__ */ jsx("img", {
    className: "w-11 h-11",
    src: "/storage/logo.png"
  });
}
function Banner() {
  var _a, _b;
  const [show, setShow] = useState(true);
  const {
    props
  } = useTypedPage();
  const style = ((_a = props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
  const message = ((_b = props.jetstream.flash) == null ? void 0 : _b.banner) || "";
  return /* @__PURE__ */ jsx("div", {
    children: show && message ? /* @__PURE__ */ jsx("div", {
      className: classNames({
        "bg-indigo-500": style == "success",
        "bg-red-700": style == "danger"
      }),
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between flex-wrap",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "w-0 flex-1 flex items-center min-w-0",
            children: [/* @__PURE__ */ jsx("span", {
              className: classNames("flex p-2 rounded-lg", {
                "bg-indigo-600": style == "success",
                "bg-red-600": style == "danger"
              }),
              children: (() => {
                switch (style) {
                  case "success":
                    return /* @__PURE__ */ jsx("svg", {
                      className: "h-5 w-5 text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    });
                  case "danger":
                    return /* @__PURE__ */ jsx("svg", {
                      className: "h-5 w-5 text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      })
                    });
                  default:
                    return null;
                }
              })()
            }), /* @__PURE__ */ jsx("p", {
              className: "ml-3 font-medium text-sm text-white truncate",
              children: message
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "flex-shrink-0 sm:ml-3",
            children: /* @__PURE__ */ jsx("button", {
              type: "button",
              className: classNames("-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition", {
                "hover:bg-indigo-600 focus:bg-indigo-600": style == "success",
                "hover:bg-red-600 focus:bg-red-600": style == "danger"
              }),
              "aria-label": "Dismiss",
              onClick: (e) => {
                e.preventDefault();
                setShow(false);
              },
              children: /* @__PURE__ */ jsx("svg", {
                className: "h-5 w-5 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            })
          })]
        })
      })
    }) : null
  });
}
function Dropdown({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white dark:bg-gray-700",
  renderTrigger,
  children
}) {
  const [open, setOpen] = useState(false);
  const widthClass = {
    "48": "w-48"
  }[width.toString()];
  const alignmentClasses = (() => {
    if (align === "left") {
      return "origin-top-left left-0";
    } else if (align === "right") {
      return "origin-top-right right-0";
    } else {
      return "origin-top";
    }
  })();
  return /* @__PURE__ */ jsxs("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsx("div", {
      onClick: () => setOpen(!open),
      children: renderTrigger()
    }), /* @__PURE__ */ jsx("div", {
      className: "fixed inset-0 z-40",
      style: {
        display: open ? "block" : "none"
      },
      onClick: () => setOpen(false)
    }), /* @__PURE__ */ jsx(Transition, {
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      className: "relative z-50",
      children: /* @__PURE__ */ jsx("div", {
        className: classNames("absolute mt-2 rounded-md shadow-lg", widthClass, alignmentClasses),
        onClick: () => setOpen(false),
        children: /* @__PURE__ */ jsx("div", {
          className: classNames("rounded-md ring-1 ring-black ring-opacity-5", contentClasses),
          children
        })
      })
    })]
  });
}
function DropdownLink({
  as,
  href,
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    children: (() => {
      switch (as) {
        case "button":
          return /* @__PURE__ */ jsx("button", {
            type: "submit",
            className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out",
            children
          });
        case "a":
          return /* @__PURE__ */ jsx("a", {
            href,
            className: "block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out",
            children
          });
        default:
          return /* @__PURE__ */ jsx(Link, {
            href: href || "",
            className: "block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out",
            children
          });
      }
    })()
  });
}
function NavLink({
  active,
  href,
  children
}) {
  const classes = active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out";
  return /* @__PURE__ */ jsx(Link, {
    href,
    className: classes,
    children
  });
}
function ResponsiveNavLink({
  active,
  href,
  children,
  ...props
}) {
  const classes = active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-left text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out";
  return /* @__PURE__ */ jsx("div", {
    children: "as" in props && props.as === "button" ? /* @__PURE__ */ jsx("button", {
      className: classNames("w-full text-left", classes),
      children
    }) : /* @__PURE__ */ jsx(Link, {
      href: href || "",
      className: classes,
      children
    })
  });
}
function AppLayout({
  title,
  renderHeader,
  children
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const page = useTypedPage();
  const route = useRoute();
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  function switchToTeam(e, team) {
    e.preventDefault();
    router.put(route("current-team.update"), {
      team_id: team.id
    }, {
      preserveState: false
    });
  }
  function logout(e) {
    e.preventDefault();
    router.post(route("logout"));
  }
  const navLinks = [{
    name: "dashboard",
    label: "Dashboard",
    type: ["admin"]
  }, {
    name: "dashboard",
    label: "Dashboard",
    type: ["student"]
  }, {
    name: "exams.index",
    label: "Exams",
    type: ["admin"]
  }, {
    name: "exams.index.student",
    label: "Exams",
    type: ["student"]
  }];
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title
    }), /* @__PURE__ */ jsx(Banner, {}), /* @__PURE__ */ jsxs("div", {
      className: "min-h-screen bg-gray-100 dark:bg-gray-900",
      children: [/* @__PURE__ */ jsxs("nav", {
        className: "bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700",
        children: [/* @__PURE__ */ jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between h-16",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex",
              children: [/* @__PURE__ */ jsx("div", {
                className: "flex-shrink-0 flex items-center",
                children: /* @__PURE__ */ jsx(Link, {
                  href: route("dashboard"),
                  children: /* @__PURE__ */ jsx(ApplicationMark, {
                    className: "block h-9 w-auto"
                  })
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",
                children: navLinks.filter((item) => {
                  return item.type.find((element) => element == page.props.auth.user.type) !== void 0;
                }).map(({
                  name,
                  label
                }) => /* @__PURE__ */ jsx(NavLink, {
                  href: route(name),
                  active: route().current(name),
                  children: label
                }))
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "hidden sm:flex sm:items-center sm:ml-6",
              children: [/* @__PURE__ */ jsx("div", {
                className: "ml-3 relative",
                children: page.props.jetstream.hasTeamFeatures ? /* @__PURE__ */ jsx(Dropdown, {
                  align: "right",
                  width: "60",
                  renderTrigger: () => {
                    var _a2, _b2;
                    return /* @__PURE__ */ jsx("span", {
                      className: "inline-flex rounded-md",
                      children: /* @__PURE__ */ jsxs("button", {
                        type: "button",
                        className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150",
                        children: [(_b2 = (_a2 = page.props.auth.user) == null ? void 0 : _a2.current_team) == null ? void 0 : _b2.name, /* @__PURE__ */ jsx("svg", {
                          className: "ml-2 -mr-0.5 h-4 w-4",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: /* @__PURE__ */ jsx("path", {
                            fillRule: "evenodd",
                            d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          })
                        })]
                      })
                    });
                  },
                  children: /* @__PURE__ */ jsx("div", {
                    className: "w-60",
                    children: page.props.jetstream.hasTeamFeatures ? /* @__PURE__ */ jsxs(Fragment, {
                      children: [((_a = page.props.auth.user) == null ? void 0 : _a.type) === "admin" && /* @__PURE__ */ jsxs(Fragment, {
                        children: [/* @__PURE__ */ jsx("div", {
                          className: "block px-4 py-2 text-xs text-gray-400",
                          children: "Manage Team"
                        }), /* @__PURE__ */ jsx(DropdownLink, {
                          href: route("teams.show", [(_b = page.props.auth.user) == null ? void 0 : _b.current_team]),
                          children: "Team Settings"
                        }), page.props.jetstream.canCreateTeams ? /* @__PURE__ */ jsx(DropdownLink, {
                          href: route("teams.create"),
                          children: "Create New Classroom"
                        }) : null, /* @__PURE__ */ jsx("div", {
                          className: "border-t border-gray-200 dark:border-gray-600"
                        })]
                      }), /* @__PURE__ */ jsx("div", {
                        className: "block px-4 py-2 text-xs text-gray-400",
                        children: "Switch Teams"
                      }), (_d = (_c = page.props.auth.user) == null ? void 0 : _c.all_teams) == null ? void 0 : _d.map((team) => {
                        var _a2;
                        return /* @__PURE__ */ jsx("form", {
                          onSubmit: (e) => switchToTeam(e, team),
                          children: /* @__PURE__ */ jsx(DropdownLink, {
                            as: "button",
                            children: /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center",
                              children: [team.id == ((_a2 = page.props.auth.user) == null ? void 0 : _a2.current_team_id) && /* @__PURE__ */ jsx("svg", {
                                className: "mr-2 h-5 w-5 text-green-400",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /* @__PURE__ */ jsx("path", {
                                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              }), /* @__PURE__ */ jsx("div", {
                                children: team.name
                              })]
                            })
                          })
                        }, team.id);
                      })]
                    }) : null
                  })
                }) : null
              }), /* @__PURE__ */ jsx("div", {
                className: "ml-3 relative",
                children: /* @__PURE__ */ jsxs(Dropdown, {
                  align: "right",
                  width: "48",
                  renderTrigger: () => {
                    var _a2, _b2, _c2;
                    return page.props.jetstream.managesProfilePhotos ? /* @__PURE__ */ jsx("button", {
                      className: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition",
                      children: /* @__PURE__ */ jsx("img", {
                        className: "h-8 w-8 rounded-full object-cover",
                        src: (_a2 = page.props.auth.user) == null ? void 0 : _a2.profile_photo_url,
                        alt: (_b2 = page.props.auth.user) == null ? void 0 : _b2.name
                      })
                    }) : /* @__PURE__ */ jsx("span", {
                      className: "inline-flex rounded-md",
                      children: /* @__PURE__ */ jsxs("button", {
                        type: "button",
                        className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150",
                        children: [(_c2 = page.props.auth.user) == null ? void 0 : _c2.name, /* @__PURE__ */ jsx("svg", {
                          className: "ml-2 -mr-0.5 h-4 w-4",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: /* @__PURE__ */ jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                          })
                        })]
                      })
                    });
                  },
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "block px-4 py-2 text-xs text-gray-400",
                    children: "Manage Account"
                  }), /* @__PURE__ */ jsx(DropdownLink, {
                    href: route("profile.show"),
                    children: "Profile"
                  }), page.props.jetstream.hasApiFeatures ? /* @__PURE__ */ jsx(DropdownLink, {
                    href: route("api-tokens.index"),
                    children: "API Tokens"
                  }) : null, /* @__PURE__ */ jsx("div", {
                    className: "border-t border-gray-200 dark:border-gray-600"
                  }), /* @__PURE__ */ jsx("form", {
                    onSubmit: logout,
                    children: /* @__PURE__ */ jsx(DropdownLink, {
                      as: "button",
                      children: "Log Out"
                    })
                  })]
                })
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "-mr-2 flex items-center sm:hidden",
              children: /* @__PURE__ */ jsx("button", {
                onClick: () => setShowingNavigationDropdown(!showingNavigationDropdown),
                className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",
                children: /* @__PURE__ */ jsxs("svg", {
                  className: "h-6 w-6",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [/* @__PURE__ */ jsx("path", {
                    className: classNames({
                      hidden: showingNavigationDropdown,
                      "inline-flex": !showingNavigationDropdown
                    }),
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                  }), /* @__PURE__ */ jsx("path", {
                    className: classNames({
                      hidden: !showingNavigationDropdown,
                      "inline-flex": showingNavigationDropdown
                    }),
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })]
                })
              })
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: classNames("sm:hidden", {
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown
          }),
          children: [/* @__PURE__ */ jsx("div", {
            className: "pt-2 pb-3 space-y-1",
            children: /* @__PURE__ */ jsx(ResponsiveNavLink, {
              href: route("dashboard"),
              active: route().current("dashboard"),
              children: "Dashboard"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-center px-4",
              children: [page.props.jetstream.managesProfilePhotos ? /* @__PURE__ */ jsx("div", {
                className: "flex-shrink-0 mr-3",
                children: /* @__PURE__ */ jsx("img", {
                  className: "h-10 w-10 rounded-full object-cover",
                  src: (_e = page.props.auth.user) == null ? void 0 : _e.profile_photo_url,
                  alt: (_f = page.props.auth.user) == null ? void 0 : _f.name
                })
              }) : null, /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "font-medium text-base text-gray-800 dark:text-gray-200",
                  children: (_g = page.props.auth.user) == null ? void 0 : _g.name
                }), /* @__PURE__ */ jsx("div", {
                  className: "font-medium text-sm text-gray-500",
                  children: (_h = page.props.auth.user) == null ? void 0 : _h.email
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-3 space-y-1",
              children: [/* @__PURE__ */ jsx(ResponsiveNavLink, {
                href: route("profile.show"),
                active: route().current("profile.show"),
                children: "Profile"
              }), page.props.jetstream.hasApiFeatures ? /* @__PURE__ */ jsx(ResponsiveNavLink, {
                href: route("api-tokens.index"),
                active: route().current("api-tokens.index"),
                children: "API Tokens"
              }) : null, /* @__PURE__ */ jsx("form", {
                method: "POST",
                onSubmit: logout,
                children: /* @__PURE__ */ jsx(ResponsiveNavLink, {
                  as: "button",
                  children: "Log Out"
                })
              }), page.props.jetstream.hasTeamFeatures ? /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "border-t border-gray-200 dark:border-gray-600"
                }), /* @__PURE__ */ jsx("div", {
                  className: "block px-4 py-2 text-xs text-gray-400",
                  children: "Manage Team"
                }), /* @__PURE__ */ jsx(ResponsiveNavLink, {
                  href: route("teams.show", [(_i = page.props.auth.user) == null ? void 0 : _i.current_team]),
                  active: route().current("teams.show"),
                  children: "Team Settings"
                }), page.props.jetstream.canCreateTeams ? /* @__PURE__ */ jsx(ResponsiveNavLink, {
                  href: route("teams.create"),
                  active: route().current("teams.create"),
                  children: "Create New Classroom"
                }) : null, /* @__PURE__ */ jsx("div", {
                  className: "border-t border-gray-200 dark:border-gray-600"
                }), /* @__PURE__ */ jsx("div", {
                  className: "block px-4 py-2 text-xs text-gray-400",
                  children: "Switch Teams"
                }), (_k = (_j = page.props.auth.user) == null ? void 0 : _j.all_teams) == null ? void 0 : _k.map((team) => {
                  var _a2;
                  return /* @__PURE__ */ jsx("form", {
                    onSubmit: (e) => switchToTeam(e, team),
                    children: /* @__PURE__ */ jsx(ResponsiveNavLink, {
                      as: "button",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "flex items-center",
                        children: [team.id == ((_a2 = page.props.auth.user) == null ? void 0 : _a2.current_team_id) && /* @__PURE__ */ jsx("svg", {
                          className: "mr-2 h-5 w-5 text-green-400",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: /* @__PURE__ */ jsx("path", {
                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        }), /* @__PURE__ */ jsx("div", {
                          children: team.name
                        })]
                      })
                    })
                  }, team.id);
                })]
              }) : null]
            })]
          })]
        })]
      }), renderHeader ? /* @__PURE__ */ jsx("header", {
        children: /* @__PURE__ */ jsx("div", {
          className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",
          children: renderHeader()
        })
      }) : null, /* @__PURE__ */ jsxs("main", {
        className: "md:mx-0 mx-4 relative min-h-full",
        children: [children, ((_l = page.props.auth.user) == null ? void 0 : _l.current_instance) && /* @__PURE__ */ jsx("div", {
          className: "absolute top-5 right-5",
          children: /* @__PURE__ */ jsx(Link, {
            href: route("exam.current", {
              page: 1
            }),
            children: /* @__PURE__ */ jsx(Card, {
              className: " max-w-[300px] w-[300px]",
              children: /* @__PURE__ */ jsxs(CardBody, {
                className: "p-4 flex items-center gap-4",
                children: [/* @__PURE__ */ jsx(Spinner, {}), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx(Typography, {
                    variant: "small",
                    className: "flex items-center gap-3",
                    children: "You are currently taking:"
                  }), /* @__PURE__ */ jsx(Typography, {
                    variant: "h6",
                    children: (_m = page.props.auth.user) == null ? void 0 : _m.current_instance.exam.name
                  })]
                })]
              })
            })
          })
        })]
      })]
    })]
  });
}
export {
  AppLayout as A,
  NavLink as N
};
