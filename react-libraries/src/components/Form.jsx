import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function Form() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: ''}}
      validate={values => {
          const errors = {};
          if (!values.name) {
               errors.email = 'Required';
             } else if (
               !/^[A-Z]{2,15}$/i.test(values.name)
             ) {
               errors.name = 'Please write yout name';
             }

             if (!values.email) {
               errors.email = 'Required';
             } else if (
               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
             ) {
               errors.email = 'Invalid email address';
             }

             if (!values.message) {
               errors.message = 'Required';
             } else if (
               !/^[A-Z0-9.-_]{2,50}$/i.test(values.message)
             ) {
               errors.message = 'Please write yout message';
             }

             return errors;
           }}

           onSubmit={(values, { resetForm }) => {
             setTimeout(() => {
               alert(JSON.stringify(values, null, 2));
               resetForm();
             }, 400);
           }}
         >

           {({ isSubmitting }) => (
             <Form>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />

                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />

                <label htmlFor="message">Email</label>
                <Field type="text" as="textarea" id="message" name="message" />
                <ErrorMessage name="message" component="div" />
                
                <button type="submit" className="btn" disabled={isSubmitting}>
                  Submit
                </button>
             </Form>
           )}
         </Formik>
  )
}
