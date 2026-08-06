import Synonyms from "./Synonyms";

export default function DictionaryDisplay(props) {
  return (
    <div className="dictionary-definitions">
      <h2> {props.definition.partOfSpeech}</h2>
      <div> {props.definition.definition}</div>
      {props.definition.example && (
        <div className="font-italic">"{props.definition.example}"</div>
      )}

      <div>
        <Synonyms synonyms={props.definition.synonyms} />
      </div>
    </div>
  );
}
