chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
  console.log('A message received');

  if (request.url) {
    sendResponse({message:"Url received"})
  }

  const url=request.url

  fetch("http://localhost:5000/save_tweet",{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      twtUrl:url
    })
  }).then(res=>res.json()).then(result=>{
    console.log(result);
  })

})
