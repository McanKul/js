
ekleme = document.querySelector("input");
let result=[];
let textInputValue = '';
const ekleyici = document.getElementById("ekle");
const ekleme_yeri=document.querySelector("ul");
document.body.addEventListener("load",gösterici())

ekleme.addEventListener("change", function (event) {
 textInputValue = event.target.value;
})



ekleyici.addEventListener("click",function(event){
 event.preventDefault();
 result.unshift({id:result.length+1, metin: textInputValue})
 ekleme.value='';
 textInputValue='';
 gösterici();
})

function gösterici() {
 if(result.length=="0"){
  ekleme_yeri.innerHTML = `<li>
  <span>${"liste boş"}</span>
 </li>` ;
 } else{
 let yazi_dizisi = "";
 result.forEach((item) => {
  yazi_dizisi +=`<li onclick="sil(${item.id})">
   <span>${item.metin}</span>
   <button>sil</button>
  </li>`
  })
  ekleme_yeri.innerHTML = yazi_dizisi;
}
}

function sil(a){
 let temp=[];

for(let i in result){
  if(result[i].id==a){
   continue;
  } else{
   temp.push({id:temp.length+1,metin:result[i].metin})
  }}
  result =[];
  for(let i in temp){
   result[i] = temp[i];
  }
  
  gösterici();
}
// bu uzun silme işle yerine slice kullanabilirsin

document.getElementById("temizle").addEventListener("click", function temizle(){
 result = [];
 gösterici();
})