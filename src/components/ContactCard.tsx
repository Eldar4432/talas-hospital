type Contact = {
  title: string;
  value: string;
};

function ContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-bold text-blue-700">{contact.title}</h3>

      <p className="mt-3 text-gray-600">{contact.value}</p>
    </div>
  );
}

export default ContactCard;
