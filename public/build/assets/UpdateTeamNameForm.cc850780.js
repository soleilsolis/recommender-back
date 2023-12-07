import{u as c,W as i,a as t,F as d,j as e,c as p}from"./app.efe495aa.js";import{A as u}from"./ActionMessage.8f6c9c72.js";import{F as f}from"./FormSection.fe056c3f.js";import{I as h}from"./InputError.fa0ba960.js";import{I as s}from"./InputLabel.e7b0fea0.js";import{P as N}from"./PrimaryButton.5b604864.js";import{T as v}from"./TextInput.163f07a7.js";import"./transition.ef49d019.js";import"./SectionTitle.61daa9b5.js";function j({team:r,permissions:m}){const n=c(),a=i({name:r.name});function o(){a.put(n("teams.update",[r]),{errorBag:"updateTeamName",preserveScroll:!0})}return t(f,{onSubmit:o,title:"Team Name",description:"The team's name and owner information.",renderActions:m.canUpdateTeam?()=>t(d,{children:[e(u,{on:a.recentlySuccessful,className:"mr-3",children:"Saved."}),e(N,{className:p({"opacity-25":a.processing}),disabled:a.processing,children:"Save"})]}):void 0,children:[t("div",{className:"col-span-6",children:[e(s,{value:"Team Owner"}),t("div",{className:"flex items-center mt-2",children:[e("img",{className:"w-12 h-12 rounded-full object-cover",src:r.owner.profile_photo_url,alt:r.owner.name}),t("div",{className:"ml-4 leading-tight",children:[e("div",{className:"text-gray-900 dark:text-white",children:r.owner.name}),e("div",{className:"text-gray-700 dark:text-gray-300 text-sm",children:r.owner.email})]})]})]}),t("div",{className:"col-span-6 sm:col-span-4",children:[e(s,{htmlFor:"name",value:"Team Name"}),e(v,{id:"name",type:"text",className:"mt-1 block w-full",value:a.data.name,onChange:l=>a.setData("name",l.currentTarget.value),disabled:!m.canUpdateTeam}),e(h,{message:a.errors.name,className:"mt-2"})]})]})}export{j as default};
