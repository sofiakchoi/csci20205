document.addEventListener('DOMContentLoaded', function() {

fetch('data.json')
    .then(response => response.json())

    .then(data => {
        // Gets a reference to the element with the id 'content' in the HTML document.
        const collectionDiv = document.getElementById('collection');
        data.forEach(item => {
            const section = document.createElement('section');
            section.innerHTML = `
                   <h1> ${item.name} </h1>
                    ${item.source}
                    ${item.date}
                    ${item.imageUrl}
                    ${item.text}
                    ${item.notes}
                    `;

                    collectionDiv.appendChild(section);
                });
            })

