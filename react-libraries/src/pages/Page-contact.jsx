import Title from "../components/Title";
import Form from "../components/Form";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ContactForm = () => {
  return (
    <section className="page">
      <Title title="contact" subTitle="form" />

      <div className="form-center">
        <p>Do you have questions? Feel free to write.</p>

        <Form />
      </div>
    </section>
  );
};

export default ContactForm;
