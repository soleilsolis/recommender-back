import o from"./DeleteTeamForm.e31cdf1a.js";import a from"./TeamMemberManager.c28589ce.js";import p from"./UpdateTeamNameForm.a9ff5ede.js";import{S as l}from"./SectionBorder.2e2414e2.js";import{A as s}from"./AppLayout.c3817e14.js";import{j as r,a as e,F as n}from"./app.c9439412.js";import"./Modal.b6390a9a.js";import"./SectionTitle.67ad0806.js";import"./transition.f37319d1.js";import"./ConfirmationModal.7eab0f39.js";import"./DangerButton.89e85d80.js";import"./SecondaryButton.d4ed6404.js";import"./useTypedPage.94cb41ed.js";import"./ActionMessage.3049e426.js";import"./DialogModal.a53d9328.js";import"./FormSection.55626912.js";import"./InputError.a89d4509.js";import"./InputLabel.0e179496.js";import"./PrimaryButton.a6ab49e1.js";import"./TextInput.fd36ebb6.js";function B({team:m,availableRoles:i,permissions:t}){return r(s,{title:"Team Settings",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Team Settings"}),children:r("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[r(p,{team:m,permissions:t}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{team:m,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!m.personal_team?e(n,{children:[r(l,{}),r("div",{className:"mt-10 sm:mt-0",children:r(o,{team:m})})]}):null]})})})}export{B as default};
