let config ={
    host:"//localhost:3002"
}

getHomeData=()=>{
    fetch(`${config.host + "/api/home"}`)
}

getHomeData()