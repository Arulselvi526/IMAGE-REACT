function ImageCard({ imagecard }) {
  return (
    <>
      <div className="img-div">
        <img src={imagecard.url} alt={imagecard.title} className="image" />
        <h3 className="image-title">{imagecard.title}</h3>
        <p className="image-description">{imagecard.description}</p>
      </div>
    </>
  );
}
export default ImageCard;