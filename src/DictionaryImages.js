export default function DictionaryImages(props) {
  if (props.images.length === 0) {
    return null;
  } else {
    return (
      <div className="dictionary-images mt-5 mb-5">
        <div className="images-title text-center ">
          <p className="images-subtitle">Visual Index</p>
          <h3 className="font-italic">
            Illustrations of
            <span className="main-word text-capitalize"> {props.word}</span>
          </h3>
        </div>

        <div className="image-gallery mt-5">
          {props.images.map(function (image, index) {
            if (index < 5) {
              return (
                <div
                  key={index}
                  className={
                    index === 0
                      ? "rounded image-portrait"
                      : "rounded image-small"
                  }
                >
                  <img
                    src={index === 0 ? image.src.portrait : image.src.landscape}
                    alt={image.alt}
                  />
                  <div className="photographer"> {image.photographer} </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
