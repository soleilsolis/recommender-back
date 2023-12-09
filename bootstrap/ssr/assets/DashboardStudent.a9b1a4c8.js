import { A as AppLayout } from "./AppLayout.ee15cdfc.js";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { j as jsx, a as jsxs } from "../ssr.js";
import "@inertiajs/core";
import "@inertiajs/react";
import "classnames";
import "react";
import "@headlessui/react";
import "moment";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function Dashboard({
  examsTaken,
  passed,
  failed,
  instances
}) {
  const page = useTypedPage();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Wrong to Correct Answer Ratio on past 5 Exam Attempts"
      }
    }
  };
  const labels = instances.reverse().slice(instances.length - 5).map((instance) => instance.exam.name);
  const data = {
    labels,
    datasets: [{
      label: "Wrong",
      data: instances.reverse().slice(instances.length - 5).map((instance) => instance.total - instance.correct),
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
      label: "Correct",
      data: instances.reverse().slice(instances.length - 5).map((instance) => instance.correct),
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }]
  };
  return /* @__PURE__ */ jsx(AppLayout, {
    title: "Dashboard",
    renderHeader: () => {
      var _a;
      return /* @__PURE__ */ jsxs("h2", {
        className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
        children: ["Welcome, ", (_a = page.props.auth.user) == null ? void 0 : _a.name, "!"]
      });
    },
    children: /* @__PURE__ */ jsx("div", {
      className: "py-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
          children: [/* @__PURE__ */ jsx(Card, {
            children: /* @__PURE__ */ jsxs(CardBody, {
              children: [/* @__PURE__ */ jsx(Typography, {
                variant: "h3",
                color: "black",
                children: examsTaken
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                children: "Total Exams Taken"
              })]
            })
          }), /* @__PURE__ */ jsx(Card, {
            children: /* @__PURE__ */ jsxs(CardBody, {
              children: [/* @__PURE__ */ jsx(Typography, {
                variant: "h3",
                color: "black",
                children: passed
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                children: "Exams Passed"
              })]
            })
          }), /* @__PURE__ */ jsx(Card, {
            children: /* @__PURE__ */ jsxs(CardBody, {
              children: [/* @__PURE__ */ jsx(Typography, {
                variant: "h3",
                color: "black",
                children: failed
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                children: "Exams Failed"
              })]
            })
          })]
        }), /* @__PURE__ */ jsx(Bar, {
          className: "my-5",
          options,
          data
        }), ";"]
      })
    })
  });
}
export {
  Dashboard as default
};
