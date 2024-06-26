type NavLink = {
    title: string;
    path: string;
  };
  
  const navLinks: NavLink[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/#about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },

  ];
  
  export default navLinks;
  