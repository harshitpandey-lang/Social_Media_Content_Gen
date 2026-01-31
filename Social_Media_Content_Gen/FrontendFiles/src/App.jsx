import { useState } from "react";

import ImageUpload from "./components/ImageUpload";
import PlatformSelector from "./components/PlatformSelector";
import GenerateButton from "./components/GenerateButton";
import OutputBox from "./components/OutputBox";
import TextInput from "./components/TextInput";
import { generateContent } from "./services/api";

function App() {
  const [image, setImage] = useState(null);
  const [platform, setPlatform] = useState("instagram");
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!image) {
      alert("Please upload an image");
      return;
    }

    setLoading(true);
    setOutput("");

    try {
      const result = await generateContent(image, platform);
      setOutput(result);
    } catch (error) {
      alert("Failed to generate content");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Social Media Gen</h1>

      <ImageUpload onImageSelect={setImage} />
      <TextInput onTextChange={setText} />
      <PlatformSelector onPlatformChange={setPlatform} />
      <GenerateButton onClick={handleGenerate} loading={loading} />
      <OutputBox output={output} />
    </div>
    
  );
}

export default App;
