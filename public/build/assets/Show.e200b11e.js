import i from"./DeleteTeamForm.85f0412e.js";import a from"./TeamMemberManager.20674a82.js";import p from"./UpdateTeamNameForm.a499adee.js";import{S as s}from"./SectionBorder.17bed7a0.js";import{A as l}from"./AppLayout.1efc3e4d.js";import{j as r,a as e,F as n}from"./app.fb31f04e.js";import"./Modal.8930c378.js";import"./SectionTitle.c41b8984.js";import"./transition.53ec94d6.js";import"./ConfirmationModal.a9f70297.js";import"./DangerButton.5dfd662c.js";import"./SecondaryButton.9faa68ea.js";import"./useTypedPage.c1d98290.js";import"./ActionMessage.18c682a2.js";import"./DialogModal.e2d07fe1.js";import"./FormSection.f6c70888.js";import"./InputError.8e11e641.js";import"./InputLabel.80b32a54.js";import"./PrimaryButton.2fcb3ad4.js";import"./TextInput.51ae395f.js";import"./moment.9709ab41.js";function B({team:m,availableRoles:o,permissions:t}){return r(l,{title:"Classroom Settings",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Classroom Settings"}),children:r("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[r(p,{team:m,permissions:t}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{team:m,availableRoles:o,userPermissions:t})}),t.canDeleteTeam&&!m.personal_team?e(n,{children:[r(s,{}),r("div",{className:"mt-10 sm:mt-0",children:r(i,{team:m})})]}):null]})})})}export{B as default};
