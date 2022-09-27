let results = document.getElementById('results');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( button => { 
    button.addEventListener('click', (e) => { 
        switch(e.target.innerText) {
            case 'C': 
                results.innerText = '';
                break;
            case 'DEL':
                if(results.innerText) {
                    results.innerText = results.innerText.slice(0, -1);
                }
                break;            
            case '=':
                results.innerText = eval(results.innerText);
                break;
            default:
                results.innerText += e.target.innerText;
        }
    })
})