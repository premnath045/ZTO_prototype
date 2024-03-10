import React from 'react';
import TopNavbar from '../Header/TopnavHeader';
import TopnavTab  from '../Header/TopnavTab';
import BreadCrumbs from '../Header/Breadcrumbs';
import DropdownElement from '../Dropdown/Dropdown';

const AdminLayout = ({ children }) => {
  const urlPathLocation = window.location.pathname;
  return (
    <div className='d-flex flex-column flex-lg-row h-lg-full'>
      <TopNavbar />
      <TopnavTab />
      <BreadCrumbs />
      <div className='flex-lg-1 h-screen overflow-y-lg-auto'>
        {
          urlPathLocation === '/briefs/create-new-briefs' ||
          urlPathLocation === '/briefs/create-new-briefs-next'
        }
        <div className={'content'}>{children}</div>
      </div>

    </div>
  );
};
export default AdminLayout;
