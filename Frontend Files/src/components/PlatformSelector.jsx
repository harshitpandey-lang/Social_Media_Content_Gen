function PlatformSelector({ onPlatformChange }) {
  function handleChange(event) {
    onPlatformChange(event.target.value);
  }

  return (
    <div>
      <label>Platform</label>
      <select onChange={handleChange}>
        <option value="instagram">Instagram</option>
        <option value="linkedin">LinkedIn</option>
      </select>
    </div>
  );
}

export default PlatformSelector;
