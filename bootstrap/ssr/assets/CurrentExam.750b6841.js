import { useForm, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { u as useRoute, a as jsxs, j as jsx, F as Fragment } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { Breadcrumbs, Typography, Button, Card, CardBody, Radio, Textarea, CardFooter, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { A as AppLayout } from "./AppLayout.acdc7158.js";
import { HomeIcon } from "@heroicons/react/24/outline";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "@inertiajs/core";
import "classnames";
import "@headlessui/react";
import "moment";
function Show({
  exam,
  question,
  instance,
  instanceAnswers
}) {
  const route = useRoute();
  useTypedPage();
  const [answer_id, setAnswerId] = useState();
  const [open, setOpen] = useState(false);
  useState();
  const handleOpen = () => setOpen(!open);
  const form = useForm({
    answer_id,
    question_id: question.data[0].id,
    url: "",
    page: "",
    value: "",
    instance_answer_id: instanceAnswers[0] != void 0 ? instanceAnswers[0].id : null
  });
  const finishExam = () => {
    form.post(route("exam.finish"), {
      errorBag: "finishExam",
      preserveScroll: true
    });
  };
  useEffect(() => {
    form.data.value = instanceAnswers[0] != void 0 ? instanceAnswers[0].value : null;
  }, []);
  return /* @__PURE__ */ jsxs(AppLayout, {
    title: `${exam.name}`,
    children: [/* @__PURE__ */ jsx("div", {
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
            href: `/exam/student/${exam.id}`,
            className: "opacity-60",
            children: /* @__PURE__ */ jsx("span", {
              children: exam.id
            })
          }), /* @__PURE__ */ jsx("span", {
            children: "Current"
          })]
        }), /* @__PURE__ */ jsxs(Typography, {
          variant: "h2",
          color: "blue-gray",
          children: [exam.name, " - (", exam.attempts, " Attempts)", " "]
        }), /* @__PURE__ */ jsxs(Typography, {
          variant: "h6",
          color: "blue-gray",
          className: "my-2 flex items-center gap-2",
          children: [/* @__PURE__ */ jsx("img", {
            className: "h-10 w-10 rounded-full object-cover",
            src: exam.team.owner.profile_photo_url,
            alt: exam.team.owner.name
          }), exam.team.owner.name, " - ", exam.team.name]
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx(Button, {
          color: "green",
          className: "flex items-center gap-3",
          onClick: handleOpen,
          children: "Finish Exam"
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Card, {
          children: [/* @__PURE__ */ jsxs(CardBody, {
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-start justify-between mb-5",
              children: [/* @__PURE__ */ jsxs(Typography, {
                variant: "h4",
                color: "black",
                children: ["Question ", question.current_page]
              }), instanceAnswers[0] != null || instanceAnswers[0] != void 0 ? /* @__PURE__ */ jsx(Typography, {
                variant: "h4",
                color: "green",
                className: "font-bold",
                children: "Answered"
              }) : /* @__PURE__ */ jsx(Typography, {
                variant: "h4",
                color: "gray",
                className: "font-bold",
                children: "Unanswered"
              })]
            }), /* @__PURE__ */ jsx(Typography, {
              variant: "h3",
              color: "black",
              className: "mb-5",
              children: question.data[0].value
            }), /* @__PURE__ */ jsx(Card, {
              shadow: false,
              className: "border-2 border-gray-500 p-2",
              children: /* @__PURE__ */ jsxs(CardBody, {
                children: [question.data[0].answers.map((answer) => /* @__PURE__ */ jsx(Fragment, {
                  children: question.data[0].type === "Multiple Choice" && /* @__PURE__ */ jsxs(Fragment, {
                    children: [/* @__PURE__ */ jsx(Radio, {
                      crossOrigin: void 0,
                      name: "instanceAnswer",
                      defaultChecked: instanceAnswers[0] != void 0 ? instanceAnswers[0].answer_id == answer.id : false,
                      label: /* @__PURE__ */ jsx(Typography, {
                        variant: "lead",
                        className: "font-medium",
                        children: answer.value
                      }),
                      className: "block",
                      onChange: () => {
                        form.data.answer_id = answer.id;
                        form.data.question_id = answer.question.id;
                        form.post(route("instanceAnswer.store"), {
                          errorBag: "submitAnswer",
                          preserveScroll: true
                        });
                      }
                    }, answer.id), /* @__PURE__ */ jsx("br", {})]
                  })
                })), question.data[0].type === "Written" && /* @__PURE__ */ jsx(Textarea, {
                  label: "Answer",
                  onChange: (event) => {
                    form.data.value = event.currentTarget.value;
                  },
                  children: form.data.value
                })]
              })
            })]
          }), /* @__PURE__ */ jsxs(CardFooter, {
            className: "flex items-center justify-between border-t border-blue-gray-50 p-4",
            children: [question.prev_page_url ? /* @__PURE__ */ jsx(Button, {
              variant: "outlined",
              size: "sm",
              onClick: () => {
                form.data.url = question.prev_page_url;
                form.post(route("instanceAnswer.store"), {
                  errorBag: "submitAnswer",
                  preserveScroll: true
                });
              },
              children: "Previous"
            }) : /* @__PURE__ */ jsx("span", {}), question.next_page_url && /* @__PURE__ */ jsx(Button, {
              variant: "outlined",
              size: "sm",
              onClick: () => {
                form.data.url = question.next_page_url;
                form.post(route("instanceAnswer.store"), {
                  errorBag: "submitAnswer",
                  preserveScroll: true
                });
              },
              children: "Next"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsxs(Dialog, {
      open,
      handler: handleOpen,
      children: [/* @__PURE__ */ jsx(DialogHeader, {
        children: "Finish Exam"
      }), /* @__PURE__ */ jsx(DialogBody, {
        children: /* @__PURE__ */ jsx(Typography, {
          variant: "h3",
          color: "red",
          children: "Are you sure? You cannot retake this exam if you exhausted all attempts!"
        })
      }), /* @__PURE__ */ jsxs(DialogFooter, {
        children: [/* @__PURE__ */ jsx(Button, {
          variant: "text",
          onClick: handleOpen,
          className: "mr-1",
          children: /* @__PURE__ */ jsx("span", {
            onClick: handleOpen,
            children: "Cancel"
          })
        }), /* @__PURE__ */ jsx(Button, {
          variant: "gradient",
          color: "red",
          onClick: finishExam,
          children: /* @__PURE__ */ jsx("span", {
            children: "Confirm"
          })
        })]
      })]
    })]
  });
}
export {
  Show as default
};
