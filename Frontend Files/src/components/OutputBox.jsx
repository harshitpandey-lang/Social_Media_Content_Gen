function OutputBox({ output }) {
  if (!output) {
    return null;
  }

  return (
    <div>
      <label>Generated Caption</label>
      <p>{output}</p>
    </div>
  );
}

export default OutputBox;
