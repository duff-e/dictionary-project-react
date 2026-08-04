export default function DictionaryDisplay(props) {
  return (
    <div className="dictionary-definitions">
      <h2> {props.definition.partOfSpeech}</h2>
      <p> {props.definition.definition}</p>
      {props.definition.example && (
        <p className="font-italic">"{props.definition.example}"</p>
      )}
      {props.definition.synonyms && <p> {props.definition.synonyms[0]}</p>}
    </div>
  );
}
