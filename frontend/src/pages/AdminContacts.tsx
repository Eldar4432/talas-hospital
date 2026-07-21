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
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Управление контактами
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            Редактируйте заголовки и значения контактов для отображения на
            сайте.
          </p>
        </div>

        <div className="space-y-5">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Название контакта
                </label>
                <input
                  className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
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
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Значение
                </label>
                <textarea
                  className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
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
                  rows={3}
                />
              </div>

              <button
                onClick={() => updateContact(contact)}
                className="inline-flex items-center rounded-2xl bg-blue-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-900"
              >
                Сохранить
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminContacts;
