import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { getContacts } from "../api/contactsApi";
import type { Contact } from "../api/contactsApi";

function ContactsSection() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts()
      .then((data) => setContacts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Контакты
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {contacts.map((contact) => (
            <ContactCard key={contact.title} contact={contact} />
          ))}
        </div>

        <div className="mt-10 h-72 rounded-xl bg-gray-200 flex items-center justify-center">
          Карта больницы
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
