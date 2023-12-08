import{u as G,W as h,r as g,a as t,j as e,F as H,c as o,O as J}from"./app.c34444fb.js";import{u as K}from"./useTypedPage.e4505692.js";import{A as Q}from"./ActionMessage.1f625161.js";import{A as S}from"./Modal.9678aea5.js";import{C as d}from"./ConfirmationModal.b80d8e0d.js";import{D as w}from"./DangerButton.1eddc3c1.js";import{D as k}from"./DialogModal.153846c9.js";import{F as U}from"./FormSection.8d5a2f26.js";import{I as A}from"./InputError.3524855f.js";import{I as F}from"./InputLabel.35693fa5.js";import{P as R}from"./PrimaryButton.32e8849f.js";import{T as V}from"./TextInput.e0568515.js";import{S as N}from"./SecondaryButton.40122839.js";import{S as C}from"./SectionBorder.e081f603.js";import"./transition.a5768a37.js";import"./SectionTitle.435c6df7.js";function ue({team:i,availableRoles:s,userPermissions:m}){const c=G(),a=h({email:"",role:null}),l=h({role:null}),f=h({}),v=h({}),[L,u]=g.exports.useState(!1),[y,j]=g.exports.useState(null),[B,b]=g.exports.useState(!1),[x,p]=g.exports.useState(null),T=K();function D(){a.post(c("team-members.store",[i]),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>a.reset()})}function I(r){J.delete(c("team-invitations.destroy",[r]),{preserveScroll:!0})}function O(r){j(r),l.setData("role",r.membership.role),u(!0)}function z(){!y||l.put(c("team-members.update",[i,y]),{preserveScroll:!0,onSuccess:()=>u(!1)})}function _(){b(!0)}function W(){f.delete(c("team-members.destroy",[i,T.props.auth.user]))}function E(r){p(r)}function P(){!x||v.delete(c("team-members.destroy",[i,x]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>p(null)})}function M(r){var n;return(n=s.find(q=>q.key===r))==null?void 0:n.name}return t("div",{children:[m.canAddTeamMembers?t("div",{children:[e(C,{}),t(U,{onSubmit:D,title:"Add Classroom Member",description:"Add a new team member to your team, allowing them to collaborate with you.",renderActions:()=>t(H,{children:[e(Q,{on:a.recentlySuccessful,className:"mr-3",children:"Added."}),e(R,{className:o({"opacity-25":a.processing}),disabled:a.processing,children:"Add"})]}),children:[e("div",{className:"col-span-6",children:e("div",{className:"max-w-xl text-sm text-gray-600 dark:text-gray-400",children:"Please provide the email address of the person you would like to add to this team."})}),t("div",{className:"col-span-6 sm:col-span-4",children:[e(F,{htmlFor:"email",value:"Email"}),e(V,{id:"email",type:"email",className:"mt-1 block w-full",value:a.data.email,onChange:r=>a.setData("email",r.currentTarget.value)}),e(A,{message:a.errors.email,className:"mt-2"})]}),s.length>0?t("div",{className:"col-span-6 lg:col-span-4",children:[e(F,{htmlFor:"roles",value:"Role"}),e(A,{message:a.errors.role,className:"mt-2"}),e("div",{className:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer",children:s.map((r,n)=>e("button",{type:"button",className:o("relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":n>0,"rounded-b-none":n!=Object.keys(s).length-1}),onClick:()=>a.setData("role",r.key),children:t("div",{className:o({"opacity-50":a.data.role&&a.data.role!=r.key}),children:[t("div",{className:"flex items-center",children:[e("div",{className:o("text-sm text-gray-600 dark:text-gray-400",{"font-semibold":a.data.role==r.key}),children:r.name}),a.data.role==r.key?e("svg",{className:"ml-2 h-5 w-5 text-green-400",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24",children:e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}):null]}),e("div",{className:"mt-2 text-xs text-gray-600 dark:text-gray-400",children:r.description})]})},r.key))})]}):null]})]}):null,i.team_invitations.length>0&&m.canAddTeamMembers?t("div",{children:[e(C,{}),e("div",{className:"mt-10 sm:mt-0"}),e(S,{title:"Pending Team Invitations",description:"These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation.",children:e("div",{className:"space-y-6",children:i.team_invitations.map(r=>t("div",{className:"flex items-center justify-between",children:[e("div",{className:"text-gray-600 dark:text-gray-400",children:r.email}),e("div",{className:"flex items-center",children:m.canRemoveTeamMembers?e("button",{className:"cursor-pointer ml-6 text-sm text-red-500 focus:outline-none",onClick:()=>I(r),children:"Cancel"}):null})]},r.id))})})]}):null,i.users.length>0?t("div",{children:[e(C,{}),e("div",{className:"mt-10 sm:mt-0"}),e(S,{title:"Team Members",description:"All of the people that are part of this team.",children:e("div",{className:"space-y-6",children:i.users.map(r=>{var n;return t("div",{className:"flex items-center justify-between",children:[t("div",{className:"flex items-center",children:[e("img",{className:"w-8 h-8 rounded-full",src:r.profile_photo_url,alt:r.name}),e("div",{className:"ml-4 dark:text-white",children:r.name})]}),t("div",{className:"flex items-center",children:[m.canAddTeamMembers&&s.length?e("button",{className:"ml-2 text-sm text-gray-400 underline",onClick:()=>O(r),children:M(r.membership.role)}):s.length?e("div",{className:"ml-2 text-sm text-gray-400",children:M(r.membership.role)}):null,((n=T.props.auth.user)==null?void 0:n.id)===r.id?e("button",{className:"cursor-pointer ml-6 text-sm text-red-500",onClick:_,children:"Leave"}):null,m.canRemoveTeamMembers?e("button",{className:"cursor-pointer ml-6 text-sm text-red-500",onClick:()=>E(r),children:"Remove"}):null]})]},r.id)})})})]}):null,t(k,{isOpen:L,onClose:()=>u(!1),children:[e(k.Content,{title:"Manage Role"}),y?e("div",{children:e("div",{className:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer",children:s.map((r,n)=>e("button",{type:"button",className:o("relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":n>0,"rounded-b-none":n!==Object.keys(s).length-1}),onClick:()=>l.setData("role",r.key),children:t("div",{className:o({"opacity-50":l.data.role&&l.data.role!==r.key}),children:[t("div",{className:"flex items-center",children:[e("div",{className:o("text-sm text-gray-600 dark:text-gray-400",{"font-semibold":l.data.role===r.key}),children:r.name}),l.data.role===r.key?e("svg",{className:"ml-2 h-5 w-5 text-green-400",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24",children:e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}):null]}),e("div",{className:"mt-2 text-xs text-gray-600 dark:text-gray-400",children:r.description})]})},r.key))})}):null,t(k.Footer,{children:[e(N,{onClick:()=>u(!1),children:"Cancel"}),e(R,{onClick:z,className:o("ml-2",{"opacity-25":l.processing}),disabled:l.processing,children:"Save"})]})]}),t(d,{isOpen:B,onClose:()=>b(!1),children:[e(d.Content,{title:"Leave Team",children:"Are you sure you would like to leave this team?"}),t(d.Footer,{children:[e(N,{onClick:()=>b(!1),children:"Cancel"}),e(w,{onClick:W,className:o("ml-2",{"opacity-25":f.processing}),disabled:f.processing,children:"Leave"})]})]}),t(d,{isOpen:!!x,onClose:()=>p(null),children:[e(d.Content,{title:"Remove Team Member",children:"Are you sure you would like to remove this person from the team?"}),t(d.Footer,{children:[e(N,{onClick:()=>p(null),children:"Cancel"}),e(w,{onClick:P,className:o("ml-2",{"opacity-25":v.processing}),disabled:v.processing,children:"Remove"})]})]})]})}export{ue as default};
