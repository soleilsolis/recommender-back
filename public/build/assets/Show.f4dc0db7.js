import o from"./DeleteTeamForm.5c712734.js";import a from"./TeamMemberManager.b3e5cc72.js";import p from"./UpdateTeamNameForm.2a5f4c30.js";import{S as l}from"./SectionBorder.73ba5537.js";import{A as s}from"./AppLayout.1c5b2527.js";import{j as r,a as e,F as n}from"./app.3630e11d.js";import"./Modal.2a6db4cd.js";import"./SectionTitle.ffcb5b9b.js";import"./transition.fe8ed371.js";import"./ConfirmationModal.a0c455e3.js";import"./DangerButton.c08f8b5a.js";import"./SecondaryButton.6fcbf668.js";import"./useTypedPage.f7096180.js";import"./ActionMessage.f61ede8b.js";import"./DialogModal.997a47c6.js";import"./FormSection.4f03a8d7.js";import"./InputError.fbcd9c37.js";import"./InputLabel.9ac7ac4f.js";import"./PrimaryButton.3c9217ee.js";import"./TextInput.d92dd660.js";function B({team:m,availableRoles:i,permissions:t}){return r(s,{title:"Team Settings",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Team Settings"}),children:r("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[r(p,{team:m,permissions:t}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{team:m,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!m.personal_team?e(n,{children:[r(l,{}),r("div",{className:"mt-10 sm:mt-0",children:r(o,{team:m})})]}):null]})})})}export{B as default};
