async function solution() {

    const mainEl = document.getElementById('main');
    const articlesResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list/`);
    const articlesData = await articlesResponse.json();
    

    for (let articles of articlesData) {

        const articleDetailsResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articles._id}`);
        const articleDetailsData = await articleDetailsResponse.json();
        console.log(articleDetailsData);
        
        
        const divAccordionEl = document.createElement('div');
        divAccordionEl.setAttribute('class', 'accordion');

        const divHeadEl = document.createElement('div');
        divHeadEl.setAttribute('class', 'head');

        const spanEl = document.createElement('span');
        spanEl.textContent = articleDetailsData.title;

        const btnEl = document.createElement('button');
        btnEl.setAttribute('class', 'button');
        btnEl.setAttribute('id', articleDetailsData._id);
        btnEl.textContent = "More";

        divExtraEl = document.createElement('div');
        divExtraEl.setAttribute('class', 'extra');

        const pEl = document.createElement('p');
        pEl.textContent = articleDetailsData.content;

        divHeadEl.appendChild(spanEl);
        divHeadEl.appendChild(btnEl);
        divExtraEl.appendChild(pEl);

        divAccordionEl.appendChild(divHeadEl);
        divAccordionEl.appendChild(divExtraEl);

        mainEl.appendChild(divAccordionEl);

        btnEl.addEventListener('click', buttonHandler);

        function buttonHandler(e) {
            const currentDviExtraEl = e.currentTarget.parentElement.parentElement.children[1];
            if (e.target.textContent === "More") {
                currentDviExtraEl.style.display = 'block';
                e.target.textContent = 'Less';
            } else if (e.target.textContent === "Less") {
                currentDviExtraEl.style.display = 'none';
                e.target.textContent = 'More';
            }
        }
    }
     
}
solution();