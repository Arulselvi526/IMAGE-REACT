import { useState } from "react";
function Category() {
  const categories = ["All", "Favorites", "Albums"];
  const [activeCategory, setActiveCategory] = useState("All");

  function change(category) {
    setActiveCategory(category);

    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <section className="category-section">
        <ul className="category-list">
          {categories.map(function (item, index) {
            return (
              <li
                key={index}
                className={`category ${activeCategory === item ? "clicked" : ""}`}
                onClick={() => change(item)}
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
export default Category;