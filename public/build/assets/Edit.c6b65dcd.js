import m from"./EditExamForm.748f772a.js";import{A as d}from"./AppLayout.03e7f103.js";import s from"./AddCategoriesForm.e6724b03.js";import{j as r,a as e,h as o,d as i}from"./app.387ff022.js";import{H as l}from"./HomeIcon.4900251a.js";import"./useTypedPage.f6e46de8.js";import"./ActionMessage.e8e99e97.js";import"./transition.93e298a0.js";import"./FormSection.3a29e90a.js";import"./SectionTitle.f2657ea8.js";import"./InputError.fdf33903.js";import"./InputLabel.8f86b734.js";import"./PrimaryButton.3259b127.js";function v({examTypes:t,exam:a}){return r(d,{title:"Edit Exam",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Edit Exam Details"}),children:e("div",{children:[e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[e(o.Breadcrumbs,{className:"mb-5",children:[r(i,{href:"/dashboard",className:"opacity-60",children:r(l,{className:"h-4 w-4"})}),r(i,{href:"/exams",className:"opacity-60",children:r("span",{children:"Exams"})}),r(i,{href:`/exam/${a.id}`,children:r("span",{children:a.id})}),r(i,{href:"#",children:"Edit"})]}),r(m,{examTypes:t,exam:a})]}),r("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:r(s,{exam:a})})]})})}export{v as default};