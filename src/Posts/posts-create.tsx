import {
    SimpleForm,
    ReferenceInput,
    TextInput,
    Create,
} from "react-admin";

// Componente para crear una nueva publicación

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);