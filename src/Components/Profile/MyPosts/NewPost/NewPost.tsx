import React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';

interface Values {
    postText: string;
}

type NewPostPropsType = {
    addPost: (value: string) => void
}


export const NewPost = React.memo((props: NewPostPropsType) => {
    return (
        <div>
            <Formik
                initialValues={{
                    postText: '',
                }}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {
                    props.addPost(values.postText)
                    values.postText=''
                    setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="postText">postText</label>
                    <Field id="postText" name="postText" placeholder="postText"/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
});
