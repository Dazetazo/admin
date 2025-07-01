import {
    Edit,
    SimpleForm,
    TextInput,
} from "react-admin";


export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <TextInput source="email" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);