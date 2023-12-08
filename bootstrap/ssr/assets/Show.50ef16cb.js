import { useForm, Link } from "@inertiajs/react";
import { useState } from "react";
import { u as useRoute, a as jsxs, j as jsx } from "../ssr.js";
import { u as useTypedPage } from "./useTypedPage.7ef925b5.js";
import { Breadcrumbs, Typography, Button, Card, CardBody, IconButton, Textarea, Input, Select, Option, Radio, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction } from "@material-tailwind/react";
import { A as AppLayout } from "./AppLayout.575130b7.js";
import { HomeIcon, TrashIcon, PencilIcon, ClipboardDocumentListIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import "react-dom/server";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
import "@inertiajs/core";
import "classnames";
import "@headlessui/react";
function Show({
  exam
}) {
  const route = useRoute();
  useTypedPage();
  const [categories, setCategories] = useState(exam.categories);
  const blankAnswer = {
    id: null,
    value: "Correct Answer",
    correct: 1
  };
  const blankAnswerIncorrect = {
    id: null,
    value: "Correct Answer",
    correct: 0
  };
  const blankQuestion = {
    id: null,
    value: "",
    category_id: categories.length > 0 ? categories[0].id : null,
    exam_id: exam.id,
    type: "Multiple Choice",
    answers: [blankAnswer]
  };
  const [questions, setQuestions] = useState(exam.questions.length === 0 ? [blankQuestion] : exam.questions);
  const types = ["Multiple Choice", "True or False", "Written"];
  const [x, xxx] = useState(1);
  const form = useForm({
    questions,
    deleteQuestions: new Array(),
    deleteAnswers: new Array(),
    exam_id: exam.id
  });
  const createQuestion = () => {
    form.post(route("question.store"), {
      errorBag: "createQuestion",
      preserveScroll: true
    });
  };
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
            href: "/exams",
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
        }), /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(Link, {
            href: `/exam/edit/${exam.id}`,
            children: /* @__PURE__ */ jsx(Button, {
              size: "sm",
              children: "Edit"
            })
          }), /* @__PURE__ */ jsx(Link, {
            href: route("instances.index", {
              exam_id: exam.id
            }),
            children: /* @__PURE__ */ jsx(Button, {
              size: "sm",
              className: "ml-2",
              children: "View Submissions"
            })
          })]
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx(Typography, {
          variant: "h4",
          color: "blue-gray",
          children: "Questions"
        }), categories.length > 0 ? questions.map(({
          id,
          value,
          category_id,
          type,
          worth,
          answers
        }, index) => /* @__PURE__ */ jsxs("div", {
          className: "my-6 grid lg:grid-cols-5 grid-cols-1 md:gap-4 gap-y-4",
          children: [/* @__PURE__ */ jsx(Card, {
            className: "col-span-3",
            children: /* @__PURE__ */ jsx(CardBody, {
              children: /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-12 gap-5",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "col-span-12 flex items-center justify-between",
                  children: /* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx(IconButton, {
                      variant: "text",
                      color: "green",
                      className: "rounded-full",
                      onClick: () => {
                        questions.push(blankQuestion), xxx(x + 1);
                      },
                      children: /* @__PURE__ */ jsx(PlusIcon, {
                        className: "w-5 h-5"
                      })
                    }), /* @__PURE__ */ jsx(IconButton, {
                      variant: "text",
                      color: "red",
                      className: "rounded-full",
                      disabled: questions.length === 1,
                      onClick: (event) => {
                        delete questions[index];
                        form.data.deleteQuestions.push(id);
                        xxx(x + 1);
                      },
                      children: /* @__PURE__ */ jsx(TrashIcon, {
                        className: "w-5 h-5"
                      })
                    })]
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "col-span-12",
                  children: [/* @__PURE__ */ jsx(Textarea, {
                    className: "h-full",
                    label: "Question",
                    onChange: (event) => questions[index]["value"] = event.currentTarget.value,
                    children: value
                  }), /* @__PURE__ */ jsx("div", {
                    className: "mt-5",
                    children: /* @__PURE__ */ jsx(Input, {
                      label: "Worth (Points)",
                      value: worth,
                      onInput: (e) => {
                        let text = e.currentTarget.value.match(/^[0-9]{0,4}/g);
                        questions[index]["worth"] = text[0];
                        xxx(x + 1);
                      }
                    })
                  }), /* @__PURE__ */ jsx("div", {
                    className: "mt-5",
                    children: /* @__PURE__ */ jsx(Select, {
                      label: "Subject",
                      value: category_id,
                      onChange: (event) => {
                        questions[index]["category_id"] = event;
                        xxx(x + 1);
                      },
                      children: categories.map((category) => /* @__PURE__ */ jsx(Option, {
                        value: category.id,
                        children: category.name
                      }))
                    })
                  }), /* @__PURE__ */ jsx("div", {
                    className: "mt-5",
                    children: /* @__PURE__ */ jsx(Select, {
                      label: "Answer Type",
                      value: type,
                      onChange: (event) => {
                        questions[index]["type"] = event;
                        questions[index]["answers"] = [];
                        if (questions[index]["type"] !== "Written") {
                          questions[index]["answers"].push(blankAnswer);
                        }
                        xxx(x + 1);
                      },
                      children: types.map((type2) => /* @__PURE__ */ jsx(Option, {
                        value: type2,
                        children: type2
                      }))
                    })
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "md:col-span-3 col-span-12"
                })]
              })
            })
          }), /* @__PURE__ */ jsx(Card, {
            className: "col-span-2 p-0 overflow-y-scroll",
            children: /* @__PURE__ */ jsx(CardBody, {
              className: "h-[300px] ",
              children: /* @__PURE__ */ jsxs("table", {
                className: "w-full md:h-max mb-6 table-fixed border-separate border-spacing-y-2.5",
                children: [/* @__PURE__ */ jsx("thead", {
                  children: /* @__PURE__ */ jsxs("tr", {
                    children: [/* @__PURE__ */ jsx("th", {
                      className: "w-[20%]",
                      children: "Correct"
                    }), /* @__PURE__ */ jsx("th", {
                      className: "w-[60%]",
                      children: "Value"
                    }), /* @__PURE__ */ jsx("th", {
                      className: "w-[20%]",
                      children: /* @__PURE__ */ jsx(IconButton, {
                        variant: "text",
                        color: "green",
                        className: "rounded-full",
                        disabled: questions[index]["type"] === "Written",
                        onClick: () => {
                          questions[index]["answers"].push(blankAnswerIncorrect), xxx(x + 1);
                        },
                        children: /* @__PURE__ */ jsx(PlusIcon, {
                          className: "w-5 h-5"
                        })
                      })
                    })]
                  })
                }), /* @__PURE__ */ jsx("tbody", {
                  children: answers.map((answer, answerIndex) => /* @__PURE__ */ jsxs("tr", {
                    children: [/* @__PURE__ */ jsx("td", {
                      children: /* @__PURE__ */ jsx(Radio, {
                        crossOrigin: void 0,
                        name: "question" + index,
                        defaultChecked: answer.correct === 1 ? true : false,
                        onChange: (event) => {
                          answer.correct = !answer.correct;
                        }
                      })
                    }), /* @__PURE__ */ jsx("td", {
                      children: /* @__PURE__ */ jsx(Input, {
                        crossOrigin: void 0,
                        defaultValue: answer.value,
                        onChange: (event) => {
                          answer.value = event.currentTarget.value;
                        }
                      })
                    }), /* @__PURE__ */ jsx("td", {
                      className: "flex items-center justify-center",
                      children: /* @__PURE__ */ jsx(IconButton, {
                        variant: "text",
                        color: "red",
                        className: "rounded-full mx-auto",
                        disabled: questions[index]["type"] === "Written",
                        onClick: () => {
                          delete answers[answerIndex];
                          xxx(x + 1);
                        },
                        children: /* @__PURE__ */ jsx(TrashIcon, {
                          className: "w-5 h-5"
                        })
                      })
                    })]
                  }))
                })]
              })
            })
          })]
        })) : /* @__PURE__ */ jsxs(Typography, {
          variant: "lead",
          className: "mt-2",
          children: ["To add Questions, go to the", " ", /* @__PURE__ */ jsxs(Link, {
            className: "text-blue-500",
            href: `/exam/edit/${exam.id}#categories`,
            children: [" ", "Edit"]
          }), " ", "page to add ", /* @__PURE__ */ jsx("b", {
            children: "Categories"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "fixed bottom-10 right-10",
      children: /* @__PURE__ */ jsxs(SpeedDial, {
        children: [/* @__PURE__ */ jsx(SpeedDialHandler, {
          children: /* @__PURE__ */ jsx(IconButton, {
            size: "lg",
            className: "rounded-full",
            children: /* @__PURE__ */ jsx(PencilIcon, {
              className: "h-5 w-5 transition-transform group-hover:rotate-45"
            })
          })
        }), /* @__PURE__ */ jsxs(SpeedDialContent, {
          children: [/* @__PURE__ */ jsx(SpeedDialAction, {
            onClick: createQuestion,
            children: /* @__PURE__ */ jsx(ClipboardDocumentListIcon, {
              className: "h-5 w-5"
            })
          }), /* @__PURE__ */ jsx(SpeedDialAction, {
            children: /* @__PURE__ */ jsx(XMarkIcon, {
              className: "h-5 w-5"
            })
          })]
        })]
      })
    })]
  });
}
export {
  Show as default
};
