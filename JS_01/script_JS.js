function temperature()
{

    
    let degCels = +prompt('Ведіть градуси C', );
    
    let resDegKelv =  degCels + 273.15;
    let resDegFar = ( degCels* 9/5)+32;
    
    
    
    alert(`Зараз ${resDegKelv}  Градусів Кельвіна`);
    alert(`Зараз ${resDegFar} Градусів Фарінгейта`);

}

function equation()
{
    let squareRoot = +prompt('Ведіть двадратний корінь.',);

    console.log(Math.sqrt(squareRoot));

    

    if(Math.sqrt(squareRoot) > 0)
    {
        alert(`Результат: ${Math.sqrt(squareRoot)}`);
        
        return;
    }
    else(Math.sqrt(squareRoot) < 0);
    {
        squareRoot = +prompt('Ведіть число знову.',);
        alert(`Результат: ${Math.sqrt(squareRoot)}`);

        return;
    }


    

}