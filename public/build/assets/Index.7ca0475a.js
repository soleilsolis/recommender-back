import{u,j as e,a as r,e as a}from"./app.fb31f04e.js";import{u as f}from"./useTypedPage.c1d98290.js";import{A as y,N as t}from"./AppLayout.1efc3e4d.js";import{h as g}from"./moment.9709ab41.js";import{P as N}from"./PlusIcon.144a438d.js";import{M as x}from"./MagnifyingGlassIcon.f774a7f0.js";import{P as b}from"./PencilIcon.76ac3c7c.js";import"./transition.53ec94d6.js";function M({paginator:l}){const o=u();f();const i=["Name","Type","Attempts","Dealine","Actions"];return e(y,{title:"Exams",children:e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg",children:r(a.Card,{className:"h-full w-full",children:[r(a.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:[r("div",{className:"mb-8 flex items-center justify-between gap-8",children:[r("div",{children:[e(a.Typography,{variant:"h5",color:"blue-gray",children:"Exams"}),e(a.Typography,{color:"gray",className:"mt-1 font-normal",children:"See information about all exams"})]}),e("div",{className:"flex shrink-0 flex-col gap-2 sm:flex-row",children:e(t,{href:o("exam.create"),children:r(a.Button,{className:"flex items-center gap-3",size:"sm",children:[e(N,{strokeWidth:2,className:"h-4 w-4"})," ","Add Exam"]})})})]}),e("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:e("div",{className:"w-full md:w-72",children:e(a.Input,{label:"Search",icon:e(x,{className:"h-5 w-5"}),crossOrigin:void 0})})})]}),e(a.CardBody,{className:"overflow-scroll px-0",children:r("table",{className:"mt-4 w-full min-w-max table-auto text-left",children:[e("thead",{children:e("tr",{children:i.map(c=>e("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:e(a.Typography,{variant:"small",color:"blue-gray",className:"font-normal leading-none opacity-70",children:c})},c))})}),e("tbody",{children:l.data.map(({id:c,name:n,examType:d,attempts:m,expires_at:h},p)=>{const s=p===l.data.length-1?"p-4":"p-4 border-b border-blue-gray-50";return r("tr",{children:[e("td",{className:s,children:e(a.Typography,{variant:"small",color:"blue-gray",className:"font-bold",children:n})}),e("td",{className:s,children:e(a.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:d.name})}),e("td",{className:s,children:e(a.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:m})}),e("td",{className:s,children:e(a.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:g(h).format("MMMM Do YYYY, h:mm:ss a")})}),e("td",{className:s,children:e(t,{href:`/exam/${c}`,children:e(a.Tooltip,{content:"Edit Exam",children:e(a.IconButton,{variant:"text",children:e(b,{className:"h-4 w-4"})})})})})]},n)})})]})}),r(a.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[r(a.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:["Page ",l.current_page," of"," ",l.last_page]}),l.total>1&&r("div",{className:"flex gap-2",children:[l.current_page>1&&e(t,{href:`?page=${l.current_page-1}`,children:e(a.Button,{variant:"outlined",size:"sm",children:"Previous"})}),l.last_page>l.current_page&&e(t,{href:`?page=${l.current_page+1}`,children:e(a.Button,{variant:"outlined",size:"sm",children:"Next"})})]})]})]})})})})})}export{M as default};