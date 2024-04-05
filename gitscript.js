function find(){
    const input = document.getElementById("inp");
    const value = input.value;
    const url1 = "https://api.github.com/users/"+value;
    fetch(url1)
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('out');
        output.textContent+= `Github Name is :${data.name} and,`;
        output.textContent+= ` Github id is :${data.id}, Is `;
        output.textContent+= ` a ${data.type} in github and,`;
        output.textContent+= ` Bio of the ${data.type} is: ${data.bio}, The`;
        output.textContent+= ` Location is in :${data.location} and,`;
        output.textContent+= ` The Followers are :${data.followers},`;
        output.textContent+= ` Follow the link to view in github-> ${data.url} `;
    })
    .catch(error => console.error(error));         
}
function cl(){
    let o = document.getElementById("out");
    o.textContent='';
}