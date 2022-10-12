const key = '';
const ul = document.querySelector('.articles');
const getData = (url, method) => {
  const fetchedData = fetch(url, method);
  return fetchedData
    .then((Response) => {
      if (Response.status === 200) {
        return Response.json();
      } else if(Response.status === 401){
        return 'Please add API key from https://newsapi.org/';
      } else{
        const resoponseStatus=Response.status;
        return Response.json().then((data) => {
          const respHandler = [data, resoponseStatus];
          return respHandler;
        });
      }
    })
    .catch((error) => {
      throw new Error('something went worng ' + error);
    });
};

const sendRequest = () => {
  const method = 'GET';
  const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${key}`;
  const receivedData = getData(url, { method: method }); 
  return receivedData.then((data) => {
    return data;
  });
};

async function renderData() {
  const data = await sendRequest();
  if(typeof data==='string'){
    ul.append(data);
  }
  for (const article of data.articles) {
    const li = createArticleEl(
      article.title,
      article.source.Name,
      article.publishedAt,
      article.url
    );
    ul.append(li);
  }
  console.log(data);
}

const displayLoader=()=>{
    setTimeout(()=>{
     document.querySelector('.loader').style.display="none";
     renderData();
    }, 2000);
}
displayLoader();
