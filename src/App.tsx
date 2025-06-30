import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./user";
import { PostList, PostEdit, PostCreate } from "./posts";

//Pagina principal del admin

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/> {/* PostEdit permite editar los posts */}
    <Resource name="users" list={UserList} show={ShowGuesser}  /> {/* ShowGuesser muestra los detalles de un usuario al hacer click en su nombre */}
  </Admin>
);