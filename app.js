const newsForm = document.getElementById('news-searcher');
const input = document.getElementById('topic');
const newsList = document.getElementById('news-list');

newsForm.addEventListener('submit', fetchNews);

function fetchNews(event) {
    newsList.innerHTML = '';

    event.preventDefault();

    const apiKey = 'f313cdf16b64452880ae491885947b6e';
    const searchTopic = input.value;
    const url = `https://newsapi.org/v2/everything?q=${searchTopic}&apiKey=${apiKey}`;

    console.log(searchTopic);
    console.log(url);

    fetch(url)
      .then((response) => {
          return response.json();
      }).then((data) => {
          console.log(data);

          data.articles.forEach(article => {
              let listItem = document.createElement('li');
              let hyperLink = document.createElement('a');

              hyperLink.setAttribute('href', article.url);
              hyperLink.setAttribute('target', '_blank');
              hyperLink.textContent = article.title;

              listItem.appendChild(hyperLink);
              newsList.appendChild(listItem);
          })
      })
}
