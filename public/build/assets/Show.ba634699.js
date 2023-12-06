import{r as i,a as n,j as e,u as I,W as S,e as a,d as h}from"./app.1d1a48de.js";import{u as T}from"./useTypedPage.4edb5dda.js";import{A as M}from"./AppLayout.1d890a30.js";import{H as $}from"./HomeIcon.4d526499.js";import{P as w}from"./PlusIcon.64b13dff.js";import"./transition.00116a8c.js";function H({title:r,titleId:t,...o},c){return n("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:c,"aria-labelledby":t},o),children:[r?e("title",{id:t,children:r}):null,e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"})]})}const R=i.exports.forwardRef(H),Q=R;function V({title:r,titleId:t,...o},c){return n("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:c,"aria-labelledby":t},o),children:[r?e("title",{id:t,children:r}):null,e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})]})}const z=i.exports.forwardRef(V),O=z;function D({title:r,titleId:t,...o},c){return n("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:c,"aria-labelledby":t},o),children:[r?e("title",{id:t,children:r}):null,e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})]})}const _=i.exports.forwardRef(D),b=_;function W({title:r,titleId:t,...o},c){return n("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:c,"aria-labelledby":t},o),children:[r?e("title",{id:t,children:r}):null,e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})]})}const q=i.exports.forwardRef(W),F=q;function Y({exam:r}){const t=I();T();const[o,c]=i.exports.useState(r.categories),N={id:null,value:"Correct Answer",correct:1},y={id:null,value:"Correct Answer",correct:0},g={id:null,value:"",category_id:o.length>0?o[0].id:null,exam_id:r.id,type:"Multiple Choice",answers:[N]},[s,P]=i.exports.useState(r.questions.length===0?[g]:r.questions),C=["Multiple Choice","True or False","Written"],[u,m]=i.exports.useState(1),f=S({questions:s,deleteQuestions:new Array,deleteAnswers:new Array,exam_id:r.id}),x=()=>{f.post(t("question.store"),{errorBag:"createQuestion",preserveScroll:!0})};return n(M,{title:`${r.name}`,children:[e("div",{className:"py-12",children:n("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[n(a.Breadcrumbs,{children:[e(h,{href:"/dashboard",className:"opacity-60",children:e($,{className:"h-4 w-4"})}),e(h,{href:"/exams",className:"opacity-60",children:e("span",{children:"Exams"})}),e(h,{href:`/exam/${r.id}`,children:e("span",{children:r.id})})]}),n(a.Typography,{variant:"h2",color:"blue-gray",children:[r.name," - (",r.attempts," Attempts)"," ",e(h,{href:`/exam/edit/${r.id}`,children:e(a.Button,{size:"sm",children:"Edit"})}),e(h,{href:t("instances.index",{exam_id:r.id}),children:e(a.Button,{size:"sm",children:"View Submissions"})})]}),n(a.Typography,{variant:"h6",color:"blue-gray",className:"my-2 flex items-center gap-2",children:[e("img",{className:"h-10 w-10 rounded-full object-cover",src:r.team.owner.profile_photo_url,alt:r.team.owner.name}),r.team.owner.name," - ",r.team.name]}),e("br",{}),e(a.Typography,{variant:"h4",color:"blue-gray",children:"Questions"}),o.length>0?s.map(({id:k,value:L,category_id:B,type:j,answers:p},d)=>n("div",{className:"my-6 grid lg:grid-cols-5 grid-cols-1 md:gap-4 gap-y-4",children:[e(a.Card,{className:"col-span-3",children:e(a.CardBody,{children:n("div",{className:"grid grid-cols-12 gap-5",children:[e("div",{className:"col-span-12 flex items-center justify-between",children:n("div",{children:[e(a.IconButton,{variant:"text",color:"green",className:"rounded-full",onClick:()=>{s.push(g),m(u+1)},children:e(w,{className:"w-5 h-5"})}),e(a.IconButton,{variant:"text",color:"red",className:"rounded-full",disabled:s.length===1,onClick:l=>{delete s[d],f.data.deleteQuestions.push(k),m(u+1)},children:e(b,{className:"w-5 h-5"})})]})}),n("div",{className:"col-span-12",children:[e(a.Textarea,{className:"h-full",label:"Question",onChange:l=>s[d].value=l.currentTarget.value,children:L}),e("div",{className:"mt-5",children:e(a.Select,{label:"Category",value:B,onChange:l=>{s[d].category_id=l,m(u+1)},children:o.map(l=>e(a.Option,{value:l.id,children:l.name}))})}),e("div",{className:"mt-5",children:e(a.Select,{label:"Answer Type",value:j,onChange:l=>s[d].type=l,children:C.map(l=>e(a.Option,{value:l,children:l}))})})]}),e("div",{className:"md:col-span-3 col-span-12"})]})})}),e(a.Card,{className:"col-span-2 p-0 overflow-y-scroll",children:e(a.CardBody,{className:"h-[300px] ",children:n("table",{className:"w-full md:h-max mb-6 table-fixed border-separate border-spacing-y-2.5",children:[e("thead",{children:n("tr",{children:[e("th",{className:"w-[20%]",children:"Correct"}),e("th",{className:"w-[60%]",children:"Value"}),e("th",{className:"w-[20%]",children:e(a.IconButton,{variant:"text",color:"green",className:"rounded-full",onClick:()=>{s[d].answers.push(y),m(u+1)},children:e(w,{className:"w-5 h-5"})})})]})}),e("tbody",{children:p.map((l,A)=>n("tr",{children:[e("td",{children:e(a.Radio,{crossOrigin:void 0,name:"question"+d,defaultChecked:l.correct===1,onChange:v=>{l.correct=!l.correct}})}),e("td",{children:e(a.Input,{crossOrigin:void 0,defaultValue:l.value,onChange:v=>{l.value=v.currentTarget.value}})}),e("td",{className:"flex items-center justify-center",children:e(a.IconButton,{variant:"text",color:"red",className:"rounded-full mx-auto",disabled:p.length===1,onClick:()=>{delete p[A],m(u+1)},children:e(b,{className:"w-5 h-5"})})})]}))})]})})})]})):n(a.Typography,{variant:"lead",className:"mt-2",children:["To add Questions, go to the"," ",n(h,{className:"text-blue-500",href:`/exam/edit/${r.id}#categories`,children:[" ","Edit"]})," ","page to add ",e("b",{children:"Categories"})]})]})}),e("div",{className:"fixed bottom-10 right-10",children:n(a.SpeedDial,{children:[e(a.SpeedDialHandler,{children:e(a.IconButton,{size:"lg",className:"rounded-full",children:e(O,{className:"h-5 w-5 transition-transform group-hover:rotate-45"})})}),n(a.SpeedDialContent,{children:[e(a.SpeedDialAction,{onClick:x,children:e(Q,{className:"h-5 w-5"})}),e(a.SpeedDialAction,{children:e(F,{className:"h-5 w-5"})})]})]})})]})}export{Y as default};
