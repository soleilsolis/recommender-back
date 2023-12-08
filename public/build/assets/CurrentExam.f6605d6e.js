import{u as v,r as c,W as f,a as r,j as e,e as a,d as h,F as m}from"./app.a00b638a.js";import{u as b}from"./useTypedPage.8cdc170e.js";import{A as x}from"./AppLayout.a453a10d.js";import{H as N}from"./HomeIcon.d66d370f.js";import"./transition.da701523.js";import"./moment.9709ab41.js";function j({exam:n,question:t,instance:C,instanceAnswers:i}){const s=v();b();const[u,_]=c.exports.useState(),[p,g]=c.exports.useState(!1);c.exports.useState();const d=()=>g(!p),l=f({answer_id:u,question_id:t.data[0].id,url:"",page:"",value:"",instance_answer_id:i[0]!=null?i[0].id:null}),y=()=>{l.post(s("exam.finish"),{errorBag:"finishExam",preserveScroll:!0})};return r(x,{title:`${n.name}`,children:[e("div",{className:"py-12",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[r(a.Breadcrumbs,{children:[e(h,{href:"/dashboard",className:"opacity-60",children:e(N,{className:"h-4 w-4"})}),e(h,{href:"/exams/student",className:"opacity-60",children:e("span",{children:"Exams"})}),e(h,{href:`/exam/student/${n.id}`,className:"opacity-60",children:e("span",{children:n.id})}),e("span",{children:"Current"})]}),r(a.Typography,{variant:"h2",color:"blue-gray",children:[n.name," - (",n.attempts," Attempts)"," "]}),r(a.Typography,{variant:"h6",color:"blue-gray",className:"my-2 flex items-center gap-2",children:[e("img",{className:"h-10 w-10 rounded-full object-cover",src:n.team.owner.profile_photo_url,alt:n.team.owner.name}),n.team.owner.name," - ",n.team.name]}),e("br",{}),e(a.Button,{color:"green",className:"flex items-center gap-3",onClick:d,children:"Finish Exam"}),e("br",{}),r(a.Card,{children:[r(a.CardBody,{children:[r("div",{className:"flex items-start justify-between mb-5",children:[r(a.Typography,{variant:"h4",color:"black",children:["Question ",t.current_page]}),i[0]!=null||i[0]!=null?e(a.Typography,{variant:"h4",color:"green",className:"font-bold",children:"Answered"}):e(a.Typography,{variant:"h4",color:"gray",className:"font-bold",children:"Unanswered"})]}),e(a.Typography,{variant:"h3",color:"black",className:"mb-5",children:t.data[0].value}),e(a.Card,{shadow:!1,className:"border-2 border-gray-500 p-2",children:r(a.CardBody,{children:[t.data[0].answers.map(o=>e(m,{children:t.data[0].type==="Multiple Choice"&&r(m,{children:[e(a.Radio,{crossOrigin:void 0,name:"instanceAnswer",defaultChecked:i[0]!=null?i[0].answer_id==o.id:!1,label:e(a.Typography,{variant:"lead",className:"font-medium",children:o.value}),className:"block",onChange:()=>{l.data.answer_id=o.id,l.data.question_id=o.question.id,l.post(s("instanceAnswer.store"),{errorBag:"submitAnswer",preserveScroll:!0})}},o.id),e("br",{})]})})),t.data[0].type==="Written"&&e(a.Textarea,{label:"Answer",onChange:o=>{l.data.value=o.currentTarget.value},children:l.data.value})]})})]}),r(a.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[t.prev_page_url?e(a.Button,{variant:"outlined",size:"sm",onClick:()=>{l.data.url=t.prev_page_url,l.post(s("instanceAnswer.store"),{errorBag:"submitAnswer",preserveScroll:!0})},children:"Previous"}):e("span",{}),t.next_page_url&&e(a.Button,{variant:"outlined",size:"sm",onClick:()=>{l.data.url=t.next_page_url,l.post(s("instanceAnswer.store"),{errorBag:"submitAnswer",preserveScroll:!0})},children:"Next"})]})]})]})}),r(a.Dialog,{open:p,handler:d,children:[e(a.DialogHeader,{children:"Finish Exam"}),e(a.DialogBody,{children:e(a.Typography,{variant:"h3",color:"red",children:"Are you sure? You cannot retake this exam if you exhausted all attempts!"})}),r(a.DialogFooter,{children:[e(a.Button,{variant:"text",onClick:d,className:"mr-1",children:e("span",{onClick:d,children:"Cancel"})}),e(a.Button,{variant:"gradient",color:"red",onClick:y,children:e("span",{children:"Confirm"})})]})]})]})}export{j as default};
