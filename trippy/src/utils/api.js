const config = {
    host: "http://localhost:3002"
}

const getHomeData = () =>{
    fetch(`${config.host}/api/home`)
    .then((response) => response.json())
    .then((result)=> {
        console.log(result)
    })
}

export default getHomeData;