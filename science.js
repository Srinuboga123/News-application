document.querySelector("#science").addEventListener("click",


    

   async ()=>{
        const news= await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1c47eab1f03e4c139e0d56766232879a`)
       
        
        
        const data = await news.json();

       const generalnews=data.articles


    
     display(generalnews)

});





function display(generalnews){
    for(i=0;i<generalnews.length;i++){
        const divsion=document.createElement('div')
        document.body.appendChild(divsion);
        const ti=document.createElement('h3')
       const tides=document.createTextNode(generalnews[i].title)
       ti.appendChild(tides)
       document.body.appendChild(ti)
     
        console.log(generalnews[1]);
        const image=document.createElement('img');
        image.setAttribute('width','20%')
        image.setAttribute('heigth','20%')
        image.src=generalnews[i].urlToImage
        document.body.appendChild(image)
 
        //CONTENT
        const content=document.createElement('p')
        content.innerHTML="<B>CONTENT:</B>"+generalnews[i].content
        document.body.appendChild(content)
        //URL
        const linktag=document.createElement('a')
        const linkdata=document.createTextNode("Read More")
        linktag.appendChild(linkdata);
        linktag.setAttribute("target",'__blank__')
        linktag.href=generalnews[i].url
        document.body.appendChild(linktag)
       //DESCRIPTION
       const des = document.createElement('p')
       des.innerHTML="<b>DESCRIPTION</b>"+generalnews[i].description
       document.body.appendChild(des)
 
       const underline =document.createElement('hr')
       document.body.appendChild(underline)
 
      }

}