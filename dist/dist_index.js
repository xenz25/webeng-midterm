$(function(){var e,t,o=document.querySelector("#bgCrousel"),l=(o=new bootstrap.Carousel(o,{interval:3e3,wrap:!1,touch:!0}),0);$(".show-me").click(()=>{$(".img-container").toggle(1e3,()=>{if($(".show-me").html(l%2==0?"HIDE ME":"SHOW ME"),$(".sub-text").fadeToggle(500),$(".hidden-portion").fadeToggle(500),l%2==1)clearInterval(e),clearInterval(t),$(".main-title").css("color","#000000"),$(".know-text").html("KNOW"),$(".my_img").css("border-radius","0%");else{e=$(this).toggleColors("main-title",["#FF0000","#00FF00","#0000FF","#FFFFFF","#000000"],200);var o=0;$(".know-text").html("CLICK MY PHOTO"),t=setInterval(()=>{$(".my_img").css("border-radius",`${50==o?50:o+=5}%`)},50)}l=(l+1)%2})}),$(".open-ytb").click(()=>{window.open("https://youtu.be/WnjoZbAVGlc","_blank")}),$(".my_img").click(()=>{window.open("https://www.facebook.com/AllHail.thePowerofJesusName","_blank"),$(".know-text").html("YOU SAW MY FACEBOOK PROFILE?")}),$.fn.toggleColors=((t,o,l)=>{var r=o.length,n=0;return e=setInterval(()=>{$(`.${t}`).css("color",o[n]),n=(n+1)%r},l)})});