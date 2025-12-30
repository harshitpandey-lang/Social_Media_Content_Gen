export async function generateContent(image, text, platform) {
  const formData = new FormData();

  formData.append("image", image);
  formData.append("text", text);
  formData.append("platform", platform);

  const response = await fetch("http://localhost:8000/generate", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Backend request failed");
  }

  const data = await response.json();

  return data.caption;
}
