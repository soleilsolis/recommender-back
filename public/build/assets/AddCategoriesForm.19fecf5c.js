import{u as m,W as c,j as a,a as o,F as l,c as d,e as t}from"./app.b4d71fd2.js";import{u as p}from"./useTypedPage.d1464ce4.js";import{A as u}from"./ActionMessage.c1cf4beb.js";import{F as g}from"./FormSection.43b1908b.js";import{I as f}from"./InputError.3809ffb8.js";import{I as h}from"./InputLabel.6a32b5a7.js";import{P as v}from"./PrimaryButton.d71c9633.js";import"./transition.ba6d3380.js";import"./SectionTitle.1f2d8aaa.js";function x({exam:r}){const i=m();p();const e=c({exam_id:r.id,name:""});console.log(r.categories);function n(){e.post(i("category.store"),{errorBag:"addCategory",preserveScroll:!0})}return a(g,{onSubmit:n,title:"Categories",description:"Create Categories",renderActions:()=>o(l,{children:[a(u,{on:e.recentlySuccessful,className:"mr-3",children:"Saved."}),a(v,{className:d({"opacity-25":e.processing}),disabled:e.processing,children:"Save"})]}),children:o("div",{className:"col-span-6 sm:col-span-4",children:[r.categories.map(s=>a(t.Typography,{variant:"lead",children:s.name})),o("div",{className:"mt-2",children:[a(h,{htmlFor:"name",value:"Name"}),a(t.Input,{id:"name",type:"text",value:e.data.name,onChange:s=>e.setData("name",s.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),a(f,{message:e.errors.name,className:"mt-2"})]})]})})}export{x as default};