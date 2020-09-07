// 유효성검사
let id = document.querySelector('.userText');
let comment = document.querySelector('#commentText');
let tweetBtn = document.querySelector('.tweetBtn');

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

//작성해야할 함수
// 여러개의 댓글 출력
// 새로운 댓글 등록
// 댓글 추천 비추천

tweetBtn.onclick = function() {
    let content = document.querySelector('template').content;
    let user = content.querySelector('.username');
    let date = content.querySelector('.date');
    let commentText = content.querySelector('.text');

    user.textContent = id.value;
    commentText.textContent = comment.value;
    date.textContent = curdatetime;

    document
        .querySelector('#list')
        .appendChild(document.importNode(content, true));
};

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