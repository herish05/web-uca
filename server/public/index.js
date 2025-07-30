var productsList=[
        {
            id:1,
            price:1000,
            name:"Android"
        },
        {
            id:2,
            price:2000,
            name:"Ios "
        }
    ]
function renderData(){
    document.getElementById("products").innerHTML=`
    <table>
    <thead>
    <tr>
    <th>sr.no</th>
    <th>Name</th>
    <th>Price</th>
    </tr>
    </thead>
    <tbody>
    ${productsList.map((product,index)=>{
        return `
        <tr>
        <td>${index+1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        </tr>
        `
    })}
    </tbody>
    </table>
    `
}
renderData()
