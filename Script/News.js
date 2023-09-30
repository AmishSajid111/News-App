const details = document.querySelector(".cards");
let btn = document.querySelector("ul");
let key = config.API_KEY;
let category = 'general'
  
const getNews = async () => {
 
url =
  "https://gnews.io/api/v4/top-headlines?category=" +
  category +
  "&lang=en&country=pk&max=10&apikey=" +
  key;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;
    console.log(articles);
    for (i = 0; i < articles.length; i++) {
      let imgSrc = `${articles[i]["image"]}`;
       let hrefurl=`${articles[i]["url"]}`;
      let html = `
  <div class="card" style="width: 18rem;">
  <img src=${imgSrc} class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${articles[i]["title"]}</h5>
  <p class="card-text">${articles[i]["description"]}</p>
  <a href=${hrefurl} class="btn btn-primary">Read more</a>
  
  </div>
  </div>`;
      details.innerHTML += html;
  
    }
  });

}
const searchNews = async () => {

  btn.addEventListener("click", (e) => {
    details.innerHTML = "";
     category = e.target.textContent.toLowerCase();
  
    url =
      "https://gnews.io/api/v4/top-headlines?category=" +
      category +
      "&lang=en&country=pk&max=10&apikey=" +
      key;
 
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        articles = data.articles;
        console.log(articles);
        for (i = 0; i < articles.length; i++) {
          let imgSrc = `${articles[i]["image"]}`;
           let hrefurl=`${articles[i]["url"]}`;
          let html = `
      <div class="card" style="width: 18rem;">
      <img src=${imgSrc} class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${articles[i]["title"]}</h5>
      <p class="card-text">${articles[i]["description"]}</p>
      <a href=${hrefurl} class="btn btn-primary">Read more</a>
      
      </div>
      </div>`;
          details.innerHTML += html;
      
        }
      });
  });
};

getNews();
searchNews();
