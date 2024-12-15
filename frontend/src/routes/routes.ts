import Home from '../pages/Home';
import AddProductos from '../pages/AddProductos';
import ProductosDetails from '../pages/AddProductos';
import Favorites from '../pages/Favorites';
import RegisterUser from '../pages/RegisterUser';
import UsersList from '../pages/UsersList';

interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/add-productos', component: AddProductos },
  { path: '/productos/:id', component: ProductosDetails },
  { path: '/favorites', component: Favorites },
  { path: '/register-user', component: RegisterUser },
  { path: '/users', component: UsersList },
];

export default routes;