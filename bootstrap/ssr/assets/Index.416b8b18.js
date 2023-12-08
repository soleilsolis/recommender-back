import { u as useRoute, j as jsx, a as jsxs } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { Card, CardHeader, Typography, Button, Input, CardBody, Tooltip, IconButton, CardFooter } from "@material-tailwind/react";
import { A as AppLayout } from "./AppLayout.e470f6cc.js";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusIcon, PencilIcon } from "@heroicons/react/24/solid";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "@inertiajs/core";
import "classnames";
import "@headlessui/react";
function ExamTypes({
  examType
}) {
  useRoute();
  useTypedPage();
  const TABLE_HEAD = ["Name", "Actions"];
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Exam Types",
    children: /* @__PURE__ */ jsx("div", {
      className: "py-12",
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsx("div", {
          className: "bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg",
          children: /* @__PURE__ */ jsxs(Card, {
            className: "h-full w-full",
            children: [/* @__PURE__ */ jsxs(CardHeader, {
              floated: false,
              shadow: false,
              className: "rounded-none",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "mb-8 flex items-center justify-between gap-8",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx(Typography, {
                    variant: "h5",
                    color: "blue-gray",
                    children: "Exam Types"
                  }), /* @__PURE__ */ jsx(Typography, {
                    color: "gray",
                    className: "mt-1 font-normal",
                    children: "See information about all exam types"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex shrink-0 flex-col gap-2 sm:flex-row",
                  children: [/* @__PURE__ */ jsx(Button, {
                    variant: "outlined",
                    size: "sm",
                    children: "view all"
                  }), /* @__PURE__ */ jsxs(Button, {
                    className: "flex items-center gap-3",
                    size: "sm",
                    children: [/* @__PURE__ */ jsx(PlusIcon, {
                      strokeWidth: 2,
                      className: "h-4 w-4"
                    }), " ", "Add Exam Type"]
                  })]
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "flex flex-col items-center justify-between gap-4 md:flex-row",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-full md:w-72",
                  children: /* @__PURE__ */ jsx(Input, {
                    label: "Search",
                    icon: /* @__PURE__ */ jsx(MagnifyingGlassIcon, {
                      className: "h-5 w-5"
                    }),
                    crossOrigin: void 0
                  })
                })
              })]
            }), /* @__PURE__ */ jsx(CardBody, {
              className: "overflow-scroll px-0",
              children: /* @__PURE__ */ jsxs("table", {
                className: "mt-4 w-full min-w-max table-auto text-left",
                children: [/* @__PURE__ */ jsx("thead", {
                  children: /* @__PURE__ */ jsx("tr", {
                    children: TABLE_HEAD.map((head) => /* @__PURE__ */ jsx("th", {
                      className: "border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",
                      children: /* @__PURE__ */ jsx(Typography, {
                        variant: "small",
                        color: "blue-gray",
                        className: "font-normal leading-none opacity-70",
                        children: head
                      })
                    }, head))
                  })
                }), /* @__PURE__ */ jsx("tbody", {
                  children: examType.map(({
                    name
                  }, index) => {
                    const isLast = index === examType.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                    return /* @__PURE__ */ jsxs("tr", {
                      children: [/* @__PURE__ */ jsx("td", {
                        className: classes,
                        children: /* @__PURE__ */ jsx(Typography, {
                          variant: "small",
                          color: "blue-gray",
                          className: "font-normal",
                          children: name
                        })
                      }), /* @__PURE__ */ jsx("td", {
                        className: classes,
                        children: /* @__PURE__ */ jsx(Tooltip, {
                          content: "Edit User",
                          children: /* @__PURE__ */ jsx(IconButton, {
                            variant: "text",
                            children: /* @__PURE__ */ jsx(PencilIcon, {
                              className: "h-4 w-4"
                            })
                          })
                        })
                      })]
                    }, name);
                  })
                })]
              })
            }), /* @__PURE__ */ jsxs(CardFooter, {
              className: "flex items-center justify-between border-t border-blue-gray-50 p-4",
              children: [/* @__PURE__ */ jsx(Typography, {
                variant: "small",
                color: "blue-gray",
                className: "font-normal",
                children: "Page 1 of 10"
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex gap-2",
                children: [/* @__PURE__ */ jsx(Button, {
                  variant: "outlined",
                  size: "sm",
                  children: "Previous"
                }), /* @__PURE__ */ jsx(Button, {
                  variant: "outlined",
                  size: "sm",
                  children: "Next"
                })]
              })]
            })]
          })
        })
      })
    })
  });
}
export {
  ExamTypes as default
};
