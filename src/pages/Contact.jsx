import { useEffect } from "react";
import ContactForm from "../components/ui/ContactForm";
import PageHeader from "../components/ui/PageHeader";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Sadaf Shahab Portfolio";
  }, []);
  return (
    <div>
      <PageHeader home={"Home"} page={"Contact"} link={"/contact"} />
      <ContactForm />
    </div>
  );
};

export default Contact;
