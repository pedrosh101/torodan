import { sendContactForm } from "@/lib/api";
import { useState } from "react";

const initValues = { name: "", email: "", message: "" };
const error = ""

const initState = { values: initValues, error };

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

      }));
    }
  };

  return (
    <form className="flex flex-col font-avenirbook text-clr4">

      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        required
        onChange={handleChange}
        className="text-black"
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        className="text-black"
      />

      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        rows={6}
        name="message"
        value={values.message}
        onChange={handleChange}
         className="text-black"
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
