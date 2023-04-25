let divEle=document.createElement("div")
divEle.style.textAlign = "center"
divEle.style.margin= "100px";

let input=document.createElement("input")
input.setAttribute("type","text")
input.style.width="30%"
input.id="countryName"
document.body.append(divEle)


let button= document.createElement("button")
button.setAttribute("type","button")
button.innerHTML="click me"
button.style.margin="5px"
button.addEventListener("click",getdata)

divEle.append(input,button)


async function getdata(){
  let res=document.getElementById("countryName").value;
  console.log(res);
  try{
    let res1=await fetch( `https://api.covid19api.com/total/dayone/country/${res}`)
    let res2=await res1.json()
    console.log(res2)
    index=res2.length-1;
    let data=document.createElement("div")
    data.style.margin="10px"
    data.innerHTML=`Active :${res2[index].Active} <br>
                    Confirmed :${res2[index].Confirmed}<br>
                    Recovered :${res2[index].Recovered}`
    divEle.append(data)
    
  }catch(error){
   console.log(error)
  }
}