const pel=document.getElementById('pel')
const res=document.getElementById('res')
const salir=document.getElementById('salir')
const main=document.getElementById('main')

pel.addEventListener('click',()=>{
    main.innerHTML=`
        <button type="button" id="sub"><i class="fa-solid fa-cloud-arrow-up"></i><p>Subir</p></button>
        <button type="button" id="baj"><i class="fa-solid fa-cloud-arrow-down"></i><p>Bajar</p></button>
    `

    const sub=document.getElementById('sub').addEventListener('click', ()=>{
        main.innerHTML=`
            
        `
    })
    const baj=document.getElementById('baj')


})