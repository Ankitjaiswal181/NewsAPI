console.log("This is my News API");
newsAccordion=document.getElementById("newsAccordion");

let sources='bbc-news';
let apiKey='3ff3c862cf9745bda40ee27b4a9b8ecb';

const xhr=new XMLHttpRequest();
xhr.open('GET',`Ankit.txt`, true);
xhr.onload=function(){
   
   let json=JSON.parse(this.responseText);
   let articles=json.articles;
//    console.log(articles);
    // if()
    let newsHtml="";
   articles.forEach((element,index) => {
    let news=`
    <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                      <b> Breaking News ${index+1}:</b> ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    ${element["content"]}.<a href="${element["url"]}" target="_blank">Read for more</a>
                    </div>
                </div>
            </div>`; 
                newsHtml +=news;          
   });
    // console.log(newsHtml);
       
    newsAccordion.innerHTML=newsHtml;


}
xhr.send();


