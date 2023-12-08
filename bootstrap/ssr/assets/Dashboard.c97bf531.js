import { A as AppLayout } from "./AppLayout.575130b7.js";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { j as jsx, a as jsxs } from "../ssr.js";
import "@inertiajs/core";
import "@inertiajs/react";
import "classnames";
import "react";
import "@headlessui/react";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Student Passing Rate"
    }
  }
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [{
    label: "Failed",
    data: labels.map(() => faker.datatype.number({
      min: 0,
      max: 1e3
    })),
    backgroundColor: "rgba(255, 99, 132, 0.5)"
  }, {
    label: "Passed",
    data: labels.map(() => faker.datatype.number({
      min: 0,
      max: 1e3
    })),
    backgroundColor: "rgba(53, 162, 235, 0.5)"
  }]
};
function Dashboard() {
  const page = useTypedPage();
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
                children: "20"
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
                children: "5"
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
                children: "200"
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
                children: "500"
              }), /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                children: "Recommendations"
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
  data,
  Dashboard as default,
  options
};
