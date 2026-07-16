import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import { getContacts } from "../api/contactsApi";
import type { Contact } from "../api/contactsApi";

function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800">Контакты</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>

        <div className="mt-10 h-72 bg-gray-200 rounded-xl flex items-center justify-center">
          Карта больницы
        </div>
      </div>
    </section>
  );
}

export default Contacts;
