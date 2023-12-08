import{u,W as v,a as r,F as g,j as t,c as h,e as i}from"./app.a00b638a.js";import{u as N}from"./useTypedPage.8cdc170e.js";import{A as f}from"./ActionMessage.7fb09642.js";import{F as y}from"./FormSection.0659d710.js";import{I as o}from"./InputError.3017abc6.js";import{I as n}from"./InputLabel.f7f1a4d0.js";import{P as x}from"./PrimaryButton.2164bc4f.js";import{h as l}from"./moment.9709ab41.js";import"./transition.da701523.js";import"./SectionTitle.13e2f5b2.js";function A({examTypes:c,exam:s}){const d=u();N();const e=v({id:s.id,name:s.name,exam_type_id:s.exam_type_id,description:s.description,date:l(s.expires_at).format("YYYY-MM-DD"),time:l(s.expires_at).format("HH:mm"),attempts:s.attempts,limit:s.limit});function p(){e.put(d("exam.update",{id:s.id}),{errorBag:"editExam",preserveScroll:!0})}return r(y,{onSubmit:p,title:"Exam Details",description:"Edit Exam",renderActions:()=>r(g,{children:[t(f,{on:e.recentlySuccessful,className:"mr-3",children:"Saved."}),t(x,{className:h({"opacity-25":e.processing}),disabled:e.processing,children:"Save"})]}),children:[r("div",{className:"col-span-6 sm:col-span-4",children:[t(n,{htmlFor:"name",value:"Name"}),t(i.Input,{id:"name",type:"text",value:e.data.name,onChange:a=>e.setData("name",a.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),t(o,{message:e.errors.name,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4 mt-2",children:[t(n,{htmlFor:"exam_type_id",value:"Exam Type"}),t(i.Select,{id:"exam_type_id",value:s.exam_type_id,onChange:a=>e.setData("exam_type_id",a),children:c.map(({id:a,name:m})=>t(i.Option,{value:a,children:m},a))}),t(o,{message:e.errors.exam_type_id,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[t(n,{htmlFor:"date",value:"Number of Attempts"}),t(i.Input,{id:"attempts",type:"text",value:e.data.attempts,onChange:a=>e.setData("attempts",a.currentTarget.value),crossOrigin:void 0,onInput:a=>{let m=a.currentTarget.value.match(/^[0-9]{1,10}/g);e.setData("attempts",m[0]),a.currentTarget.value=m[0]}}),t(o,{message:e.errors.attempts,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[t(n,{htmlFor:"limit",value:"Time Limit  (Minutes)"}),t(i.Input,{id:"limit",type:"text",value:e.data.limit,crossOrigin:void 0,onInput:a=>{let m=a.currentTarget.value.match(/^[0-9]{0,10}/g);e.setData("limit",m[0]),a.currentTarget.value=m[0]}}),t(o,{message:e.errors.limit,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[t(n,{htmlFor:"description",value:"Description"}),t(i.Textarea,{id:"description",value:e.data.description,onChange:a=>e.setData("description",a.currentTarget.value)}),t(o,{message:e.errors.description,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[t(n,{htmlFor:"date",value:"Date (Deadline)"}),t(i.Input,{id:"date",type:"date",defaultValue:e.data.date,onChange:a=>e.setData("date",a.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),t(o,{message:e.errors.date,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[t(n,{htmlFor:"date",value:"Time (Deadline)"}),t(i.Input,{id:"time",type:"time",value:e.data.time,onChange:a=>e.setData("time",a.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),t(o,{message:e.errors.time,className:"mt-2"})]})]})}export{A as default};
