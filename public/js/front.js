let cont = document.querySelector('.cont');
const formEl = document.querySelector('.form');


formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    authorName = formData.get('name')
    const run = async () => {
        const result = await axios.post('/add-author', { name: authorName });
        console.log(result);
    }
    run();
    renderList();
})

const renderList = async () => {
    const authorsList = await axios.get('/authors');
    const authors = authorsList.data;
    let html = '';
    authors.forEach((author) => {
        //console.log(item)
        html += `<br><a href="#" class="title">${author.name}</a><br>`;
        cont.innerHTML = html;
    });


}
renderList();

