const fetchPexels =async()=>{
    try{
        const resource = await fetch("https://www.pexels.com",{
            mode:"no-cors",
            headers:{
                Authorization: "Bearer gKhOx1xOrJpk7kwrbFMr3ugwhsFRNhBhCqREIv0wOOLkLTr6s727Ko7j"
            }
        })
        if(!resource.ok){
            console.log("Not authorised" + resource.status)
        }else{
            const jsonData = await resource.json();
            console.log(jsonData);
        }
    }catch(error){
        console.log(error)
    }
}

fetchPexels();