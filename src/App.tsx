import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./user";
import { PostList, PostEdit, PostCreate } from "./posts";
import { Dashboard } from "./dashboard";
import { authProvider } from "../src/Providers/authProvider";

//Icons
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";


//Pagina principal del admin

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
    {/* El componente Resource es el que define los recursos que se van a mostrar en la aplicación */}
    {/*Posts es el nombre del recurso, list es el componente que muestra el listado de publicaciones, edit es el componente que permite editar una publicación, create es el componente que permite crear una nueva publicación, icon es el icono que se muestra en la barra lateral*/}
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    {/*Users es el nombre del recurso, list es el componente que muestra el listado de usuarios, show es el componente que muestra los detalles de un usuario, icon es el icono que se muestra en la barra lateral*/}
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      icon={UserIcon}
    />
        
  </Admin>
);