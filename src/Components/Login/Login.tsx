import * as React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import s from './Login.module.css'
import * as Yup from 'yup';
import {useAppDispatch} from "../../redux/hooks";
import {logInTC} from "../../redux/reducers/auth-reduser";

type Values = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password should be more then 8 symbols')
        .max(50, 'Too Long!')
        .required('Password is required'),
});

export const Login = () => {
    const dispatch = useAppDispatch()
    return (
        <div className={s.login}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                }}
                validationSchema={LoginSchema}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>) => {
                    dispatch(logInTC(values.email, values.password, values.rememberMe))
                    setSubmitting(false);
                }}
            >
                {
                    ({errors, touched}) => {
                        return <Form className={s.form}>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="john@acme.com"
                                type="email"
                            />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="Doe"/>
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                            <button type="submit">Submit</button>
                        </Form>
                    }
                }
            </Formik>
        </div>
    );
};

