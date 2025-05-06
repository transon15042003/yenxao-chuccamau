import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-white bg-primary-dark-gradient-360">
      <div className="flex items-center justify-center min-h-[200px]">Footer</div>
      <div className="text-center py-10">
        © Copyright {new Date().getFullYear()}, All Rights Reserved by Techbee
      </div>
    </footer>
  );
};

export default Footer;
