const translations = {
    en: {
        sel: "Select a language:",
    },
    vn: {
        sel: "Chọn ngôn ngữ:",
    }
}

const authors = {
    marcus: "Marcus Aurelius", thucydides: "Thucydides", aristoteles: "Aristoteles", socrates: "Socrates", sartre:"Jean-Paul Sartre",voltaire:"Voltaire"
}

const quotes = {
    en: {
        marcus: {
            author: "Marcus Aurelius",
            quote: ["The wise man accepts his pain, endures it, but does not add to it",
                "You have Power over your mind - not outside events.",
                "Waste no time arguing what a good man should be. Be one."],
                },
        thucydides: {
            author: "Thucydides",
            quote: ["The strong do what they can and the weak suffer what they must",
                "Self-control is the chief element in self-respect, and sel-respect is the chief element in courage.",
                "Most people, in fact, will not take the trouble in finding out the truth, but are much more inclined to accept the first story they hear"],
                },
        aristoteles: {
            author: "Aristoteles",
            quote: ["Knowing yourself is the beginning of all wisdom.",
                "What is a friend? A single soul dwelling in two bodies.",
                "We are what we repeatedly do. Excellence, then, is not an act, but a habit."],
                },
        socrates: {
            author: "Socrates",
            quote: ["The unexamined life is not worth living.",
                "Be kind, for everyone you meet is fighting a hard battle.",
                "The only true wisdom is in knowing you know nothing."],
                },
        sartre: {
            author: "Jean-Paul Sartre",
            quote: ["We are our choices.",
                "There many be more beautiful times, but this one is ours.",
                "The more sand that has escaped from the hourglass of our life, the clearer we should see through it."],
                },
        voltair: {
            author: "Voltaire",
            quote: ["The more I read, the more I acquire, the more certain I am that I know nothing.",
                "Love truth, but pardon error.",
                "I don't know where I am going, but I am on my way."]
                  },

        },
    vn: {
        marcus: {
            author: "Marcus Aurelius",
            quote: ["Người thông thái chấp nhận nỗi đau của mình, nhưng không bồi thêm vào.",
                "Bạn có Sức mạnh điều khiển tâm trí mình, không phải sự kiện bên ngoài.",
                "Đừng phí thời gian tranh cãi người tốt phải làm gì. Hãy làm 1 người tốt."],
        },
        thucydides: {
            author: "Thucydides",
            quote: ["Người mạnh mẽ làm những gì họ có thể, và người yếu đuối thì chịu đựng.",
                "Tự chủ là yếu tố của tự tôn, và tự tôn là yếu tố của can đảm.",
                "Đa số sẽ không cố gắng tìm ra sự thật, nhưng lại có khuynh hướng tin vào câu chuyện đầu tiên mà họ nghe thấy."],
        },
        aristotle: {
            author: "Aristoteles",
            quote: ["Biết mình là khởi đầu của mọi trí tuệ.",
                "Một người bạn là gì? Là một linh hồn trong hai cơ thể.",
                "Chúng ta là những việc mình lặp đi lặp lại. Ưu tú, không phải là 1 hành động, mà là 1 thói quen."],
        },
        socrates: {
            author: "Socrates",
            quote: ["Cuộc đời không có sự trải nghiệm, là cuộc đời không đáng sống.",
                "Hãy tử tế, vì những người bạn gặp, đang chiến đấu trong cuộc chiến của chính mình.",
                "Tri thức chân chính, là biết rằng mình không biết gì cả."],
        },
        satre: {
            author: "Jean-Paul Sartre",
            quote: ["Chúng ta là những sự lựa chọn của chính mình.",
                "Có thể sẽ có những thời đại đẹp hơn, nhưng lúc này là thời đại của chúng ta.",
                "Càng nhiều cát chạy khỏi đồng hồ cát cuộc đời, ta càng thấy rõ sự đời."],
        },
        voltair: {
            author: "Voltaire",
            quote: ["Càng đọc, càng học, tôi càng chắc chắn rằng mình không biết gì cả.",
                "Yêu sự thật, nhưng hãy tha thứ lỗi lầm.",
                "Tôi không biết mình sẽ đi đến đâu, nhưng tôi đang trên con đường của chính mình."]
        },

    }
}

const languageSelectOp = document.querySelector("select");
let p = document.getElementById("p");

languageSelectOp.addEventListener("change", (event) => {
    setLanguage(event.target.value)
});

const setLanguage = (language) => {
    if (language == "vn") {
        p.innerText = translations.vn.sel;
    } else if(language == "en"){
        p.innerText = translations.en.sel;
    }
}

