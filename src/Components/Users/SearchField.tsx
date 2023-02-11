import React from 'react';
import {Form, Formik, FormikHelpers, Field} from 'formik';
import {useAppDispatch} from "../../redux/hooks";
import { setUsersTC} from "../../redux/reducers/users/users-reducer";
import {setFilterAC} from "../../redux/reducers/users/actions";

type Values = {
    findUser: string
    onlyFriends: string
}

export const SearchField = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <h3>Find user</h3>
            <Formik
                initialValues={{
                    findUser: '',
                    onlyFriends: 'null',
                }}

                onSubmit={(
                    (values: Values, {setSubmitting}: FormikHelpers<Values>
                    ) => {
                        dispatch(setFilterAC(values))
                        /**
                         * hardcode values!!
                         */
                        dispatch(setUsersTC(5, 1, values))
                        setSubmitting(false)
                    }
                )}
            >
                <Form>
                    <label htmlFor={'findUser'}>findUser</label>
                    <Field id='findUser' name='findUser' placeholder='Find...'/>
                    <button type={'submit'}>Find</button>
                    <label htmlFor={'onlyFriends'}>Friends only</label>
                    <Field name="onlyFriends" as='select'>
                        <option value="null">All</option>
                        <option value="true" datatype={'boolean'}>Friends</option>
                        <option value="false">Not Friends</option>
                    </Field>
                </Form>
            </Formik>
        </div>
    );
};
