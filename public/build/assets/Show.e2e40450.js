import o from"./DeleteTeamForm.6d2a449b.js";import a from"./TeamMemberManager.74479703.js";import p from"./UpdateTeamNameForm.cf776208.js";import{S as l}from"./SectionBorder.442ec087.js";import{A as s}from"./AppLayout.1d890a30.js";import{j as r,a as e,F as n}from"./app.1d1a48de.js";import"./Modal.badc8014.js";import"./SectionTitle.117ee679.js";import"./transition.00116a8c.js";import"./ConfirmationModal.bbf2a8b9.js";import"./DangerButton.e859ed8b.js";import"./SecondaryButton.638a9ec0.js";import"./useTypedPage.4edb5dda.js";import"./ActionMessage.6d52036b.js";import"./DialogModal.a8a3b17e.js";import"./FormSection.08e70d36.js";import"./InputError.cdb758ab.js";import"./InputLabel.9f8a2b46.js";import"./PrimaryButton.e08771f5.js";import"./TextInput.fa8635fd.js";function B({team:m,availableRoles:i,permissions:t}){return r(s,{title:"Team Settings",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Team Settings"}),children:r("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[r(p,{team:m,permissions:t}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{team:m,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!m.personal_team?e(n,{children:[r(l,{}),r("div",{className:"mt-10 sm:mt-0",children:r(o,{team:m})})]}):null]})})})}export{B as default};