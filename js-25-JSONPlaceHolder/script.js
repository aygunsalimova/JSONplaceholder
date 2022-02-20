let resources = document.querySelector('#resources');
let selectList = ["Posts", "Comments", "Album", "Photos"];
let table = document.querySelector('table');

onload = function() {
    let screen = `<option value="" selected>Choose the Resource</option>`;

    for (let item in selectList) {
        screen += `<option value="${item}">${selectList[item]}</option>`
    };

    resources.innerHTML = screen;

};


function Posts() {
    let screen = "";
    screen = `<thead>
    <tr>
    <th scope="col">userId</th>
    <th scope="col">Id</th>
    <th scope="col">Title</th>
    <th scope="col">Body</th>
  </tr>
</thead>`;

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()
            .then((post) => {
                post.forEach(element => {

                    screen += `
                <tr>
                  <td scope="row">${element.userId}</td>
                  <td scope="row">${element.id}</td>
                  <td scope="row">${element.title}</td>
                  <td scope="row">${element.body}</td>
                </tr>
             `;

                });
                table.innerHTML = screen;
                console.log(response);

            })
            .catch((err) => console.log(err))
        )
        .catch((err) => {
            console.log(err);
        });
}

function Comments() {
    let screen = "";

    screen = `<thead>
    <tr>
    <th scope="col">Post ID</th>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Body</th>

  </tr>
</thead>`;

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json()
            .then((comment) => {
                comment.forEach(element => {
                    screen += `
                    <tr>
                      <td scope="row">${element.postId}</td>
                      <td scope="row">${element.id}</td>
                      <td scope="row">${element.name}</td>
                      <td scope="row">${element.email}</td>
                      <td scope="row">${element.body}</td>
                    </tr>
                 `;

                });
                table.innerHTML = screen;
                console.log(response);

            })
            .catch((err) => console.log(err))
        )
        .catch((err) => {
            console.log(err);
        });


}

function Albums() {
    let screen = "";
    screen = `<thead>
    <tr>
    <th scope="col">userId</th>
    <th scope="col">Id</th>
    <th scope="col">Title</th>
  </tr>
</thead>`;

    fetch('https://jsonplaceholder.typicode.com/albums').then(response => response.json()
            .then((album) => {
                album.forEach(element => {
                    screen += `
        <tr>
          <td scope="row">${element.userId}</td>
          <td scope="row">${element.id}</td>
          <td scope="row">${element.title}</td>
        </tr>
     `;
                })
                table.innerHTML = screen;
                console.log(response);
            })

        )
        .catch((err) => {
            console.log(err);
        });
}

function Photos() {
    let screen = "";

    screen = +`<thead>
    <tr>
    <th scope="col">Album Id</th>
    <th scope="col">Id</th>
    <th scope="col">Title</th>
    <th scope="col">URL</th>
    <th scope="col">Thumbnail URL</th>
  </tr>
</thead>`;


    fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json()
            .then((photo) => {
                photo.forEach(element => {
                    screen += `
<tr>
<td scope="row">${element.albumId}</td>
<td scope="row">${element.id}</td>
<td scope="row">${element.title}</td>
<td scope="row"><img src="${element.url}"></td>
<td scope="row"><img src="${element.thumbnailUrl}" alt="">
</td>
</tr>
`;
                })
                table.innerHTML = screen;
                console.log(response);
            })

        )
        .catch((err) => {
            console.log(err);
        });

};

function Choose() {
    let value = resources.value;
    if (value == 0) {
        table.innerHTML = Posts();
    }
    if (value == 1) {
        table.innerHTML = Comments();
    }
    if (value == 2) {
        table.innerHTML = Albums();
    }
    if (value == 3) {
        table.innerHTML = Photos();
    }
}