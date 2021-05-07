const Header = (title, date, temp) => {

  const header = document.createElement('div');
  const dateNews = document.createElement('span');
  const titleNews = document.createElement('h1');
  const tempNews = document.createElement('span');

  header.classList.add('.header');
  dateNews.classList.add('.date');
  tempNews.classList.add('.temp');
  dateNews.textContent = date;
  tempNews.textContent = temp;
  titleNews.textContent = title;

  header.appendChild(dateNews);
  header.appendChild(titleNews);
  header.appendChild(tempNews);

  return header
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  selector = document.querySelector('.header-container');
  const headerDoer = Header('Lambda News','07-May-2021', '23 C');

  selector.appendChild(headerDoer);

  
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
