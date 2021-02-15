let config ={
    host:"//localhost:3002"
}

const getHomeData=()=>{
    return fetch(config.host + "/api/home")
}

export default config;