import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Work from '../components/Work/Work';

const routeConfig = [
  {
    id: 'home',
    component: Home,
    path: '/'
  },
  {
    id: 'about',
    component: About,
    path: '/about'
  },
  {
    id: 'work',
    component: Work,
    path: '/work'
  },
  {
    id: 'blog',
    component: Blog,
    path: '/blog'
  },
  {
    id: 'contact',
    component: Contact,
    path: '/contact'
  }
];

export default routeConfig;
