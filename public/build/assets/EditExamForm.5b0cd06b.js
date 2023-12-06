import{u,W as v,a as r,F as g,j as a,c as h,h as i}from"./app.3630e11d.js";import{u as f}from"./useTypedPage.f7096180.js";import{A as N}from"./ActionMessage.f61ede8b.js";import{F as x}from"./FormSection.4f03a8d7.js";import{I as m}from"./InputError.fbcd9c37.js";import{I as o}from"./InputLabel.9ac7ac4f.js";import{P as y}from"./PrimaryButton.3c9217ee.js";import{h as c}from"./moment.9709ab41.js";import"./transition.fe8ed371.js";import"./SectionTitle.ffcb5b9b.js";function A({examTypes:l,exam:s}){const d=u();f();const e=v({id:s.id,name:s.name,exam_type_id:s.exam_type_id,description:s.description,date:c(s.expires_at).format("YYYY-MM-DD"),time:c(s.expires_at).format("HH:mm"),attempts:s.attempts});function p(){e.put(d("exam.update",{id:s.id}),{errorBag:"editExam",preserveScroll:!0})}return r(x,{onSubmit:p,title:"Exam Details",description:"Edit Exam",renderActions:()=>r(g,{children:[a(N,{on:e.recentlySuccessful,className:"mr-3",children:"Saved."}),a(y,{className:h({"opacity-25":e.processing}),disabled:e.processing,children:"Save"})]}),children:[r("div",{className:"col-span-6 sm:col-span-4",children:[a(o,{htmlFor:"name",value:"Name"}),a(i.Input,{id:"name",type:"text",value:e.data.name,onChange:t=>e.setData("name",t.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),a(m,{message:e.errors.name,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4 mt-2",children:[a(o,{htmlFor:"exam_type_id",value:"Exam Type"}),a(i.Select,{id:"exam_type_id",value:e.data.exam_type_id,onChange:t=>e.setData("exam_type_id",t),children:l.map(({id:t,name:n})=>a(i.Option,{value:`${t}`,children:n},t))}),a(m,{message:e.errors.exam_type_id,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[a(o,{htmlFor:"date",value:"Number of Attempts"}),a(i.Input,{id:"attempts",type:"text",value:e.data.attempts,onChange:t=>e.setData("attempts",t.currentTarget.value),crossOrigin:void 0,onInput:t=>{let n=t.currentTarget.value.match(/^[0-9]{0,10}/g);e.setData("attempts",n[0]),t.currentTarget.value=n[0]}}),a(m,{message:e.errors.attempts,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[a(o,{htmlFor:"description",value:"Description"}),a(i.Textarea,{id:"description",value:e.data.description,onChange:t=>e.setData("description",t.currentTarget.value)}),a(m,{message:e.errors.description,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[a(o,{htmlFor:"date",value:"Date (Deadline)"}),a(i.Input,{id:"date",type:"date",defaultValue:e.data.date,onChange:t=>e.setData("date",t.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),a(m,{message:e.errors.date,className:"mt-2"})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[a(o,{htmlFor:"date",value:"Time (Deadline)"}),a(i.Input,{id:"time",type:"time",value:e.data.time,onChange:t=>e.setData("time",t.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),a(m,{message:e.errors.time,className:"mt-2"})]})]})}export{A as default};
