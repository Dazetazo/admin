import {
    List,
    DataTable,
    ReferenceField,
    EditButton,
    ReferenceInput,
    TextInput,
} from "react-admin";

// Filtros para el listado de publicaciones

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];


// Componente para mostrar el listado de publicaciones

export const PostList = () => (
    <List filters={postFilters} sort={{ field: "id", order: "ASC" }}>
        <DataTable rowClick={false}>
            <DataTable.Col source="id" />
            <DataTable.Col source="userId">
                <ReferenceField source="userId" reference="users" link="show" />
            </DataTable.Col>
            <DataTable.Col source="title" />
            <DataTable.Col>
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);