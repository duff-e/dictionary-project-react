import DictionaryDisplay from "./DictionaryDisplay";

export default function DictionaryResult({ result }) {
  if (result) {
    return (
      <div className="dictionary-results">
        <h1>{result.word}</h1>
        <p>{result.phonetic}</p>
        <div className="dictionary-definitions">
          {result.meanings.map(function (displayDefinition, index) {
            if (index < 2) {
              return (
                <div key={index}>
                  <DictionaryDisplay definition={displayDefinition} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
