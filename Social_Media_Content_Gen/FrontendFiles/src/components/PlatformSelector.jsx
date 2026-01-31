function PlatformSelector({ onPlatformChange }) {
  function handleChange(event) {
    onPlatformChange(event.target.value);
  }

  return (
    <div>
      <label>Platform</label>
      <select onChange={handleChange} defaultValue="instagram">
        <option value="instagram">Instagram</option>
        <option value="linkedin">LinkedIn</option>
        <option value="facebook">Facebook</option>
        <option value="twitter">Twitter</option>
      </select>
    </div>
  );
}

export default PlatformSelector;
