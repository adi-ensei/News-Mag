/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem"; // Assuming Newsitem component is defined in the same folder

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=09c2e25434cc474ba319cb8648b9407a`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data.articles);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles?.map((news, index) => (
        <Newsitem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default Newsboard;
