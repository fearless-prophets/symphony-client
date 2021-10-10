import React from 'react';

function SideBarOption({ title, Icon }) {
  return (
    <div className='sidebarOption'>
      <Icon className='sidebarOption__icon' />
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarOption;
