/*-----------------Home Page--------------------------*/

let HomeBody = document.getElementById('homeBody');
HomeBody.style.display='block';

let Footer = document.getElementById('footer');
Footer.style.display='block';

let BedCategory = document.getElementById('bedCategory');
BedCategory.style.display='none';

let ProductInfo = document.getElementById('productInfo');
ProductInfo.style.display='none';

$('#btnBeds').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='block';
    ProductInfo.style.display='none';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});

var btnProductDetails1 = document.getElementById("btnProductDetails1");
var btnProductDetails2 = document.getElementById("btnProductDetails2");
var btnProductDetails3 = document.getElementById("btnProductDetails3");


btnProductDetails1.addEventListener('click',function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='block';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});

btnProductDetails2.addEventListener('click',function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='block';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});

btnProductDetails3.addEventListener('click',function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='block';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});


