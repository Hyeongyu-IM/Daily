/*---time setting---*/
let today = new Date();
let month = addzero(today.getMonth() + 1);
let day = addzero(today.getDate());
let year = today.getFullYear();
let hour = addzero(today.getHours());
let min = addzero(today.getMinutes());
let curdatetime = `${year}-${month}-${day} ${hour} : ${min}`;

function addzero(num) {
    return num < 10 ? `0${num}` : num;
}


let id = document.querySelector('.userText');
let comment = document.querySelector('#commentText');
let tweetBtn = document.querySelector('.tweetBtn');
let content = document.querySelector('template').content;
let user = content.querySelector('.username');
let date = content.querySelector('.date');
let commentText = content.querySelector('.text');
let back = document.querySelector('.back')
let checkNew = document.querySelector('.checkBtn')

/*---New Tweet---*/
// 버튼에 이벤트를 추가
// 버튼을 누르면 입력한값이 출력되도록 설정
// 나중에 불러올수 있도록 DATA에 추가
tweetBtn.addEventListener('click', newtweet);

function newtweet() {
    user.textContent = id.value;
    commentText.textContent = comment.value;
    date.textContent = curdatetime;

    document
        .querySelector('#list')
        .insertBefore(
            document.importNode(content, true),
            document.querySelector('#list').firstChild
        );

    let newTweet = {
        user: id.value,
        message: comment.value,
        created_at: curdatetime,
    };
    DATA.push(newTweet);

    let userupdate = document.querySelectorAll(".username")
    userupdate[0].addEventListener("click", filter);
}
/*---Print tweet---*/

function printcomment() {
    for (let i = 0; DATA.length > i; i++) {
        user.textContent = DATA[i].user;
        commentText.textContent = DATA[i].message;
        date.textContent = DATA[i].created_at;

        document
            .querySelector('#list')
            .appendChild(document.importNode(content, true));
    }
    let username = document.querySelectorAll('.username');

    for (let i = 0; username.length > i; i++) {
        username[i].addEventListener('click', filter)
    }
}
/*---name filter---*/


function filter(event) {
    //눌러진 데이터의 값을 읽어오기 event.target.value
    //데이터의 값과 다른값들을 비교후 true값을 모아 출력하기 filter

    let ul = document.querySelector('#list');
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    let filtered = DATA.filter(function(name) {
        if (event.target.textContent === name.user) {
            return true;
        }
    });

    for (let i = 0; filtered.length > i; i++) {
        user.textContent = filtered[i].user;
        commentText.textContent = filtered[i].message;
        date.textContent = filtered[i].created_at;

        document
            .querySelector('#list')
            .appendChild(document.importNode(content, true));
    }
}

/*---refresh button---*/
back.addEventListener("click", refresh);

function refresh() {

    let ul = document.querySelector('#list');
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    for (let i = DATA.length - 1; - 1 < i; i--) {
        user.textContent = DATA[i].user;
        commentText.textContent = DATA[i].message;
        date.textContent = DATA[i].created_at;

        document
            .querySelector('#list')
            .appendChild(document.importNode(content, true));
    }
    let username = document.querySelectorAll('.username');

    for (let i = 0; username.length > i; i++) {
        username[i].addEventListener('click', filter)
    }
}

/*---check new tweet---*/

checkNew.addEventListener("click", generateNewTweet);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



function generateNewTweet() {

    user.textContent = randomUser[getRandomInt(0, randomUser.length)];
    commentText.textContent = randomMessage[getRandomInt(0, randomMessage.length)];
    date.textContent = curdatetime;

    document
        .querySelector('#list')
        .insertBefore(
            document.importNode(content, true),
            document.querySelector('#list').firstChild
        );

    let newTweet = {
        user: randomUser[getRandomInt(0, randomUser.length)],
        message: randomMessage[getRandomInt(0, randomMessage.length)],
        created_at: curdatetime,
    };
    DATA.push(newTweet);

    let userupdate = document.querySelectorAll(".username")
    userupdate[0].addEventListener("click", filter);
}

printcomment();

// 트윗버튼을 누르면 아이디와 내용을 받아와서 ul에 추가해준다
// check new tweet을 누르면 랜덤으로 내용을 출력한다.
// 아이디를 클릭하면 해당 아이디가 작성한 트윗만을 볼수있도록 만든다

// let target = document.querySelector("#list");
// let render = document.querySelector("#render");
// let tweetBtn = document.querySelector(".tweetBtn")
// let newtweet = document.querySelector(".checkBtn")
// let ID = document.querySelector(".username")
// let text = document.querySelector(".text")
// let date = document.querySelector(".date")

// let today = new Date()

// function add() {
//     let comment = document.importNode(render.content, true);

//     ID.innerHTML =
// }

// let comment = document.importNode(render.content, true);
// target.appendChild(comment);

// your code here

// DATA는 이미 작성된 트윗을 표시합니다.
//console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
//console.log(generateNewTweet());

//document.getElementById('test').innerHTML = 'hello twittler, check developer console!';