import { List, Datagrid, TextField, EmailField, BooleanField, NumberField, RichTextField,ImageField,ImageInput} from "react-admin";
import { Show, SimpleShowLayout, DateField} from 'react-admin';
import { Edit, SimpleForm, TextInput, PasswordInput, DateInput,DateTimeInput, required, NumberInput, BooleanInput, ArrayInput, SimpleFormIterator } from 'react-admin';
import { Create , Filter, SearchInput,SelectInput, ReferenceInput,ReferenceField} from 'react-admin';

const CategoryFilter = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Filter by Name" source="name" />,
    <ReferenceInput source="parent_category" reference="categories" label="Filter by Parent Category" />,
];


export const CategoryList = () => (
    <List filters={CategoryFilter}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <ImageField source="image" title="Last Image" sx={{ '& img': { maxWidth: 40, maxHeight: 40, objectFit: 'contain' } }}/>
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
            <ImageField source="image" title="Last Image"/>
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
            <ImageField source="image" title="Last Image" />
            <ImageInput source="image" minSize={5000} placeholder="Drop a picture to upload, or click to select it and update last picture">
                <ImageField source="src" title="New Image" />
            </ImageInput>
            <ReferenceInput label="Parent Category" source="parent_category" reference="categories"/>
            <DateTimeInput label="Updated at" source="updated_at" />
            <DateTimeInput label="Create at" source="created_at" />
        </SimpleForm>
    </Edit>
);


export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput label="Name" source="name" />
            <ImageField source="image" title="Last Image" />
            <ImageInput source="image" minSize={5000} placeholder="Drop a picture to upload, or click to select it and update last picture">
                <ImageField source="src" title="New Image" />
            </ImageInput>
            <TextInput multiline source="description" />
            <ReferenceInput label="Parent Category" source="parent_category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);