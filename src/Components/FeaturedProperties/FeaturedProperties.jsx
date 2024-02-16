import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  // Object containing image URLs and place names
  const properties = [
    {
      imageUrl: "https://medaramjathara.com/assets/img/attractions/ramappa-temple/ramappa-temple-unesco.png",
      placeName: "Rammapa temple"
    },
    {
      imageUrl: "https://medaramjathara.com/assets/img/attractions/laknavaram-lake/laknavaram-lake-01.jpg",
      placeName: "laknavaram lake"
    }, {
      imageUrl: "https://medaramjathara.com/assets/img/attractions/pandavula-guhalu/pandavula-guhalu-02.jpg",
      placeName: "panduvula guhalu"
    },    {
      imageUrl: "https://medaramjathara.com/assets/img/attractions/kaleshwaram-temple/kaleshwaram-temple-02.jpg",
      placeName: "Kaleshwaram Temple"
    },
    {
      imageUrl: "https://medaramjathara.com/assets/img/attractions/bogatha-waterfalls/bogatha-waterfalls-01.jpg",
      placeName: "Bogatha waterfalls"
    },
  ];

  return (
    <div className="fp">

      <>
        {properties.map((item, index) => (
          <div className="fpItem" key={item._id}>
            {/* Display image dynamically */}
            <img src={properties[index].imageUrl} alt="" className="fpImg" />
            <span className="fpName">{item.placeName}</span>
          </div>
        ))}
      </>

    </div>
  );
};

export default FeaturedProperties;
