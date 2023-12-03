import{u as i,W as n,a as e,j as s,b as m,c}from"./app.c9439412.js";import{A as d}from"./AuthenticationCard.1bf016e7.js";import{I as u}from"./InputError.a89d4509.js";import{I as p}from"./InputLabel.0e179496.js";import{P as l}from"./PrimaryButton.a6ab49e1.js";import{T as f}from"./TextInput.fd36ebb6.js";import"./AuthenticationCardLogo.7e97783f.js";function N(){const o=i(),r=n({password:""});function t(a){a.preventDefault(),r.post(o("password.confirm"),{onFinish:()=>r.reset()})}return e(d,{children:[s(m,{title:"Secure Area"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:t,children:[e("div",{children:[s(p,{htmlFor:"password",children:"Password"}),s(f,{id:"password",type:"password",className:"mt-1 block w-full",value:r.data.password,onChange:a=>r.setData("password",a.currentTarget.value),required:!0,autoComplete:"current-password",autoFocus:!0}),s(u,{className:"mt-2",message:r.errors.password})]}),s("div",{className:"flex justify-end mt-4",children:s(l,{className:c("ml-4",{"opacity-25":r.processing}),disabled:r.processing,children:"Confirm"})})]})]})}export{N as default};
