import a from"./DeleteUserForm.172e5c4d.js";import s from"./LogoutOtherBrowserSessionsForm.feddd2d9.js";import p from"./TwoFactorAuthenticationForm.42159172.js";import n from"./UpdatePasswordForm.9a6a8288.js";import l from"./UpdateProfileInformationForm.37a93bcf.js";import{u as d}from"./useTypedPage.f6e46de8.js";import{S as e}from"./SectionBorder.d4b9915f.js";import{A as c}from"./AppLayout.03e7f103.js";import{j as r,a as o,F as u}from"./app.387ff022.js";import"./Modal.37ea1b19.js";import"./SectionTitle.f2657ea8.js";import"./transition.93e298a0.js";import"./DangerButton.ad2ed662.js";import"./DialogModal.285bd2b8.js";import"./TextInput.61cb2401.js";import"./InputError.fdf33903.js";import"./SecondaryButton.331b7336.js";import"./ActionMessage.e8e99e97.js";import"./PrimaryButton.3259b127.js";import"./InputLabel.8f86b734.js";import"./FormSection.3a29e90a.js";function q({sessions:m,confirmsTwoFactorAuthentication:i}){const t=d();return r(c,{title:"Profile",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Profile"}),children:r("div",{children:o("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[t.props.jetstream.canUpdateProfileInformation?o("div",{children:[r(l,{user:t.props.auth.user}),r(e,{})]}):null,t.props.jetstream.canUpdatePassword?o("div",{className:"mt-10 sm:mt-0",children:[r(n,{}),r(e,{})]}):null,t.props.jetstream.canManageTwoFactorAuthentication?o("div",{className:"mt-10 sm:mt-0",children:[r(p,{requiresConfirmation:i}),r(e,{})]}):null,r("div",{className:"mt-10 sm:mt-0",children:r(s,{sessions:m})}),t.props.jetstream.hasAccountDeletionFeatures?o(u,{children:[r(e,{}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{})})]}):null]})})})}export{q as default};