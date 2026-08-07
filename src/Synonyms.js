export default function Synonyms(props) {
  if (props.synonyms == null) {
    return null;
  } else {
    return (
      <span className="synonyms">
        <span className="synonym-title d-block">SYNONYMS </span>
        {props.synonyms.map(function (synonyms, index) {
          if (index < 3) {
            return (
              <span className="synonym-word font-italic" key={index}>
                {synonyms}{" "}
              </span>
            );
          }
          return null;
        })}
      </span>
    );
  }
}
