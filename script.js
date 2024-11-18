
const shareButton = document.querySelector('.bottom-bar button');
const bottomBar = document.getElementsByClassName('share-mobile')[0];
const hideBar = document.getElementsByClassName('hide-bar')[0];
const sharePc = document.getElementsByClassName('share-pc')[0];
const svgShare = document.getElementsByClassName('svg-share')[0]
const path = svgShare.querySelector('path')
let mediaQueryMobile = window.matchMedia("(max-width: 1025px)");


if(mediaQueryMobile.matches){
    shareButton.onclick = function(a){
        bottomBar.classList.toggle('hide');
    }

    hideBar.onclick = function(){
        bottomBar.classList.toggle('hide');
    }
}
else{
    shareButton.onclick = function(){
        sharePc.classList.toggle('hide');
        
        function verificarClasse(a,b){
        return a.classList.length === 1 && a.classList.contains(b)
        }

        if(verificarClasse(sharePc,'share-pc')){
            shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)';
            path.setAttribute('fill','white');
        }
        else{
            shareButton.style.backgroundColor = 'hsl(222, 52%, 95%)';
            path.setAttribute('fill','#708195');
        }
}
}
