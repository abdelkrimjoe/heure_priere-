
let text;
let temp=document.querySelectorAll(".temp");
let dateHijri=document.getElementById("hiraji");
let nextPray=document.getElementById("nextp")
let tempRest=document.getElementById("tempRest")
let salawat={
  0:"فجر",
  1:"ظهر",
  2:"عصر",
  3:"مغرب",
  4:"عشاء",
}
let intervalID =0;

wilaya.addEventListener("input",()=>{
    text=wilaya.value
    
    fetch(`http://api.aladhan.com/v1/timingsByCity?city=${text}&country=Algeria&method=3`)
              .then((response) => (response.json()))
              .then((json) =>{
                let index
                let tempS=[]
                let tempM=[];
                if(intervalID!=0){
                  clearTimeout(intervalID)
                }
                
                dateHijri.innerText=`${json.data.date.hijri.day}-${json.data.date.hijri.month.ar}-${json.data.date.hijri.year}`
                temp[0].innerText=`${json.data.timings.Fajr}`
                temp[1].innerText=`${json.data.timings.Dhuhr}`
                temp[2].innerText=`${json.data.timings.Asr}`
                temp[3].innerText=`${json.data.timings.Maghrib}`
                temp[4].innerText=`${json.data.timings.Isha}`
                temp[5].innerText=`${json.data.timings.Sunrise}`
                temp[6].innerText=`${json.data.timings.Sunset}`
                for(let i=0;i<5;i++){
                  let temMetenaint=(heureMetenaint.innerText).split(":")
                  let tempSalateI=(temp[i].innerText).split(":")
                  let tempSalateII=(temp[i+1].innerText).split(":")
                  if(plusGrandTemp(temMetenaint,tempSalateI)<0 && plusGrandTemp(temMetenaint,tempSalateII)>0){
                    nextPray.innerText=(salawat[i+1]);
                    index=i+1;
                    console.log(temMetenaint)
                    break;
                  }
                  else{
                  console.log  (i)                 
                   }
                }
                     tempS=(temp[index].innerText).split(":")
                    

                    intervalID= setInterval(()=>{
                       tempM=(heureMetenaint.innerText).split(":")
                     tempRest.innerText= tempDefirence(tempM,tempS)
                    }, 1000);


            })

})
