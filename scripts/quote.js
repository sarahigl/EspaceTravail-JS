export async function quoteReader(){
    let URL = 'https://zenquotes.io/api/quotes/';
    //proxy => CORS pb 
    let proxy = 'https://api.allorigins.win/get?url=';

    try {
        const response= await fetch(proxy+URL);
        console.log(response);
        if(response.ok || response.status == 200){
            const dataTransformed = await response.json();
            console.log(dataTransformed);
            
            const div1 = document.querySelector('#content-wrap');
            let quoteDay = document.createElement('p');
//array of objects => parse 
            let content = JSON.parse(dataTransformed.contents);
            let result = content[0];
            let quoteFirst = result.q;
            let authorQuote = result.a;

            quoteDay.innerText = `"${quoteFirst}" \n \n ${authorQuote}`;
            quoteDay.style.fontSize = '30px';
            quoteDay.style.textAlign = 'center';
            quoteDay.style.border = '3px solid pink';
            quoteDay.style.borderRadius = '20px';
            quoteDay.style.padding = '10px';
            div1.append(quoteDay);
        }else{
            throw new error("Erreur lors de la récupération des données : ", response.statusText);
        }
    } catch (error) {
        console.error('impossible de récupérer les données.')
    }
}
