import { useEffect, useState } from 'react';
import { firebaseConfig } from './Configs/firebaseConfig';
import { FirebaseDataProvider } from 'react-admin-firebase';
import { Admin, Resource, ShowGuesser, radiantLightTheme, radiantDarkTheme } from "react-admin";
import { Dashboard } from "./dashboard";
import { authProvider } from "../src/Providers/authProvider";
//Posts
import { PostList } from "./Posts/posts-list";
import { PostEdit } from "./Posts/posts-edit";
import { PostCreate } from "./Posts/posts-create";
//Users
import { UserList } from "./Users/users-list";
import { UserCreate } from './Users/users-create';
import { UserEdit } from './Users/users-edit';



//Icons
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";



//Pagina principal del admin

export const App = () => {
  const [dataProvider, setDataProvider] = useState<any>(null);
  useEffect(() => {
  const init = async () => {
    const options = {
      logging: true,
      persistence: 'local' as const,
      lazyLoading: { enabled: true },
      watch: ['posts', 'users'],
    };
    const dp = await FirebaseDataProvider(firebaseConfig, options);
    setDataProvider(() => dp);
  };
  init();
}, []);
  
  if (!dataProvider) return <div>Cargando...</div>;

  return (
    <Admin 
      dataProvider={dataProvider} 
      dashboard={Dashboard} 
      authProvider={authProvider}
      theme={radiantLightTheme}
      darkTheme={radiantDarkTheme}
      >
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
        create={UserCreate} 
        edit={UserEdit}
        icon={UserIcon}
      />
    </Admin>
  );
};