const button = document.getElementById('button')

button.addEventListener('click',()=>{
axios({
    method:'GET',
url:'data/data.json'
}).then(res =>{
 console.log(res.data)
})

})