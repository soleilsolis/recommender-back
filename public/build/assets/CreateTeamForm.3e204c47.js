import{u as p,W as d,a as r,F as h,j as e,c as f}from"./app.efe495aa.js";import{u as g}from"./useTypedPage.e794c9c1.js";import{A as v}from"./ActionMessage.8f6c9c72.js";import{F as N}from"./FormSection.fe056c3f.js";import{I as x}from"./InputError.fa0ba960.js";import{I as l}from"./InputLabel.e7b0fea0.js";import{P as T}from"./PrimaryButton.5b604864.js";import{T as y}from"./TextInput.163f07a7.js";import"./transition.ef49d019.js";import"./SectionTitle.61daa9b5.js";function B(){var s,o,m,c;const n=p(),t=g(),a=d({name:""});function i(){a.post(n("teams.store"),{errorBag:"createTeam",preserveScroll:!0})}return r(N,{onSubmit:i,title:"Team Details",description:"Create a new team to collaborate with others on projects.",renderActions:()=>r(h,{children:[e(v,{on:a.recentlySuccessful,className:"mr-3",children:"Saved."}),e(T,{className:f({"opacity-25":a.processing}),disabled:a.processing,children:"Save"})]}),children:[r("div",{className:"col-span-6",children:[e(l,{value:"Team Owner"}),r("div",{className:"flex items-center mt-2",children:[e("img",{className:"w-12 h-12 rounded-full object-cover",src:(s=t.props.auth.user)==null?void 0:s.profile_photo_url,alt:(o=t.props.auth.user)==null?void 0:o.name}),r("div",{className:"ml-4 leading-tight",children:[e("div",{className:"text-gray-900 dark:text-white",children:(m=t.props.auth.user)==null?void 0:m.name}),e("div",{className:"text-gray-700 dark:text-gray-300 text-sm",children:(c=t.props.auth.user)==null?void 0:c.email})]})]})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[e(l,{htmlFor:"name",value:"Team Name"}),e(y,{id:"name",type:"text",className:"mt-1 block w-full",value:a.data.name,onChange:u=>a.setData("name",u.currentTarget.value),autoFocus:!0}),e(x,{message:a.errors.name,className:"mt-2"})]})]})}export{B as default};
