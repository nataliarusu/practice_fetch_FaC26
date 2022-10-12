const createArticleEl = (title, source, date, url) => {
  const li = document.createElement('li');
  li.classList.add('article');
  const titleEl = document.createElement('h2');
  titleEl.classList.add('article-title');
  const pdateEl = document.createElement('p');
  pdateEl.classList.add('published-date');
  const sourceEl = document.createElement('p');
  sourceEl.innerHTML = source;
  const linkEl = document.createElement('a');
  linkEl.setAttribute('href', url);
  linkEl.setAttribute('target', '__blank')
  linkEl.innerHTML = 'Read more';
  titleEl.innerHTML = title;
  pdateEl.innerHTML = date;
  li.append(pdateEl, titleEl, linkEl, sourceEl);
  return li;
};
