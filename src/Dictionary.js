import { useState } from "react";
import axios from "axios";
import DictionaryResult from "./DictionaryResult";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  function handleWordSearch(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "40o03736bbe0e6faa9b79f5dt4af0a0f";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(displayDefinition);
  }
  function displayDefinition(response) {
    setResult(response.data);
  }

  return (
    <div className="dictionary">
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center m-5"
      >
        <input
          type="search"
          placeholder="Enter word here"
          onChange={handleWordSearch}
          className="input-bar p-3"
        />
        <input type="submit" value="Search" className="search-button p-3" />
      </form>
      <DictionaryResult result={result} />
    </div>
  );
}
