function TextInput({ onTextChange }) {
  function handleChange(event) {
    onTextChange(event.target.value);
  }

  return (
    <div>
      <label>Event / Context (optional)</label>
      <textarea
        placeholder="Describe your event or mood"
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
