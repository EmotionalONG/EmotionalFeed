const apiKey = "pub_82111bd2d4e60538e470f6ab01b4d50722289";
const newsGrid = document.querySelector(".news-grid");

fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=us&language=en`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.results.forEach((article) => {
      const card = document.createElement("article");
      card.classList.add("news-card");
      card.innerHTML = `
        <img src="${
          article.image_url || "https://via.placeholder.com/300x200"
        }" alt="News image">
        <h2>${article.title}</h2>
        <p>${article.description || "No description available."}</p>
      `;
      newsGrid.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching news:", error);
    newsGrid.innerHTML = `<p>Unable to load news. Please try again later. <br> Error: ${error.message}</p>`;
  });
