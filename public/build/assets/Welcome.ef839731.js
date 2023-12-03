import{u as d,a as r,F as o,j as e,b as n,d as s}from"./app.c9439412.js";import{u}from"./useTypedPage.94cb41ed.js";import{A as c}from"./AuthenticationCardLogo.7e97783f.js";function p({canLogin:a,canRegister:i,laravelVersion:m,phpVersion:h}){const t=d(),l=u();return r(o,{children:[e(n,{title:"Welcome"}),r("div",{className:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white",children:[a?e("div",{className:"sm:fixed sm:top-0 sm:right-0 p-6 text-right",children:l.props.auth.user?e(s,{href:t("dashboard"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Dashboard"}):r(o,{children:[e(s,{href:t("login"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Log in"}),i?e(s,{href:t("register"),className:"ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Register"}):null]})}):null,e("div",{className:"max-w-7xl mx-auto p-6 lg:p-8",children:e(c,{})})]})]})}export{p as default};
