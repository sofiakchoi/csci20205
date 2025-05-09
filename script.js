document.addEventListener('DOMContentLoaded', function() {
  
        fetch('https://raw.githubusercontent.com/sofiakchoi/csci20205/refs/heads/main/data.json')
            .then(response => response.json()) 
            .then(data => {
                const contentDiv = document.getElementById('content');
                data.forEach(item => {
                    const section = document.createElement('section');
                    section.innerHTML = `
                        <h2>${item.name}</h2> 
                        <img src="${item.imageUrl}">
                        <h3> ${item.source} ${item.date}</h3>
                        <p>"${item.text}"</p>
                        <h3>Notes:</h3>
                        <p>${item.notes}</p>
                    `;
                    contentDiv.appendChild(section);
                });
            })
            .catch(error => console.error('Error loading the data:', error)); 
    });
    
