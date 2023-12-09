import { A as AppLayout } from "./AppLayout.31725274.js";
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
  examsCreated,
  failedAttempts,
  examsTaken,
  students,
  exams
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
        text: "Student Passing Rate for the past 5 Exams"
      }
    }
  };
  const labels = exams.reverse().slice(exams.length - 5).map((exam) => exam.name);
  const data = {
    labels,
    datasets: [{
      label: "Failed",
      data: exams.reverse().slice(exams.length - 5).map((exam) => exam.failed),
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
      label: "Passed",
      data: exams.reverse().slice(exams.length - 5).map((exam) => exam.passed),
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
                children: students
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                children: "Students"
              })]
            })
          }), /* @__PURE__ */ jsx(Card, {
            children: /* @__PURE__ */ jsxs(CardBody, {
              children: [/* @__PURE__ */ jsx(Typography, {
                variant: "h3",
                color: "black",
                children: examsCreated
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                children: "Exams"
              })]
            })
          }), /* @__PURE__ */ jsx(Card, {
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
                children: failedAttempts
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                children: "Failed Attempts"
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
