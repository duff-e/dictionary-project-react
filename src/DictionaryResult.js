import DictionaryDisplay from "./DictionaryDisplay";

export default function DictionaryResult({ result }) {
  if (result) {
    return (
      <div className="dictionary-results mt-5 mb-5">
        <hr />
        <h2 className="word mt-4 mb-4 p-2">{result.word}</h2>
        <p>/{result.phonetic}/</p>
        <hr />
        <div className="dictionary-definitions ">
          <div className="row mt-5">
            {result.meanings.map(function (displayDefinition, index) {
              if (index < 2) {
                return (
                  <div className="col-md-6 mb-4 d-flex" key={index}>
                    <DictionaryDisplay definition={displayDefinition} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
