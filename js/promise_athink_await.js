const users = [
    {name: 'Sardor', firstName: 'Narzullayev'},
    {name: 'Dilmurod', firstName: 'Umbarov'},
    {name: 'Nodir', firstName: 'Olimjonov'},
]
    function getUsers() {
        setTimeout(() =>{
            let result = ''
            users.forEach((user) =>{
                console.log(user)
                result += '<li> ' + user.firstName + ' ' + user.name + '</li>'
                })
            document.body.innerHTML = result
            },1000)

        }

        
    function addUser(user) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                users.push(user)
                const error = false

                if(!error){
                    resolve()
                }else{
                    reject('Nimadur xato')
                }
            },2000)
        })
        
    }    
        


    async function result() {
        await  addUser({name: 'Toshmat', firstName:'Eshmatov'})
        getUsers()
        console.log(result())
    }
    result()