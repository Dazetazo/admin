import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "../src/user";

//Pagina principal del admin

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);