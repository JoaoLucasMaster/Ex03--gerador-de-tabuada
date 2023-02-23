function tabuada(){
    let numer = document.getElementById('num')
    let tabua = document.getElementById('seltab')
    
    if(numer.value.length==0)
    {
        alert('Digite um número!')
    }
    else{
        let n = Number(numer.value)
        let c = 1
        tabua.innerHTML = ''
        while(c <= 10)
        {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tabua.appendChild(item)
            c++
        }
    }
}