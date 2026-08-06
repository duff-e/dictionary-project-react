export default function Synonyms(props) {
  if (props.synonyms == null) {
    return null;
  } else {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonyms, index) {
          if (index < 3) {
            return <span key={index}>{synonyms} </span>;
          }
          return null;
        })}
      </div>
    );
  }
}
