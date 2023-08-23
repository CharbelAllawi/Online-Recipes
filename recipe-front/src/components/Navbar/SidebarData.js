import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/landing',
    icon: <IoIcons.IoIosHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Recipe',
    path: '/addrecipe',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Shopping List',
    path: '/shopping',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <IoIcons.IoMdCalendar />,
    cName: 'nav-text'
  },

  {
    title: 'Sign Out',
    path: '/',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  }
];
