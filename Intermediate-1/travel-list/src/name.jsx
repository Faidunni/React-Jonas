function Stats() {
  const [formData, setFormData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleAddDetails(data) {
    setFormData((formData) => [...formData, data]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newInfo = { name, email };
    console.log(newInfo);
    handleAddDetails(newInfo);
    setEmail("");
    setName("");
  }
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X(X%)</em>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {formData.map((form, index) => (
          <div key={index}>
            <li>
              <strong>Name:</strong>
              {form.name}
            </li>
            <li>
              <strong>Email:</strong>
              {form.email}
            </li>
          </div>
        ))}
      </ul>
    </footer>
  );
}
