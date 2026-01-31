function GenerateButton({ onClick, loading }) {
  return (
    <div>
      <button onClick={onClick} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}

export default GenerateButton;
