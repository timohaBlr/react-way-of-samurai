import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";

interface Values {
    messageText: string;
}

type NewMessagePropsType = {
    addMessage: (message: string) => void
}

export const NewMessage:React.FC<NewMessagePropsType> = (props) => {

    return <div>
        <Formik
            initialValues={{
                messageText: '',
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                props.addMessage(values.messageText)
                values.messageText = ''
                setSubmitting(false);
            }}
        >
            <Form>
                <label htmlFor="messageText">messageText</label>
                <Field id="messageText" name="messageText" placeholder="messageText"/>

                <button type="submit">Add message</button>
            </Form>
        </Formik>
    </div>
}