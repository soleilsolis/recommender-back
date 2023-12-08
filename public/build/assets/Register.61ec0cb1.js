import{u as l,W as c,a as s,j as e,b as u,d as f,c as g}from"./app.c34444fb.js";import{u as p}from"./useTypedPage.e4505692.js";import{A as h}from"./AuthenticationCard.7f1dbb8e.js";import{C as y}from"./Checkbox.ff4caefb.js";import{I as t}from"./InputLabel.35693fa5.js";import{P as w}from"./PrimaryButton.32e8849f.js";import{T as n}from"./TextInput.e0568515.js";import{I as o}from"./InputError.3524855f.js";import"./AuthenticationCardLogo.40eb9618.js";function F(){const m=p(),i=l(),r=c({name:"",email:"",password:"",password_confirmation:"",terms:!1});function d(a){a.preventDefault(),r.post(i("register"),{onFinish:()=>r.reset("password","password_confirmation")})}return s(h,{children:[e(u,{title:"Register"}),s("form",{onSubmit:d,children:[s("div",{children:[e(t,{htmlFor:"name",children:"Name"}),e(n,{id:"name",type:"text",className:"mt-1 block w-full",value:r.data.name,onChange:a=>r.setData("name",a.currentTarget.value),required:!0,autoFocus:!0,autoComplete:"name"}),e(o,{className:"mt-2",message:r.errors.name})]}),s("div",{className:"mt-4",children:[e(t,{htmlFor:"email",children:"Email"}),e(n,{id:"email",type:"email",className:"mt-1 block w-full",value:r.data.email,onChange:a=>r.setData("email",a.currentTarget.value),required:!0}),e(o,{className:"mt-2",message:r.errors.email})]}),s("div",{className:"mt-4",children:[e(t,{htmlFor:"password",children:"Password"}),e(n,{id:"password",type:"password",className:"mt-1 block w-full",value:r.data.password,onChange:a=>r.setData("password",a.currentTarget.value),required:!0,autoComplete:"new-password"}),e(o,{className:"mt-2",message:r.errors.password})]}),s("div",{className:"mt-4",children:[e(t,{htmlFor:"password_confirmation",children:"Confirm Password"}),e(n,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:r.data.password_confirmation,onChange:a=>r.setData("password_confirmation",a.currentTarget.value),required:!0,autoComplete:"new-password"}),e(o,{className:"mt-2",message:r.errors.password_confirmation})]}),m.props.jetstream.hasTermsAndPrivacyPolicyFeature&&e("div",{className:"mt-4",children:s(t,{htmlFor:"terms",children:[s("div",{className:"flex items-center",children:[e(y,{name:"terms",id:"terms",checked:r.data.terms,onChange:a=>r.setData("terms",a.currentTarget.checked),required:!0}),s("div",{className:"ml-2",children:["I agree to the",e("a",{target:"_blank",href:i("terms.show"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Terms of Service"}),"and",e("a",{target:"_blank",href:i("policy.show"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Privacy Policy"})]})]}),e(o,{className:"mt-2",message:r.errors.terms})]})}),s("div",{className:"flex items-center justify-end mt-4",children:[e(f,{href:i("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e(w,{className:g("ml-4",{"opacity-25":r.processing}),disabled:r.processing,children:"Register"})]})]})]})}export{F as default};