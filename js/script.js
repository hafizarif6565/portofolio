document.addEventListener('scroll',function() {
    if (scrollY >= 608.938) {
        document.querySelector('.navbar').style.backgroundColor = "#F4CE14";
    } else{
        document.querySelector('.navbar').style.backgroundColor = "transparent";
    }
})
