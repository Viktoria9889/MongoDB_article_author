let title = document.querySelector('.title');
let text = document.querySelector('.text');
let authorName

const authorsEl = document.querySelector('.authors');
const selectAuthor = document.querySelector('.select');
const formArticle = document.querySelector('.formTitle');


//формуєм список селект
const renderAuthorList = async () => {
    let html = '';
    const result = await axios.get('/authors');
    result.data.forEach((item) => {
        html += `<option value="${item._id}">${item.name}</option>`;
    });
    selectAuthor.innerHTML = html;
}
renderAuthorList()


formArticle.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    title = formData.get('title')
    text = formData.get('text')
    
    //console.log(data.data)
    const run = async () => {
        const result = await axios.post('/add-article',  {title: title, text: text, author: selectAuthor.value});
        console.log(result);
    }
    run();
});
  
