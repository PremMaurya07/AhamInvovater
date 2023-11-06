import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menuitem from './Menuitem';

const PrivateRoute = ({ element: Element,name,...rest }) => {

  const {success } = useSelector((state) => state.auth);
  return success  ? <React.Suspense fallback={<>Loading...</>}><Element {...rest} name={name} /> </React.Suspense>: <Navigate to="/admin/login" />;
};

const NotFound = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <h2>Page Not Found</h2>
      {/* <button onClick={() => navigate('/')}>Go to Home</button> */}
    </div>
  );
};


const RoutesConfig = () => {
  return (
    <Routes>
    {Menuitem.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={route.isProtected==1 ? <PrivateRoute element={route.layout} name={route.name} /> : <React.Suspense fallback={<>Loading...</>}><route.layout name={route.name} /></React.Suspense> } >
       <Route index element={<React.Suspense fallback={<div>Loading...</div>}><route.component /></React.Suspense>} />
        {route.children.map((childRoute, childIndex) => (
          <Route
            key={childIndex}
            path={childRoute.path}
            element={childRoute.isProtected==1 ? (
              <PrivateRoute element={childRoute.component} name={childRoute.name} />
            ) : (
              <React.Suspense fallback={<>Loading...</>}><childRoute.component name={childRoute.name} /></React.Suspense>
            )}
          />
        ))}
      </Route>
    ))}
     <Route path="*" element={<NotFound />} />
  </Routes>
  
  );
};

export default RoutesConfig