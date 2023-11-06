import React from 'react';

const UserLayout = React.lazy(() => import('../pages/UserLayout'));

//Website
const LazyHome = React.lazy(() => import('../pages/Home'));


const Menuitem =  [
    {
      name: 'Home',
      path: '/',
      layout: UserLayout,
      component: LazyHome,
      children: [],
      isProtected: 0,
    },
   
   
  ];
  
  export default Menuitem;