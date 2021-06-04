import axios from "axios";


const Card = ({ headline, authorPhoto, authorName }) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


    const cardHolder = document.createElement('div');
    const headlineData = document.createElement('div');
    const author = document.createElement('div');
    const authorImgCont = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorNameData =document.createElement('span');

    cardHolder.appendChild(headlineData);
    cardHolder.appendChild(author);
    author.appendChild(authorImgCont);
    authorImgCont.appendChild(authorImg);
    author.appendChild(authorNameData);

    cardHolder.classList.add('card');
    headlineData.classList.add('headline');
    author.classList.add('author');
    authorImgCont.classList.add('img-container');

    headlineData.textContent = headline;
    authorImg.src = authorPhoto;
    authorNameData.textContent = authorName;

    headlineData.addEventListener('click', () => {

     console.log(headline)})

    return cardHolder
  }


    

const cardAppender = (selector) => {


  const articles = axios.get('https://lambda-times-api.herokuapp.com/articles')
 .then((res) => {
  const javascriptArray = 
  {
   headline: res.data.articles.javascript[0].headline,
   authorPhoto: res.data.articles.javascript[0].authorPhoto,
   authorName: res.data.articles.javascript[0].authorName
  }
  const insertCard = document.querySelector(selector)
  const newArticle = Card(javascriptArray)
  insertCard.appendChild(newArticle)
  console.log(newArticle)
  console.log(javascriptArray)
   })
     .catch(err =>{
       console.log(err)
     });



    
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

}

export { Card, cardAppender }
