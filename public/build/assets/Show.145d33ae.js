import i from"./DeleteTeamForm.e9dae09a.js";import a from"./TeamMemberManager.0f351734.js";import p from"./UpdateTeamNameForm.06ae4c7e.js";import{S as s}from"./SectionBorder.e081f603.js";import{A as l}from"./AppLayout.449433fc.js";import{j as r,a as e,F as n}from"./app.c34444fb.js";import"./Modal.9678aea5.js";import"./SectionTitle.435c6df7.js";import"./transition.a5768a37.js";import"./ConfirmationModal.b80d8e0d.js";import"./DangerButton.1eddc3c1.js";import"./SecondaryButton.40122839.js";import"./useTypedPage.e4505692.js";import"./ActionMessage.1f625161.js";import"./DialogModal.153846c9.js";import"./FormSection.8d5a2f26.js";import"./InputError.3524855f.js";import"./InputLabel.35693fa5.js";import"./PrimaryButton.32e8849f.js";import"./TextInput.e0568515.js";function k({team:m,availableRoles:o,permissions:t}){return r(l,{title:"Classroom Settings",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Classroom Settings"}),children:r("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[r(p,{team:m,permissions:t}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{team:m,availableRoles:o,userPermissions:t})}),t.canDeleteTeam&&!m.personal_team?e(n,{children:[r(s,{}),r("div",{className:"mt-10 sm:mt-0",children:r(i,{team:m})})]}):null]})})})}export{k as default};
