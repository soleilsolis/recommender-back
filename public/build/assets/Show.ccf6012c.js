import o from"./DeleteTeamForm.53d95bc8.js";import a from"./TeamMemberManager.5dd935cf.js";import p from"./UpdateTeamNameForm.d992daa3.js";import{S as l}from"./SectionBorder.fbb3bd2e.js";import{A as s}from"./AppLayout.764a9dac.js";import{j as r,a as e,F as n}from"./app.40d753b5.js";import"./Modal.5a5aba43.js";import"./SectionTitle.d84742d4.js";import"./transition.40592442.js";import"./ConfirmationModal.94ebcd63.js";import"./DangerButton.4219c3c6.js";import"./SecondaryButton.9bd35dba.js";import"./useTypedPage.f62ef4dc.js";import"./ActionMessage.2532175e.js";import"./DialogModal.2e404c7d.js";import"./FormSection.f00a4644.js";import"./InputError.fd15ac50.js";import"./InputLabel.7f3b5ce4.js";import"./PrimaryButton.f39014e9.js";import"./TextInput.c07812a1.js";function B({team:m,availableRoles:i,permissions:t}){return r(s,{title:"Team Settings",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Team Settings"}),children:r("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[r(p,{team:m,permissions:t}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{team:m,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!m.personal_team?e(n,{children:[r(l,{}),r("div",{className:"mt-10 sm:mt-0",children:r(o,{team:m})})]}):null]})})})}export{B as default};
