import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { InputField, InputTextarea, SubmitBtn } from "./";
import { SectionTitle } from "../";
import { slideIn } from "../../utils/motion";

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JerryHuang",
          message: form.message,
          from_email: form.email,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something want wrong.");
          }
        );
      });
  };
  return (
    <motion.form
      className='flex flex-col gap-2 flex-[0.75] rounded-2xl bg-sidemenu-light p-10 dark:bg-gray-700 dark:bg-opacity-40 md:p-[60px]'
      onSubmit={handleSubmit}
      variants={slideIn("left", "tween", 0.2, 1)}
    >
      <SectionTitle title={"get in touch"} subtitle={"contact."} />
      <InputField
        type={"text"}
        name={"name"}
        value={form.name}
        handleChange={handleChange}
        placeholderText={"Your Name"}
      />
      <InputField
        type={"email"}
        name={"email"}
        value={form.email}
        handleChange={handleChange}
        placeholderText={"Your Email"}
      />
      <InputTextarea
        name={"message"}
        value={form.message}
        handleChange={handleChange}
        placeholderText={"Message"}
      />
      <SubmitBtn loading={loading} />
    </motion.form>
  );
};

export default ContactForm;
