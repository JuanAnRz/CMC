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
            <div id='cont'>
                <div id='contImg'>
                    <img id='img' src='' alt=''>
                </div>
                
                <label for='file' id="fils">Subir imagen</label>
                <input name=file class="ins" id='file' type="file" alt="">
            </div>
        `
        const img=document.getElementById('img')
        file.addEventListener('change', e=>{
            if(e.target.files[0]){
                const reader= new FileReader()
                reader.onload =function(e){
                    img.src= e.target.result
                }
                reader.readAsDataURL(e.target.files[0])
            }else{
                img.src=''
            }
        })
    })
    const baj=document.getElementById('baj')


})

