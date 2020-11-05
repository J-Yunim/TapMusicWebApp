window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#6860d3","#60b2d3" ];
    const keys=[1,2,3,4,5,6]

    window.addEventListener('keydown', function(e){
        if (e.code.slice(-1) in keys){
            index = parseInt(e.code.slice(-1));
            sounds[index].currentTime = 0;
            sounds[index].play();
            creatBubbles(index);
        }
        
    });

    pads.forEach((pad, index) =>{
        pad.addEventListener('click',function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            creatBubbles(index);
        });
    });

    const creatBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };
});