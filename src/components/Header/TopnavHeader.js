import React from 'react';
// import { FiSearch } from 'react-icons/fi';
// import { IoNotifications } from 'react-icons/io5';
// import { HiMail } from 'react-icons/hi';


function TopNavbar() {
    return (
      <div className="flex items-start justify-between gap-x-20 px-5 py-3 bg-[#879baa]">
        {/* Logo Section */}
        <div className="flex items-center gap-x-2">
          <div className="font-semibold text-white text-lg tracking-normal leading-normal">
            Control - CONTROL
          </div>
        </div>
  
        {/* Action Buttons Section */}
        <div className="flex items-start gap-x-8">
          {/* Help */}
          <div className="flex items-center gap-x-2">
            <img
              className="w-6 h-6"
              alt="Material symbols"
              src="https://c.animaapp.com/yO1I5klG/img/material-symbols-help.svg"
            />
            <div className="font-medium text-white text-base tracking-normal leading-normal">
              Help
            </div>
          </div>
  
          {/* Notification */}
          <div className="flex items-center gap-x-2">
            <img
              className="w-6 h-6"
              alt="Clarity notification"
              src="https://c.animaapp.com/yO1I5klG/img/clarity-notification-solid.svg"
            />
            <div className="font-medium text-white text-base tracking-normal leading-normal">
              Notification
            </div>
          </div>
  
          {/* User */}
          <div className="flex items-start gap-x-2">
            <div className="font-medium text-white text-base tracking-normal leading-normal">
              SuperAdmin
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default TopNavbar;