import a from"./DeleteUserForm.bd3cfe71.js";import s from"./LogoutOtherBrowserSessionsForm.17174b92.js";import p from"./TwoFactorAuthenticationForm.b5826257.js";import n from"./UpdatePasswordForm.85e02ba3.js";import l from"./UpdateProfileInformationForm.0b57241a.js";import{u as d}from"./useTypedPage.3c031d92.js";import{S as e}from"./SectionBorder.6ab7a2d5.js";import{A as c}from"./AppLayout.5428c104.js";import{j as r,a as o,F as u}from"./app.0a33a6f8.js";import"./Modal.5924f36b.js";import"./SectionTitle.f9030cd3.js";import"./transition.f79b3964.js";import"./DangerButton.5b04c65e.js";import"./DialogModal.9d2059f4.js";import"./TextInput.325c5678.js";import"./InputError.73421e82.js";import"./SecondaryButton.d413dba9.js";import"./ActionMessage.2e34dfae.js";import"./PrimaryButton.eaf7da9a.js";import"./InputLabel.7dadd1c8.js";import"./FormSection.bcdbb399.js";function q({sessions:m,confirmsTwoFactorAuthentication:i}){const t=d();return r(c,{title:"Profile",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Profile"}),children:r("div",{children:o("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[t.props.jetstream.canUpdateProfileInformation?o("div",{children:[r(l,{user:t.props.auth.user}),r(e,{})]}):null,t.props.jetstream.canUpdatePassword?o("div",{className:"mt-10 sm:mt-0",children:[r(n,{}),r(e,{})]}):null,t.props.jetstream.canManageTwoFactorAuthentication?o("div",{className:"mt-10 sm:mt-0",children:[r(p,{requiresConfirmation:i}),r(e,{})]}):null,r("div",{className:"mt-10 sm:mt-0",children:r(s,{sessions:m})}),t.props.jetstream.hasAccountDeletionFeatures?o(u,{children:[r(e,{}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{})})]}):null]})})})}export{q as default};
