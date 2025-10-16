import React, { useState } from "react";

function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [nouvelArticle, setNouvelArticle] = useState("");

  function ajouterArticle() {
    if (nouvelArticle === "") return;
    setArticles([...articles, nouvelArticle]);
    setNouvelArticle("");
  }

  return (
    <div>
      <h2>Liste de courses</h2>
      <input
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
        placeholder="Ajouter un article"
      />
      <button onClick={ajouterArticle}>Ajouter</button>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
