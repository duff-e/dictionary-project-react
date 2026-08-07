import Synonyms from "./Synonyms";

export default function DictionaryDisplay(props) {
  return (
    <div className="dictionary-display w-100 p-4">
      <h2 className="part-of-speech mb-3"> {props.definition.partOfSpeech}</h2>
      <div className="dictionary-data mb-2">
        <p> {props.definition.definition}</p>
        {props.definition.example && (
          <p className="font-italic">"{props.definition.example}"</p>
        )}
        <Synonyms synonyms={props.definition.synonyms} />
      </div>
    </div>
  );
}
