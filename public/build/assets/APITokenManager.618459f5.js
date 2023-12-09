import{u as O,W as k,r as y,a as t,F as L,j as e,c as v}from"./app.a00b638a.js";import{A as E}from"./ActionMessage.7fb09642.js";import{A as R}from"./Modal.11a4685c.js";import{C as D}from"./Checkbox.6fad7ce3.js";import{C as x}from"./ConfirmationModal.f1b22428.js";import{D as W}from"./DangerButton.428e8b88.js";import{D as i}from"./DialogModal.b3cd22f2.js";import{F as Y}from"./FormSection.0659d710.js";import{I as q}from"./InputError.3017abc6.js";import{I as F}from"./InputLabel.f7f1a4d0.js";import{P as d}from"./PrimaryButton.2164bc4f.js";import{T as z}from"./TextInput.d340d260.js";import{S as T}from"./SecondaryButton.f5a40400.js";import{S as G}from"./SectionBorder.539e7b78.js";import{u as H}from"./useTypedPage.8cdc170e.js";import"./transition.da701523.js";import"./SectionTitle.13e2f5b2.js";function ce({tokens:C,availablePermissions:o,defaultPermissions:P}){var N,A,S;const m=O(),r=k({name:"",permissions:P}),n=k({permissions:[]}),p=k({}),[I,u]=y.exports.useState(!1),[h,l]=y.exports.useState(null),[g,c]=y.exports.useState(null),b=H();function w(){r.post(m("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{u(!0),r.reset()}})}function B(s){n.setData("permissions",s.abilities),l(s)}function M(){!h||n.put(m("api-tokens.update",[h]),{preserveScroll:!0,preserveState:!0,onSuccess:()=>l(null)})}function j(s){c(s)}function _(){!g||p.delete(m("api-tokens.destroy",[g]),{preserveScroll:!0,preserveState:!0,onSuccess:()=>c(null)})}return t("div",{children:[t(Y,{onSubmit:w,title:"Create API Token",description:"API tokens allow third-party services to authenticate with our application on your behalf.",renderActions:()=>t(L,{children:[e(E,{on:r.recentlySuccessful,className:"mr-3",children:"Created."}),e(d,{className:v({"opacity-25":r.processing}),disabled:r.processing,children:"Create"})]}),children:[t("div",{className:"col-span-6 sm:col-span-4",children:[e(F,{htmlFor:"name",children:"Name"}),e(z,{id:"name",type:"text",className:"mt-1 block w-full",value:r.data.name,onChange:s=>r.setData("name",s.currentTarget.value),autoFocus:!0}),e(q,{message:r.errors.name,className:"mt-2"})]}),o.length>0&&t("div",{className:"col-span-6",children:[e(F,{htmlFor:"permissions",children:"Permissions"}),e("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4",children:o.map(s=>e("div",{children:t("label",{className:"flex items-center",children:[e(D,{value:s,checked:r.data.permissions.includes(s),onChange:a=>{r.data.permissions.includes(a.currentTarget.value)?r.setData("permissions",r.data.permissions.filter(f=>f!==a.currentTarget.value)):r.setData("permissions",[a.currentTarget.value,...r.data.permissions])}}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:s})]})},s))})]})]}),C.length>0?t("div",{children:[e(G,{}),e("div",{className:"mt-10 sm:mt-0",children:e(R,{title:"Manage API Tokens",description:"You may delete any of your existing tokens if they are no longer needed.",children:e("div",{className:"space-y-6",children:C.map(s=>t("div",{className:"flex items-center justify-between",children:[e("div",{className:"break-all dark:text-white",children:s.name}),t("div",{className:"flex items-center",children:[s.last_used_ago&&t("div",{className:"text-sm text-gray-400",children:["Last used ",s.last_used_ago]}),o.length>0?e(d,{className:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:()=>B(s),children:"Permissions"}):null,e(d,{className:"cursor-pointer ml-6 text-sm text-red-500",onClick:()=>j(s),children:"Delete"})]})]},s.id))})})})]}):null,t(i,{isOpen:I,onClose:()=>u(!1),children:[t(i.Content,{title:"API Token",children:[e("div",{children:"Please copy your new API token. For your security, it won't be shown again."}),e("div",{className:"mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500",children:(S=(A=(N=b.props)==null?void 0:N.jetstream)==null?void 0:A.flash)==null?void 0:S.token})]}),e(i.Footer,{children:e(T,{onClick:()=>u(!1),children:"Close"})})]}),t(i,{isOpen:!!h,onClose:()=>l(null),children:[e(i.Content,{title:"API Token Permissions",children:e("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:o.map(s=>e("div",{children:t("label",{className:"flex items-center",children:[e(D,{value:s,checked:n.data.permissions.includes(s),onChange:a=>{n.data.permissions.includes(a.currentTarget.value)?n.setData("permissions",n.data.permissions.filter(f=>f!==a.currentTarget.value)):n.setData("permissions",[a.currentTarget.value,...n.data.permissions])}}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:s})]})},s))})}),t(i.Footer,{children:[e(T,{onClick:()=>l(null),children:"Cancel"}),e(d,{onClick:M,className:v("ml-2",{"opacity-25":n.processing}),disabled:n.processing,children:"Save"})]})]}),t(x,{isOpen:!!g,onClose:()=>c(null),children:[e(x.Content,{title:"Delete API Token",children:"Are you sure you would like to delete this API token?"}),t(x.Footer,{children:[e(T,{onClick:()=>c(null),children:"Cancel"}),e(W,{onClick:_,className:v("ml-2",{"opacity-25":p.processing}),disabled:p.processing,children:"Delete"})]})]})]})}export{ce as default};