import { render, screen, fireEvent, getByLabelText, getByText, findByText } from '@testing-library/react';
import ContactForm from './components/Form';

describe('ContactForm', () => {
  test('check all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Name'));
    expect(screen.getByLabelText('Email'));
    expect(screen.getByLabelText('Message'));
  });

  test('fill out the form', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');

    fireEvent.change(nameInput, {target: {value:'Raven Rose'}});
    fireEvent.change(emailInput, {target: {value:'mail@mail.com'}});
    fireEvent.change(messageInput, {target: {value:'Test Test'}});
    fireEvent.click(screen.getByText('Submit'));

    const successMessage = await findByText({"name": "Raven Rose", "email": "mail@mail.com", "message": "Test Test"});
    expect(successMessage).toBeInTheDocument();
  });

  test('fill out invalid input', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');

    fireEvent.change(nameInput, {target: {value:'1243265436'}});
    fireEvent.change(emailInput, {target: {value:'invalid input'}});
    fireEvent.change(messageInput, {target: {value:'Test Test'}});
    fireEvent.click(screen.getByText('Submit'));

    const nameError = await findByText('Must be 15 characters or less without numbers and special characters');
    expect(nameError).toBeInTheDocument();
    const emailError = await findByText('invalid email address');
    expect(emailError).toBeInTheDocument();
    const messageError = await findByText('Must be 50 characters or less');
    expect(messageError).toBeInTheDocument();
  })
})
