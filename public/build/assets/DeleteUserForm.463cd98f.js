import{u as f,r as c,W as y,a as r,j as o,c as w}from"./app.c9439412.js";import{A as h}from"./Modal.b6390a9a.js";import{D as i}from"./DangerButton.89e85d80.js";import{D as n}from"./DialogModal.a53d9328.js";import{T as D}from"./TextInput.fd36ebb6.js";import{I as g}from"./InputError.a89d4509.js";import{S as x}from"./SecondaryButton.d4ed6404.js";import"./SectionTitle.67ad0806.js";import"./transition.f37319d1.js";function j(){const u=f(),[d,a]=c.exports.useState(!1),e=y({password:""}),l=c.exports.useRef(null);function m(){a(!0),setTimeout(()=>{var t;return(t=l.current)==null?void 0:t.focus()},250)}function p(){e.delete(u("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>s(),onError:()=>{var t;return(t=l.current)==null?void 0:t.focus()},onFinish:()=>e.reset()})}function s(){a(!1),e.reset()}return r(h,{title:"Delete Account",description:"Permanently delete your account.",children:[o("div",{className:"max-w-xl text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."}),o("div",{className:"mt-5",children:o(i,{onClick:m,children:"Delete Account"})}),r(n,{isOpen:d,onClose:s,children:[r(n.Content,{title:"Delete Account",children:["Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.",r("div",{className:"mt-4",children:[o(D,{type:"password",className:"mt-1 block w-3/4",placeholder:"Password",value:e.data.password,onChange:t=>e.setData("password",t.currentTarget.value)}),o(g,{message:e.errors.password,className:"mt-2"})]})]}),r(n.Footer,{children:[o(x,{onClick:s,children:"Cancel"}),o(i,{onClick:p,className:w("ml-2",{"opacity-25":e.processing}),disabled:e.processing,children:"Delete Account"})]})]})]})}export{j as default};