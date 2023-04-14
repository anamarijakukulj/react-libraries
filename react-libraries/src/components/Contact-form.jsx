import { Formik, Form, Field, ErrorMessage } from "formik";
import Title from "./Title";

export default function ContactForm() {
  return (
    <>
      <Title title="contact" subTitle="form" />
      <p>Do you have any questions?</p>

      <Formik
       initialValues={{ name: '', email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         } else if (
           !/^[A-Z]{2,12}$/i.test(values.name)
         ) {
           errors.name = 'Please write your name';
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
           !/^[A-Z]{2,50}$/i.test(values.message)
         ) {
           errors.message = 'Please write a message';
         }
         return errors;
       }}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
        {({ isSubmitting }) => (
         <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email">Name</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="message">Name</label>
            <Field type="text" id="message" name="message" as="textarea" placeholder="Message" />
            <ErrorMessage name="message" component="div" />

            <button type="submit" className="btn" disabled={isSubmitting}>Submit</button>
         </Form>
       )}

     </Formik>
    </>
  )
}