let bottleName = "../pictures/bottle.gif";
let bottleWidth = 100;
let bottleHeight = 100;
let bottleVelocityX = 10;
let bottleVelocityY = 10;

let paperName = "../pictures/paper.gif";
let paperWidth = 100;
let paperHeight = 100;
let paperVelocityX = 10;
let paperVelocityY = 10;



let bgWidth = window.screen.width*1/5;    
let bgHeight = window.screen.height*1/3;


window.onload = function(){
   
    setTimeout(() => { moveBottle() }, 2000);
    setInterval(moveBottle, 30000);
    setTimeout(() => { movePaper() }, 12000 );
    setInterval(movePaper, 40000);
    
}

function addBottle() {
    let bottleImg = document.createElement("img");
    bottleImg.src = bottleName;
    bottleImg.width = bottleWidth;
    bottleImg.height = bottleHeight;
    bottleImg.draggable = false;
    bottleImg.style.position = "absolute";
    bottleImg.onclick = function () {
        document.body.removeChild(this);
        const num1 = Math.floor(Math.random() * 6) + 1;
        const num2 = Math.floor(Math.random() * 3 )+ 1;
        note();
        
    }

    document.body.appendChild(bottleImg);


    bottle = {
        image: bottleImg,
        x: bgWidth - bottleWidth+200,
        y: bgHeight - bottleHeight + 250,
        velocityX: bottleVelocityX,
        velocityY: bottleVelocityY
    };

    bottle.image.style.left = String(bottle.x) + "px";
    bottle.image.style.top = String(bottle.y) + "px";
}

function moveBottle() {

    addBottle();
    bottle.image.animate([
        {transform: "translate(0px,0px)"},
        { transform: "translate(100px, 100px)" },
    ],
        
        {
            duration: 1000,
            iterations: 1,
            fill: 'forwards',
        }
    
    )   

}

function addPaper() {
    let paperImg = document.createElement("img");
    paperImg.src = paperName;
    paperImg.width = paperWidth;
    paperImg.height = paperHeight;
    paperImg.draggable = false;
    paperImg.style.position = "absolute";
    paperImg.onclick = function () {
        document.body.removeChild(this);
        const num1 = Math.floor(Math.random() * 6);
        const num2 = Math.floor(Math.random() * 3);
        
        note();
    }

    document.body.appendChild(paperImg);


    paper = {
        image: paperImg,
        x: bgWidth - paperWidth + 100,
        y: bgHeight - paperHeight +100,
        velocityX: paperVelocityX,
        velocityY: paperVelocityY
    };

    paper.image.style.left = String(paper.x) + "px";
    paper.image.style.top = String(paper.y) + "px";
}

function movePaper() {

    addPaper();
    paper.image.animate([
        { transform: "translate(0px,0px)" },
        { transform: "translate(300px, 300px)" },
    ],

        {
            duration: 3000,
            iterations: 1,
            fill: 'forwards',
        }

    )

}

function note() {
    const stc = document.createElement("h1");
    
    stc.style.position = "absolute";
    stc.style.height = "auto";
    stc.style.width = "50%";
    stc.style.top = "35%";
    stc.style.borderRadius = "10px";
    stc.style.fontWeight = "bold";
    stc.style.fontSize = "30px";
    stc.style.textAlign = "center";
    stc.style.backgroundColor = "rgb(122,155,170,90%)";
    stc.onclick = function () {
        document.body.removeChild(this);
    };
  
    note.onclick = function () {
        document.body.removeChild(this);
    };


    document.body.appendChild(stc);
    
    setTimeout(() => { document.body.removeChild(stc) }, 6000);
     
    



    const num1 = Math.floor(Math.random() * 6);
    console.log(num1);
    const num2 = Math.floor(Math.random() * 3);
    console.log(num2);
    if (p.innerHTML === "Select a language:") {
        stc.innerText = quotes.en[Object.keys(quotes.en)[num1]]["quote"][num2] + `  - ${quotes.en[Object.keys(quotes.en)[num1]]["author"]}`;
        console.log(quotes.en[Object.keys(quotes.en)[num1]][num2]);
    } else if (p.innerHTML === "Chọn ngôn ngữ") {
        console.log(quotes.vn[Object.keys(quotes.vn)[num1]]["quote"][num2]) ;
        stc.innerText = quotes.vn[Object.keys(quotes.vn)[num1]]["quote"][num2] + `  - ${quotes.vn[Object.keys(quotes.vn)[num1]]["author"]}`;
    }
    
}


