import{u as m,W as n,j as a,a as r,F as c,c as i}from"./app.bc11c68e.js";import{u as p}from"./useTypedPage.01fb9630.js";import{A as l}from"./ActionMessage.5b75ecdc.js";import{F as u}from"./FormSection.7fef8e27.js";import{I as d}from"./InputError.0077e169.js";import{I as f}from"./InputLabel.08e27130.js";import{P as x}from"./PrimaryButton.c2906161.js";import{T as y}from"./TextInput.3cca3cba.js";import"./transition.f7b4130e.js";import"./SectionTitle.15e7e5cb.js";function j(){const s=m();p();const e=n({name:""});function t(){e.post(s("examType.store"),{errorBag:"createExamType",preserveScroll:!0})}return a(u,{onSubmit:t,title:"Exam Type Details",description:"Create a new Exam Type",renderActions:()=>r(c,{children:[a(l,{on:e.recentlySuccessful,className:"mr-3",children:"Saved."}),a(x,{className:i({"opacity-25":e.processing}),disabled:e.processing,children:"Save"})]}),children:r("div",{className:"col-span-6 sm:col-span-4",children:[a(f,{htmlFor:"name",value:"Exam Type Name"}),a(y,{id:"name",type:"text",className:"mt-1 block w-full",value:e.data.name,onChange:o=>e.setData("name",o.currentTarget.value),autoFocus:!0}),a(d,{message:e.errors.name,className:"mt-2"})]})})}export{j as default};