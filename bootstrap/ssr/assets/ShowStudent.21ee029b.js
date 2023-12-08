import { Link } from "@inertiajs/react";
import { u as useRoute, j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { Breadcrumbs, Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { A as AppLayout } from "./AppLayout.575130b7.js";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import ReactHtmlParser from "react-html-parser";
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "ziggy-js";
import "react/jsx-runtime";
import "@inertiajs/core";
import "classnames";
import "@headlessui/react";
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
function ShowStudent({
  exam,
  score,
  total,
  radarMap,
  instances
}) {
  const route = useRoute();
  useTypedPage();
  const radarData = {
    labels: exam.categories.map((category) => category.name),
    datasets: [{
      label: "Categories",
      data: Object.values(radarMap).map((category) => {
        return category.correct / category.total * 100;
      }),
      backgroundColor: "rgba(0, 255, 0, 0.2)",
      borderColor: "#00B200",
      borderWidth: 1
    }]
  };
  const radarOptions = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };
  return /* @__PURE__ */ jsx(AppLayout, {
    title: `${exam.name}`,
    children: /* @__PURE__ */ jsx("div", {
      className: "py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
        children: [/* @__PURE__ */ jsxs(Breadcrumbs, {
          children: [/* @__PURE__ */ jsx(Link, {
            href: "/dashboard",
            className: "opacity-60",
            children: /* @__PURE__ */ jsx(HomeIcon, {
              className: "h-4 w-4"
            })
          }), /* @__PURE__ */ jsx(Link, {
            href: "/exams/student",
            className: "opacity-60",
            children: /* @__PURE__ */ jsx("span", {
              children: "Exams"
            })
          }), /* @__PURE__ */ jsx(Link, {
            href: `/exam/${exam.id}`,
            children: /* @__PURE__ */ jsx("span", {
              children: exam.id
            })
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-4 mt-6",
          children: /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx(Typography, {
              variant: "h2",
              color: "blue-gray",
              children: exam.name
            }), /* @__PURE__ */ jsxs(Typography, {
              variant: "h6",
              color: "blue-gray",
              className: "my-2 flex items-center gap-2",
              children: [/* @__PURE__ */ jsx("img", {
                className: "h-10 w-10 rounded-full object-cover",
                src: exam.team.owner.profile_photo_url,
                alt: exam.team.owner.name
              }), exam.team.owner.name, " - ", exam.team.name]
            })]
          })
        }), exam.attempts - exam.instances.length != 0 && /* @__PURE__ */ jsx(Link, {
          href: route("exam.take", {
            id: exam.id
          }),
          children: /* @__PURE__ */ jsxs(Button, {
            color: "green",
            size: "lg",
            className: "flex items-center gap-3 my-5",
            children: [/* @__PURE__ */ jsx(PlusIcon, {
              className: "h-5 w-5"
            }), " Take Exam"]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-y-2",
          children: [/* @__PURE__ */ jsx(Card, {
            className: " h-max my-5",
            children: /* @__PURE__ */ jsx(CardBody, {
              className: "h-max text-center",
              children: /* @__PURE__ */ jsxs(Typography, {
                variant: "h3",
                color: score / total * 100 < 50 ? "red" : "green",
                children: ["Score: ", score, " / ", total]
              })
            })
          }), /* @__PURE__ */ jsx(Card, {
            className: " h-max my-5",
            children: /* @__PURE__ */ jsx(CardBody, {
              className: "h-max text-center",
              children: /* @__PURE__ */ jsxs(Typography, {
                variant: "h3",
                color: "black",
                children: ["Attempts: ", exam.instances.length, " /", " ", exam.attempts]
              })
            })
          })]
        }), /* @__PURE__ */ jsx(Typography, {
          variant: "h3",
          className: "my-5 ",
          children: "Stats"
        }), /* @__PURE__ */ jsx(Card, {
          className: "mb-2",
          children: /* @__PURE__ */ jsxs(CardBody, {
            children: [/* @__PURE__ */ jsx(Typography, {
              variant: "h4",
              color: "black",
              className: "mb-6",
              children: "By Category"
            }), /* @__PURE__ */ jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-x-0 gap-y-6",
              children: [/* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsx("div", {
                  children: Object.values(radarMap).map((category, index) => {
                    return /* @__PURE__ */ jsx(Fragment, {
                      children: /* @__PURE__ */ jsxs(Typography, {
                        variant: "h5",
                        className: "mb-2",
                        color: category.correct / category.total * 100 < 50 ? "red" : "black",
                        children: [Object.keys(radarMap)[index], " ", ": ", category.correct, " /", category.total]
                      })
                    });
                  })
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsx(Radar, {
                  data: radarData,
                  options: radarOptions
                })
              })]
            })]
          })
        }), /* @__PURE__ */ jsx(Typography, {
          variant: "h3",
          color: "black",
          className: "my-5",
          children: "Recommendations"
        }), /* @__PURE__ */ jsx(Card, {
          className: "my-5",
          children: /* @__PURE__ */ jsxs(CardBody, {
            children: [instances.length > 0 && instances.reverse().map((instance, index) => /* @__PURE__ */ jsxs(Fragment, {
              children: [/* @__PURE__ */ jsxs(Typography, {
                variant: "h4",
                color: "black",
                className: "mb-6",
                children: ["Attempt #", index + 1]
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "lead",
                color: "black",
                className: "mb-6 whitespace-pre-line",
                children: ReactHtmlParser(instance.recommendation_auto)
              })]
            })), " "]
          })
        })]
      })
    })
  });
}
export {
  ShowStudent as default
};
