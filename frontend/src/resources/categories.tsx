import { List, Datagrid, TextField, EmailField, BooleanField, NumberField, RichTextField} from "react-admin";
import { Show, SimpleShowLayout, DateField} from 'react-admin';
import { Edit, SimpleForm, TextInput, PasswordInput, DateInput,DateTimeInput, required, NumberInput, BooleanInput, ArrayInput, SimpleFormIterator } from 'react-admin';
import { Create , Filter, SearchInput,SelectInput, ReferenceInput,ReferenceField} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const CategoryFilter = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Filter by Name" source="name" />,
    <DateInput label="Filter by Created time" source="created_at" />,
    <DateInput label="Filter by Updated time" source="updated_at" />,
    <NumberInput label="Filter by Parent Category" source="parent_category" />,
];


export const CategoryList = () => (
    <List filters={CategoryFilter}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField aria-multiline source="description" />
            <ReferenceField source="parent_category" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="updated_at" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);


export const CategoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField aria-multiline source="description" />
            <ReferenceField source="parent_category" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="updated_at" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);


export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput disabled label="Id" source="id" />
            <TextInput label="Name" source="name" />
            <RichTextField aria-multiline source="description" />
            <ReferenceInput label="Parent Category" source="parent_category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateTimeInput label="Updated at" source="updated_at" />
            <DateTimeInput label="Create at" source="created_at" />
        </SimpleForm>
    </Edit>
);


export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput label="Name" source="name" />
            <TextInput multiline source="description" />
            <ReferenceInput label="Parent Category" source="parent_category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);