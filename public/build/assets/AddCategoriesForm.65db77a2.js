import{u as m,W as c,j as a,a as o,F as l,c as d,h as t}from"./app.c9439412.js";import{u as p}from"./useTypedPage.94cb41ed.js";import{A as u}from"./ActionMessage.3049e426.js";import{F as g}from"./FormSection.55626912.js";import{I as f}from"./InputError.a89d4509.js";import{I as h}from"./InputLabel.0e179496.js";import{P as v}from"./PrimaryButton.a6ab49e1.js";import"./transition.f37319d1.js";import"./SectionTitle.67ad0806.js";function x({exam:r}){const i=m();p();const e=c({exam_id:r.id,name:""});console.log(r.categories);function n(){e.post(i("category.store"),{errorBag:"addCategory",preserveScroll:!0})}return a(g,{onSubmit:n,title:"Categories",description:"Create Categories",renderActions:()=>o(l,{children:[a(u,{on:e.recentlySuccessful,className:"mr-3",children:"Saved."}),a(v,{className:d({"opacity-25":e.processing}),disabled:e.processing,children:"Save"})]}),children:o("div",{className:"col-span-6 sm:col-span-4",children:[r.categories.map(s=>a(t.Typography,{variant:"lead",children:s.name})),o("div",{className:"mt-2",children:[a(h,{htmlFor:"name",value:"Name"}),a(t.Input,{id:"name",type:"text",value:e.data.name,onChange:s=>e.setData("name",s.currentTarget.value),autoFocus:!0,crossOrigin:void 0}),a(f,{message:e.errors.name,className:"mt-2"})]})]})})}export{x as default};
