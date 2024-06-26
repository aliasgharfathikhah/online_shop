import { List, Datagrid, TextField, EmailField, BooleanField, NumberField, SearchInput} from "react-admin";
import { Show, SimpleShowLayout, DateField,ImageField,ImageInput} from 'react-admin';
import { Edit, SimpleForm, TextInput, PasswordInput,DateTimeInput, required, NumberInput, BooleanInput, ArrayInput, SimpleFormIterator } from 'react-admin';
import { Create , Filter} from 'react-admin';

const UserFilter = [
        <SearchInput source="q" alwaysOn />,
        <TextInput label="Filter by Username" source="username" />,
        <BooleanInput label="Is Staff?" source="is_staff" />,
        <BooleanInput label="Is Active?" source="is_active" />,
        <TextInput label="Filter by First Name" source="first_name" />,
        <TextInput label="Filter by Last Name" source="last_name" />,
        <TextInput label="Filter by Email" source="email" />,
];

export const UserList = () => (
    <List filters={UserFilter}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="username" />
            <ImageField source="profile_image"  sx={{ '& img': { maxWidth: 40, maxHeight: 40, objectFit: 'contain' } }}/>
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <BooleanField source="is_staff" />
            <BooleanField source="is_active" />
        </Datagrid>
    </List>
);


export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField source="profile_image"  sx={{ '& img': { maxWidth: 85, maxHeight: 85, objectFit: 'contain' } }}/>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            <DateField source="last_login" />
            <DateField source="date_joined" />
            <BooleanField source="is_superuser" />
            <BooleanField source="is_staff" />
            <BooleanField source="is_active" />
        </SimpleShowLayout>
    </Show>
);


export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <ImageField source="profile_image" title="Last Image" />
            <ImageInput source="profile_image">
                <ImageField source="src" title="Preview" />
            </ImageInput>
            <NumberInput disabled label="Id" source="id" />
            <TextInput label="Username" source="username" validate={required()} />
            <PasswordInput source="password" ></PasswordInput>
            <TextInput label="First Name" source="first_name" validate={required()} />
            <TextInput label="Last Name" source="last_name" validate={required()} />
            <TextInput label="Email" source="email" type="email" validate={required()} />
            <BooleanInput label="Superuser" source="is_superuser" />
            <BooleanInput label="Staff" source="is_staff" />
            <BooleanInput label="Active" source="is_active" />
            <DateTimeInput label="Last login" source="last_login" />
            <DateTimeInput label="Date Joined" source="date_joined" />
        </SimpleForm>
    </Edit>
);


export const UserCreate = () => (
    <Create >
        <SimpleForm>
            <ImageInput source="profile_image">
                <ImageField source="src" title="Preview" />
            </ImageInput>
            <TextInput label="Username" source="username" validate={required()} />
            <PasswordInput label="Password" source="password" validate={required()} />
            <TextInput label="First Name" source="first_name" validate={required()} />
            <TextInput label="Last Name" source="last_name" validate={required()} />
            <TextInput label="Email" source="email" validate={required()} type="email" />
            <BooleanInput label="Superuser" source="is_superuser" />
            <BooleanInput label="Staff" source="is_staff" />
            <BooleanInput label="Active" source="is_active" />
        </SimpleForm>
    </Create>
);
