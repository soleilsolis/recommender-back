import{u as i,W as n,a as e,j as s,b as m,c}from"./app.efe495aa.js";import{A as d}from"./AuthenticationCard.80cea9c1.js";import{I as u}from"./InputError.fa0ba960.js";import{I as p}from"./InputLabel.e7b0fea0.js";import{P as l}from"./PrimaryButton.5b604864.js";import{T as f}from"./TextInput.163f07a7.js";import"./AuthenticationCardLogo.33f1005a.js";function N(){const o=i(),r=n({password:""});function t(a){a.preventDefault(),r.post(o("password.confirm"),{onFinish:()=>r.reset()})}return e(d,{children:[s(m,{title:"Secure Area"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:t,children:[e("div",{children:[s(p,{htmlFor:"password",children:"Password"}),s(f,{id:"password",type:"password",className:"mt-1 block w-full",value:r.data.password,onChange:a=>r.setData("password",a.currentTarget.value),required:!0,autoComplete:"current-password",autoFocus:!0}),s(u,{className:"mt-2",message:r.errors.password})]}),s("div",{className:"flex justify-end mt-4",children:s(l,{className:c("ml-4",{"opacity-25":r.processing}),disabled:r.processing,children:"Confirm"})})]})]})}export{N as default};
