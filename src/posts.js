import React from 'react';
import { Filter, List, DisabledInput, 
         Edit, SimpleForm, ReferenceInput, 
         SelectInput, TextInput, LongTextInput, 
         Create, SimpleList, TextField, ReferenceField,
         EditButton, Responsive, Datagrid } from 'react-admin';

//POST list
//responsible for displaying list of data
export const PostList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

//POST EDIT
//responsible for EDITING DATA
export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}> 
        <SimpleForm>
           <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

//POST CREATE
//responsible for creating data
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

// POST FILTER 
//filter options at search bar
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
