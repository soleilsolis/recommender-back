import a from"./DeleteUserForm.9f84f635.js";import s from"./LogoutOtherBrowserSessionsForm.4f7638c6.js";import p from"./TwoFactorAuthenticationForm.dfb88426.js";import n from"./UpdatePasswordForm.20a44d6b.js";import l from"./UpdateProfileInformationForm.13fe92a0.js";import{u as d}from"./useTypedPage.582f1470.js";import{S as e}from"./SectionBorder.5f3b0af3.js";import{A as c}from"./AppLayout.9ab01bb9.js";import{j as r,a as o,F as u}from"./app.12435c28.js";import"./Modal.8b72b8b7.js";import"./SectionTitle.354aa247.js";import"./transition.124b487f.js";import"./DangerButton.7ef6fd92.js";import"./DialogModal.c29145db.js";import"./TextInput.67aa120e.js";import"./InputError.b747a24f.js";import"./SecondaryButton.47c9a680.js";import"./ActionMessage.39c38443.js";import"./PrimaryButton.af5e5725.js";import"./InputLabel.b4c61a92.js";import"./FormSection.29a237a2.js";function q({sessions:m,confirmsTwoFactorAuthentication:i}){const t=d();return r(c,{title:"Profile",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Profile"}),children:r("div",{children:o("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[t.props.jetstream.canUpdateProfileInformation?o("div",{children:[r(l,{user:t.props.auth.user}),r(e,{})]}):null,t.props.jetstream.canUpdatePassword?o("div",{className:"mt-10 sm:mt-0",children:[r(n,{}),r(e,{})]}):null,t.props.jetstream.canManageTwoFactorAuthentication?o("div",{className:"mt-10 sm:mt-0",children:[r(p,{requiresConfirmation:i}),r(e,{})]}):null,r("div",{className:"mt-10 sm:mt-0",children:r(s,{sessions:m})}),t.props.jetstream.hasAccountDeletionFeatures?o(u,{children:[r(e,{}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{})})]}):null]})})})}export{q as default};