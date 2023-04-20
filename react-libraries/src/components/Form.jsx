import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function ContactForm() {
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
               errors.name = 'Must be 15 characters or less without numbers and special characters';
             }

             if (!values.email) {
               errors.email = 'Required';
             } else if (
               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
             ) {
               errors.email = 'invalid email address';
             }

             if (!values.message) {
               errors.message = 'Required';
             } else if (
               !/^[A-Z0-9.-_]{2,50}$/i.test(values.message)
             ) {
               errors.message = 'Must be 50 characters or less';
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

                <label htmlFor="message">Message</label>
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
