import { Field, Form, Formik } from "formik";

export const MaterialsEditorForm = ({ onSubmit }) => {
    const handleSubmit = async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
    };
    
    return (
        <Formik
        initialValues={{ title: '', link: '' }}
        onSubmit={handleSubmit} >
            {({ isSubmitting }) => {
                console.log(isSubmitting);
                return (
                <Form>
                <label>
                    Description
                    <Field name="title" type="text" />
                </label>
                <label>
                    Link
                    <Field name="link" type="url" />
                </label>
                <button type="submit" disabled={isSubmitting}>Add material</button>
            </Form>
            )}}
        </Formik>
    )
};