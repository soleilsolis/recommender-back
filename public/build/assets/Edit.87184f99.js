import m from"./EditExamForm.1b7c706c.js";import{A as d}from"./AppLayout.a453a10d.js";import s from"./AddCategoriesForm.565d4050.js";import{j as r,a as e,e as o,d as i}from"./app.a00b638a.js";import{H as l}from"./HomeIcon.d66d370f.js";import"./useTypedPage.8cdc170e.js";import"./ActionMessage.7fb09642.js";import"./transition.da701523.js";import"./FormSection.0659d710.js";import"./SectionTitle.13e2f5b2.js";import"./InputError.3017abc6.js";import"./InputLabel.f7f1a4d0.js";import"./PrimaryButton.2164bc4f.js";import"./moment.9709ab41.js";function w({examTypes:t,exam:a}){return r(d,{title:"Edit Exam",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Edit Exam Details"}),children:e("div",{children:[e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[e(o.Breadcrumbs,{className:"mb-5",children:[r(i,{href:"/dashboard",className:"opacity-60",children:r(l,{className:"h-4 w-4"})}),r(i,{href:"/exams",className:"opacity-60",children:r("span",{children:"Exams"})}),r(i,{href:`/exam/${a.id}`,children:r("span",{children:a.id})}),r(i,{href:"#",children:"Edit"})]}),r(m,{examTypes:t,exam:a})]}),r("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:r(s,{exam:a})})]})})}export{w as default};