import {
    SimpleForm,
    TextInput,
    Create,
} from "react-admin";

// Componente para crear una nueva publicación

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="name"/>
    </SimpleForm>
  </Create>
);