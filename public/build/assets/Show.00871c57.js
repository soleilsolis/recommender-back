import a from"./DeleteUserForm.80debcb4.js";import s from"./LogoutOtherBrowserSessionsForm.fab99716.js";import p from"./TwoFactorAuthenticationForm.b291c8e6.js";import n from"./UpdatePasswordForm.14be9e68.js";import l from"./UpdateProfileInformationForm.37f6f3ba.js";import{u as d}from"./useTypedPage.c68a748c.js";import{S as e}from"./SectionBorder.625f551b.js";import{A as c}from"./AppLayout.800f209f.js";import{j as r,a as o,F as u}from"./app.3de06553.js";import"./Modal.a92edd6e.js";import"./SectionTitle.0822ba40.js";import"./transition.7ee796a1.js";import"./DangerButton.4df09e41.js";import"./DialogModal.33c82e59.js";import"./TextInput.af00f396.js";import"./InputError.44cf0ceb.js";import"./SecondaryButton.ef419366.js";import"./ActionMessage.9b1948bc.js";import"./PrimaryButton.0a2dacb1.js";import"./InputLabel.3df0d45b.js";import"./FormSection.4f2927a3.js";function q({sessions:m,confirmsTwoFactorAuthentication:i}){const t=d();return r(c,{title:"Profile",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Profile"}),children:r("div",{children:o("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[t.props.jetstream.canUpdateProfileInformation?o("div",{children:[r(l,{user:t.props.auth.user}),r(e,{})]}):null,t.props.jetstream.canUpdatePassword?o("div",{className:"mt-10 sm:mt-0",children:[r(n,{}),r(e,{})]}):null,t.props.jetstream.canManageTwoFactorAuthentication?o("div",{className:"mt-10 sm:mt-0",children:[r(p,{requiresConfirmation:i}),r(e,{})]}):null,r("div",{className:"mt-10 sm:mt-0",children:r(s,{sessions:m})}),t.props.jetstream.hasAccountDeletionFeatures?o(u,{children:[r(e,{}),r("div",{className:"mt-10 sm:mt-0",children:r(a,{})})]}):null]})})})}export{q as default};
