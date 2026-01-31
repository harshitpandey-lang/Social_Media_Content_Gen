export async function generateContent(image, platform) {
  const formData = new FormData();

  
  formData.append("platform", platform);
  formData.append("image", image);

  const response = await fetch("http://localhost:8000/api/generate-caption/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Backend request failed");
  }

  const data = await response.json();

  return data.caption;
}
