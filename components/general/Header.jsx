import { MenuOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Drawer, Popover } from 'antd';
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react';
import LinkComponent from './LinkComponent';

export const Header = () => {
  const route = useRouter();
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];
  const [sidebar, setsidebar] = useState(false);
  const toggleSidebar = () => {
    setsidebar(!sidebar);
  };
  return (
    <header className="mx-auto flex justify-between lg:p-3 py-3 px-2 items-center w-full z-0  ">
      <div className="left w-1/2 lg:w-1/6 flex justify-between items-center normalText pointer-events-none ">
        <p>FerOFF</p>
        <motion.p
          animate={{
            textDecorationLine: 'underline',
            transition: { duration: 5 },
          }}
          initial={{ textDecorationLine: 'none' }}
          className=" underline-offset-4 normalText font-medium pointer-events-none "
        >
          Web Developer
        </motion.p>
      </div>
      <div className="right  flex justify-end lg:justify-start items-center w-1/4 ">
        {/* <MoreOutlined className="text-2xl" /> */}
        <LayoutGroup transition={{ duration: 2 }}>
          <ul className="justify-between  py-4 hidden lg:flex">
            {links.map((link) => (
              <LinkComponent key={link.path} href={link.path}>
                <div className="relative">
                  <span className=""> {link.name}</span>
                  {route.pathname === link.path && (
                    <motion.div
                      layoutId="header"
                      className="underline "
                      initial={false}
                    />
                  )}
                </div>
              </LinkComponent>
            ))}
          </ul>
        </LayoutGroup>
        <button onClick={toggleSidebar} className="lg:hidden">
          <MenuOutlined className="text-2xl text-cYellow" />
        </button>
      </div>
      <Drawer
        visible={sidebar}
        onClose={toggleSidebar}
        size="default"
        headerStyle={{
          backgroundColor: '#f4f4f4',
        }}
        drawerStyle={{
          backgroundColor: '#f4f4f4',
        }}
      >
        <div className="flex flex-col">
          {links.map((link) => (
            <LinkComponent
              key={link.path}
              onClick={() => toggleSidebar()}
              href={link.path}
            >
              {link.name}
            </LinkComponent>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

const Options = () => {
  return (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
};
