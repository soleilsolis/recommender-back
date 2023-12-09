import{u as m,W as l,a as r,j as e,b as n,c as d}from"./app.ca8b3da1.js";import{A as u}from"./AuthenticationCard.40fa03bd.js";import{I as c}from"./InputLabel.85cfa867.js";import{P as p}from"./PrimaryButton.bc50d662.js";import{T as f}from"./TextInput.fc9169c1.js";import{I as h}from"./InputError.1b799b4f.js";import"./AuthenticationCardLogo.fc082a0d.js";function k({status:s}){const o=m(),a=l({email:""});function i(t){t.preventDefault(),a.post(o("password.email"))}return r(u,{children:[e(n,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:s}),r("form",{onSubmit:i,children:[r("div",{children:[e(c,{htmlFor:"email",children:"Email"}),e(f,{id:"email",type:"email",className:"mt-1 block w-full",value:a.data.email,onChange:t=>a.setData("email",t.currentTarget.value),required:!0,autoFocus:!0}),e(h,{className:"mt-2",message:a.errors.email})]}),e("div",{className:"flex items-center justify-end mt-4",children:e(p,{className:d({"opacity-25":a.processing}),disabled:a.processing,children:"Email Password Reset Link"})})]})]})}export{k as default};