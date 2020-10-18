var mb=document.getElementById('subbtn'); 
 const cname=document.getElementById("cname");
const city_name=document.getElementById("city_name");
 const temp=document.getElementById("temp");
 const temp_staus=document.getElementById("temp_status");
 const data_hide=document.querySelector(".middle_layer");

//  const date=document.getElementById("day");
//  const addfun=new Date();
// const tdate=addfun.getDate();
// const month=addfun.getMonth()+1;
// const year=addfun.getFullYear();
//  date.innerHTML=`${tdate}/${month}/${year}`;
const handler= async(event) => {
    event.preventDefault();
    let cityval=cname.value;
    data_hide.classList.add('data_hide');
 
 if(cityval=== ""){
     city_name.innerHTML="Please Enter City Name";
    
 }else{
     try{
         let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=bd275f06f779148eb86d0935feac5994`;
         const response= await fetch(url);
         const data=await response.json();
         const array =[data];
         city_name.innerHTML=`${array[0].name},${array[0].sys.country}`;
        temp.innerHTML=array[0].main.temp;
        temp_status.innerHTML=array[0].weather[0].main;

   data_hide.addClass
        if(temp_status.innerHTML==="Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun'style='color:orange;'> </i>";
        }
        else if(temp_status.innerHTML==="Rain"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud-rain'style='color:blue;'> </i>";
       
        }
        else if(temp_status.innerHTML==="Clouds"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud'style='color:white;'> </i>";
       
        }
         else{
            temp_status.innerHTML=
            "<i class='fas fa-cloud'style='color:white;'> </i>";
            data_hide.classList.remove('data_hide');

         }
     }
     catch{
         city_name.innerHTML="Please Enter City Name";
         data_hide.classList.add('data_hide');

     }
    
 }


}
  
  mb.addEventListener("click", handler);
