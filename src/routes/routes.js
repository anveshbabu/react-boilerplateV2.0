
const routers = [

    {
      component: 'AuthLayout',
      path: '/login',
      auth: false,
      exact: false,
      childrens: [
        {
          component: "Login",
          path: "/",
          auth: false,
          exact: true,
        },
      ]
    },
    {
      component: 'AdminLayout',
      path: '/',
      auth: false,
      exact: false,
      childrens: [
       {
          component: "Dashboard",
          path: "/",
          auth: false,
          exact: true,
        },
      ]
    },
    

    {
      component: 'AdminLayout',
      path: '/services',
      auth: false,
      exact: false,
      childrens: [
       {
          component: "Services",
          path: "/",
          auth: false,
          exact: true,
        },
      ]
    },
    
  
  
    {
      component: 'AdminLayout',
      path: '/users',
      auth: false,
      exact: false,
      childrens: [
       {
          component: "Users",
          path: "/",
          auth: false,
          exact: true,
        },
      ]
    },
  
  
  
  
    {
      component: "Adminlayout",
      path: "user",
      auth: false,
      exact: false,
      childrens: [
        {
          component: "Users",
          path: "/",
          auth: false,
          exact: true
        }
  
      ]
    },
  
  
  
  
  
  
  
  
  
  
  
  
  
    //dev layout
  
    {
      component: "Adminlayout",
      path: "/devLayout",
      redirect: "/devLayout/components/",
      auth: false,
      exact: false,
      childrens: [
        {
          component: "commonComponentsExample",
          path: "/",
          auth: false,
          exact: true
        }
      ]
    }
  
  
  
  ];
  export default routers;
  
  