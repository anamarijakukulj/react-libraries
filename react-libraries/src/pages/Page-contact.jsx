import Title from "../components/Title";
import ContactForm from "../components/Form";
// import { Formik, Field, Form, ErrorMessage } from 'formik';

const ContactPage = () => {
  return (
    <section className="page">
      <Title title="contact" subTitle="form" />

      <div className="form-center">
        <p>Do you have questions? Feel free to write.</p>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
