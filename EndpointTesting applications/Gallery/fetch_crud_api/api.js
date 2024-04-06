const postslist = document.querySelector('.posts-list');

const addPostForm = document.querySelector('.add-post-form');
let btnSubmit = document.getElementById('btnsubmit')

let title = document.getElementById('title-value');
let bodyValue = document.getElementById('body-value');
const url = ''
let output = null


const renderPost =(jsonData)=>{
    jsonData.forEach(post=> {
        // console.log(post)
        output += `
        <div class="card mt-4 col-md-6 bg-light" id=${post.id}>
        // check if the id has an under score first
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
            <p class="card-text">${post.body}</p>
            <a href="#" class="card-link btn btn-sm btn-warning" id="edit-post" >Edit</a>
            <a href="#" class="card-link btn btn-sm btn-danger" id="delete-post" >Delete</a>
        </div>
    
    </div>
        `;
    });

    postslist.innerHTML = output;

}


// get request to get posts

renderPost();

// mehtod: Get


const resource = await fetch(url)
const jsonData = await resource.json()

// delete and edit code 

postslist.addEventListener('click',(e)=>{
    e.preventDefault();
    let delButtonPressed = e.target.id == 'delete-post';
    let editButtonPressed = e.target.id == 'edit-post';

    if(delButtonPressed){
        fetch(`${url}/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(()=>location.reload())

    }
    if(editButtonPressed){
        const parent = e.target.parentElement;
        let titleContent = parent.querySelector('.card-title').textContent;
        let bodyContent = parent.querySelector('.card-body').textContent;

        title = titleContent;
        bodyContent = bodyContent;

        // method : PATCH

        btnSubmit.addEventListener('click', (e)=>{
            e.preventDefault();
            fetch(`${url}/${id}`,{
                method:'PATCH',
                body: JSON.stringify({
                    title: title.value,
                    body:bodyValue.value,
                })
            })
            .then(res=>res.json())
            .then(()=>location.reload())
        })
    }
})


// to fix cors
// npm install cors
// var express = require('express')
// var cors = required('cors')
// app.usag(cors())

// insertpost


addPostForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title: title.value,
            body: bodyValue.value
        })
    }).then(res => res.json())
    .then(data =>{
        const dataArray = [];
        dataArray.push(data);

        renderPost(dataArray)
    })

    title.value = "";
    bodyValue.value = "";
})