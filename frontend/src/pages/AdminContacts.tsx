import { useEffect, useState } from "react";
import { api } from "../api/api";

interface Contact {
  id: number;
  title: string;
  value: string;
}

function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const loadContacts = async () => {
    const res = await api.get("/contacts");

    setContacts(res.data);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const updateContact = async (contact: Contact) => {
    await api.put(`/contacts/${contact.id}`, {
      title: contact.title,
      value: contact.value,
    });

    loadContacts();
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Управление контактами</h1>

      <div className="space-y-5">
        {contacts.map((contact) => (
          <div key={contact.id} className="border p-5 rounded">
            <input
              className="border p-2 w-full mb-3"
              value={contact.title}
              onChange={(e) => {
                setContacts(
                  contacts.map((item) =>
                    item.id === contact.id
                      ? {
                          ...item,
                          title: e.target.value,
                        }
                      : item,
                  ),
                );
              }}
            />

            <textarea
              className="border p-2 w-full"
              value={contact.value}
              onChange={(e) => {
                setContacts(
                  contacts.map((item) =>
                    item.id === contact.id
                      ? {
                          ...item,
                          value: e.target.value,
                        }
                      : item,
                  ),
                );
              }}
            />

            <button
              onClick={() => updateContact(contact)}
              className="mt-3 bg-blue-700 text-white px-5 py-2 rounded"
            >
              Сохранить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminContacts;
