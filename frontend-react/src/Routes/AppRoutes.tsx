import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../Layouts/Layout";
 
const Home = lazy(() => import('../Pages/Home'));
const Register = lazy(() => import('../Pages/Register'));
const Login = lazy(()=> import('../Pages/LoginPage'));


const AppRoutes  = () => {
return(
    <Router>
        <Layout>
        <Suspense fallback={<div>Loading .... </div>}>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            
        </Routes>
        
        </Suspense>
      </Layout>
    </Router>
 );
};

export default AppRoutes;