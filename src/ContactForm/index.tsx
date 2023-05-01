import { sendContactForm } from "@/lib/api";
import { useState } from "react";

const initValues = { name: "", email: "", message: "" };

const initState = { values: initValues };

function ContactForm() {
  const [state, setState] = useState(initState);

  const { values, error } = state;

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return (
    <form>
      {error && <h1>erro pirata</h1>}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        required
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        rows={4}
        name="message"
        value={values.message}
        onChange={handleChange}
      ></textarea>

      <button
        disabled={!values.name || !values.email || !values.message}
        type="submit"
        onClick={onSubmit}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
