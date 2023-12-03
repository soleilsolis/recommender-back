import{u as h,r as a,W as x,a as r,j as t,b,c as C}from"./app.c9439412.js";import{A as N}from"./AuthenticationCard.1bf016e7.js";import{I as d}from"./InputLabel.0e179496.js";import{P as R}from"./PrimaryButton.a6ab49e1.js";import{T as m}from"./TextInput.fd36ebb6.js";import{I as y}from"./InputError.a89d4509.js";import"./AuthenticationCardLogo.7e97783f.js";function j(){const f=h(),[c,p]=a.exports.useState(!1),e=x({code:"",recovery_code:""}),s=a.exports.useRef(null),n=a.exports.useRef(null);function v(o){o.preventDefault();const i=!c;p(i),setTimeout(()=>{var l,u;i?((l=s.current)==null||l.focus(),e.setData("code","")):((u=n.current)==null||u.focus(),e.setData("recovery_code",""))},100)}function g(o){o.preventDefault(),e.post(f("two-factor.login"))}return r(N,{children:[t(b,{title:"Two-Factor Confirmation"}),t("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:c?"Please confirm access to your account by entering one of your emergency recovery codes.":"Please confirm access to your account by entering the authentication code provided by your authenticator application."}),r("form",{onSubmit:g,children:[c?r("div",{children:[t(d,{htmlFor:"recovery_code",children:"Recovery Code"}),t(m,{id:"recovery_code",type:"text",className:"mt-1 block w-full",value:e.data.recovery_code,onChange:o=>e.setData("recovery_code",o.currentTarget.value),ref:s,autoComplete:"one-time-code"}),t(y,{className:"mt-2",message:e.errors.recovery_code})]}):r("div",{children:[t(d,{htmlFor:"code",children:"Code"}),t(m,{id:"code",type:"text",inputMode:"numeric",className:"mt-1 block w-full",value:e.data.code,onChange:o=>e.setData("code",o.currentTarget.value),autoFocus:!0,autoComplete:"one-time-code",ref:n}),t(y,{className:"mt-2",message:e.errors.code})]}),r("div",{className:"flex items-center justify-end mt-4",children:[t("button",{type:"button",className:"text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",onClick:v,children:c?"Use an authentication code":"Use a recovery code"}),t(R,{className:C("ml-4",{"opacity-25":e.processing}),disabled:e.processing,children:"Log in"})]})]})]})}export{j as default};
