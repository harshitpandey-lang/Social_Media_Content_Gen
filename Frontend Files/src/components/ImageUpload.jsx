function ImageUpload({ onImageSelect }) {
  function handleChange(event) {
    const file = event.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  }

  return (
    <div>
      <label>Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}

export default ImageUpload;
