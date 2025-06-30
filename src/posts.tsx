import { List, DataTable, ReferenceField, EditButton } from "react-admin";

// Componente para mostrar el listado de publicaciones

export const PostList = () => (
    <List>
        <DataTable rowClick={false}>
            <DataTable.Col source="id" />
            <DataTable.Col source="userId">
                <ReferenceField source="userId" reference="users" />
            </DataTable.Col>
            <DataTable.Col source="title" />
            <DataTable.Col>
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);