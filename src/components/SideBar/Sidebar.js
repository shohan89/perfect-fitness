import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  return (
      <div className="side-bar">
        {/* Name area  */}
        <div className="nameArea">
          <img className='avatar' src="img_avatar.png" alt="" />
          <div className="name">
            <h4>Md Sharoar Hossain</h4>
            <p>Rajshahi, Bangladesh</p>
          </div>
        </div>
        {/* Name area end  */}
      </div>
  );
};

export default Sidebar;