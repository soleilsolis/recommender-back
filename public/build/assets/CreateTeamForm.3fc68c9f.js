import{u as p,W as d,a as r,F as h,j as e,c as f}from"./app.c34444fb.js";import{u as g}from"./useTypedPage.e4505692.js";import{A as v}from"./ActionMessage.1f625161.js";import{F as N}from"./FormSection.8d5a2f26.js";import{I as x}from"./InputError.3524855f.js";import{I as c}from"./InputLabel.35693fa5.js";import{P as y}from"./PrimaryButton.32e8849f.js";import{T}from"./TextInput.e0568515.js";import"./transition.a5768a37.js";import"./SectionTitle.435c6df7.js";function B(){var t,o,m,l;const n=p(),s=g(),a=d({name:""});function i(){a.post(n("teams.store"),{errorBag:"createTeam",preserveScroll:!0})}return r(N,{onSubmit:i,title:"Team Details",description:"Create a new team to collaborate with others on projects.",renderActions:()=>r(h,{children:[e(v,{on:a.recentlySuccessful,className:"mr-3",children:"Saved."}),e(y,{className:f({"opacity-25":a.processing}),disabled:a.processing,children:"Save"})]}),children:[r("div",{className:"col-span-6",children:[e(c,{value:"Classroom Owner"}),r("div",{className:"flex items-center mt-2",children:[e("img",{className:"w-12 h-12 rounded-full object-cover",src:(t=s.props.auth.user)==null?void 0:t.profile_photo_url,alt:(o=s.props.auth.user)==null?void 0:o.name}),r("div",{className:"ml-4 leading-tight",children:[e("div",{className:"text-gray-900 dark:text-white",children:(m=s.props.auth.user)==null?void 0:m.name}),e("div",{className:"text-gray-700 dark:text-gray-300 text-sm",children:(l=s.props.auth.user)==null?void 0:l.email})]})]})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[e(c,{htmlFor:"name",value:"Classroom Name"}),e(T,{id:"name",type:"text",className:"mt-1 block w-full",value:a.data.name,onChange:u=>a.setData("name",u.currentTarget.value),autoFocus:!0}),e(x,{message:a.errors.name,className:"mt-2"})]})]})}export{B as default};
