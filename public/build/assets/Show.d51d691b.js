import o from"./DeleteTeamForm.fa244882.js";import a from"./TeamMemberManager.9da4d0ca.js";import p from"./UpdateTeamNameForm.d37feead.js";import{S as l}from"./SectionBorder.dc28d1be.js";import{A as s}from"./AppLayout.1560ed56.js";import{j as r,a as e,F as n}from"./app.d568e0c3.js";import"./Modal.e57ab487.js";import"./SectionTitle.3414e5ee.js";import"./transition.73fc6ad7.js";import"./ConfirmationModal.9f116207.js";import"./DangerButton.2a70c5e7.js";import"./SecondaryButton.9b0964ff.js";import"./useTypedPage.33ea741f.js";import"./ActionMessage.3d473eec.js";import"./DialogModal.275d0d46.js";import"./FormSection.660edbd4.js";import"./InputError.c9b117fb.js";import"./InputLabel.7b322e62.js";import"./PrimaryButton.a8a180da.js";import"./TextInput.460848c7.js";function B({team:m,availableRoles:i,permissions:t}){return r(s,{title:"Team Settings",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Team Settings"}),children:r("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[r(p,{team:m,permissions:t}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{team:m,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!m.personal_team?e(n,{children:[r(l,{}),r("div",{className:"mt-10 sm:mt-0",children:r(o,{team:m})})]}):null]})})})}export{B as default};
