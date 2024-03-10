import React, { useState } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import DropdownElement from '../Dropdown/Dropdown';

// function TopnavTab() {
//     const tabs = [
//         { label: "Home", icon: "https://c.animaapp.com/QX3g54hm/img/ic-round-home.svg", alt: "Ic round home", active: true },
//         { label: "Network Monitoring", icon: "https://c.animaapp.com/QX3g54hm/img/ph-share-network-fill.svg", alt: "Ph share network" },
//         { label: "Network Administrator", icon: "https://c.animaapp.com/QX3g54hm/img/el-wrench-alt.svg", alt: "El wrench alt" }, 
//         { label: "System Monitoring", icon: "https://c.animaapp.com/QX3g54hm/img/mdi-eye-circle.svg" },
//         { label: "System Administration", icon: "https://c.animaapp.com/QX3g54hm/img/eos-icons-admin.svg" }
//     ];

//   const [activeTabIndex, setActiveTabIndex] = useState(0); // Initially, Network Monitoring is active

//   return (
//     <div className="flex w-full border-b border-gray-200">
//       {tabs.map((tab, index) => (
//         <button 
//           key={index} 
//           className={`flex-none flex items-center gap-2 px-4 py-3 relative bg-white border-r border-gray-200 ${index === activeTabIndex ? 'active-tab-styles' : ''}`}
//           onClick={() => setActiveTabIndex(index)} // Update active state
//         >
//           <img
//             className="w-6 h-6"
//             alt={tab.alt}
//             src={tab.icon}
//           />
//           <div className={`font-medium text-sm ${index === activeTabIndex ? 'text-primary' : 'text-gray-600'}`}>
//             {tab.label}
//           </div>
//           {index === activeTabIndex && (
//             <div className="absolute w-full h-px bg-primary bottom-0 left-0"></div>
//           )}
//         </button>
//       ))}
//     </div>
//   );
// }


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function DropdownElement({ items, label, icon, alt, key }) {

    const [activeTabIndex, setActiveTabIndex] = useState(0); // Initially, Network Monitoring is active
    const [open, setOpen] = useState(false);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex-none flex items-center gap-2 px-4 py-3 relative bg-white border-r border-gray-200">
                    <img
                        className="w-6 h-6"
                        alt={alt}
                        src={icon}
                    />
                    <div className={`font-medium text-sm ${key === activeTabIndex ? 'text-primary' : 'text-gray-600'}`}>
                        {label}
                    </div>
                    {key === activeTabIndex && (
                        <div className="absolute w-full h-px bg-primary bottom-0 left-0"></div>
                    )}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>
    
            {/* Show dropdown content conditionally */}
            {items.length > 0 && ( 
                <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    {items.map((item) => (
                        <Menu.Item key={item.label}> 
                        {({ active }) => (
                            <a
                            href={item.href ? item.href : '#'} // Add an href attribute if you want an actual link
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            {item.label}
                            </a>
                        )}
                        </Menu.Item>
                    ))}
                    </div>
                </Menu.Items>
                </Transition>
            )}

        </Menu>
    );
}


function TopnavTab() {
    const tabs = [
        { label: "Home", icon: "https://c.animaapp.com/QX3g54hm/img/ic-round-home.svg", alt: "Ic round home", active: true },
        { 
            label: "Network Monitoring", 
            icon: "https://c.animaapp.com/QX3g54hm/img/ph-share-network-fill.svg", 
            alt: "Ph share network",
            dropdownItems: [ // Add 'dropdownItems' array
              { label: 'Operations' },
              { label: 'Devices' },
              { label: 'Settings' },
              { label: 'Identity Management', href: '/identity-portal' },
            ],
        },
        { label: "Network Administrator", icon: "https://c.animaapp.com/QX3g54hm/img/el-wrench-alt.svg", alt: "El wrench alt" }, 
        { label: "System Monitoring", icon: "https://c.animaapp.com/QX3g54hm/img/mdi-eye-circle.svg" },
        { label: "System Administration", icon: "https://c.animaapp.com/QX3g54hm/img/eos-icons-admin.svg" }
    ];

  return (
    <div className="flex w-full border-b border-gray-200">
        {tabs.map((tab, index) => (
        <DropdownElement 
            key={index} 
            items={tab.dropdownItems || []} 
            label={tab.label} // Pass the label
            icon={tab.icon} // Pass the icon
            alt={tab.alt} // Pass the alt text
        >
            {({ open }) => ( 
            <div className={`flex-none flex items-center gap-2 px-4 py-3 relative bg-white border-r border-gray-200 ${
                index === activeTabIndex ? 'active-tab-styles' : ''
            }`}
            onClick={() => setActiveTabIndex(index)}
            > 
            <img className="w-6 h-6" alt={tab.alt} src={tab.icon} />
            <div className={`font-medium text-sm ${index === activeTabIndex ? 'text-primary' : 'text-gray-600'}`}>
                {tab.label}
            </div>
            {index === activeTabIndex && (
                <div className="absolute w-full h-px bg-primary bottom-0 left-0"></div>
            )}
            <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 ${open ? 'rotate-180' : ''}` } aria-hidden="true" /> {/* Rotation for visual indication */}
            </div>
            )} 
        </DropdownElement>
        ))}
    </div>
  );
}
  
export default TopnavTab;