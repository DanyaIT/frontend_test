main()
async function main(){
    const menu = document.querySelector('.menu')
    menu.addEventListener('click',async e =>{
    if(!e.target.classList.contains('page__btn')){
        return 
    }
    const page = +e.target.dataset.page
    const usersData = await getUserPage(page)
    let content = '';
    usersData.map(user=>
        content = content + `
        <div>
            <img src = ${user.avatar} alt = ${user.first_name}/>
            <p>${user.first_name}</p>
        </div>` 
    );

    document.querySelector('.app').innerHTML = content;

    
})
}

async function getUserPage(page){
    const users = await fetch(`https://reqres.in/api/users?page=${page}`)
    const responce = await users.json()
    return responce.data
}

