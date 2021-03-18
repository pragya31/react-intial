import React from 'react';

const UserManagement = React.lazy(() => import('../components/ui/User/userManagement'));
const Dashboard = React.lazy(() => import('../components/ui/Dashboard/dashboard'));
const SubAdmin = React.lazy(()=>import('../components/ui/SubAdmin/subAdmin'));




const routes = [
    {path: '/', exact: true, name: 'Home', component: Dashboard},
    {path: '/user_management', name: 'User Management', component: UserManagement},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard },
    {path: '/sub_admin', name: 'Sub Admin', component: SubAdmin},
    


]

export default routes