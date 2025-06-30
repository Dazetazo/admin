import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./user";
import { PostList } from "./posts";

//Pagina principal del admin

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
  </Admin>
);