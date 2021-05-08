import axios from "axios";

const testData = [
  {
    id: '5efa1378-c91f-49eb-9955-02e477c95920',
    headline: 'Bootstrap 5: Get a Sneak Peak at all the New Features',
    authorPhoto: 'https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg',
    authorName: 'FIDO WALKSALOT'
  },
  {
    id: 'd03affc6-b06e-4b4a-9909-3981c7cb8389',
    headline: 'UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)',
    authorPhoto: 'https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg',
    authorName: 'MAX GOODBOYE'
  },
  {
    id: 'a85f88d3-0845-426d-9f02-930daa5c9b34',
    headline: 'The Hottest New Bootstrap 4 Components Every Developer Needs to Know About',
    authorPhoto: 'https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg',
    authorName: 'MAX GOODBOYE'
  }
]
;

const Card = (article) => {
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

  article.forEach((item)=>{
    const cardHolder = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const authorImgCont = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName =document.createElement('span');

    cardHolder.appendChild(headline);
    cardHolder.appendChild(author);
    author.appendChild(authorImgCont);
    authorImgCont.appendChild(authorImg);
    author.appendChild(authorName);

    cardHolder.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    authorImgCont.classList.add('img-container');

    // headline.textContainer = item.headline
    // authorImg.src = item.authorImg
    // authorName.textContent = 'By ' + item.authorName;

    return cardHolder;
  });

}

const cardAppender = (selector) => {
  const cardCont = document.querySelector(selector);
  console.log(Card(testData));
  //axios
  // .get('https://lambda-times-api.herokuapp.com/articles')
  // .then((res)=>{
  //   const data = res.data.articles;
  //   for(const keys in data){
  //         const keyData = data[keys];
  //     console.log(`${keys}`, keyData);
  //         //debugger;
  //     //cardCont.appendChild(Card(keyData))
  //     //data[keys].forEach((cb)=>{
        
  //      // });
  //   }
  //   //cardCont.appendChild(Card(res.data.articles)); //pass the whole nested objects and then dig in in the for loop
  // })
  // .catch((err)=>{
  //   console.log(err);
  // })
  
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
