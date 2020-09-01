// 유효성검사
let id = document.querySelector(".userText")
let comment = document.querySelector("#commentText")
let tweetBtn = document.querySelector(".tweetBtn")
let idtext = /^[a-zA-z0-9]{4,12}$/;
let empty = function(name, "입력하세요") {
    if (name.value.length === 0) {
        alert name + `를 입력하세요`
        return false
    }
    return true
}



tweetBtn.onclick = function() {
        console.log(id.value)
        console.log(comment.value)
        if (!empty(id, "입력하세요") {
                return false
            }
            if (!idtext.test(id.value)) {
                alert("id를 똑바로 입력하세요")
                return false
            }
            if (typeof comment.value !== "string") {
                alert("comment를 확인하세요")
                return false
            }
            return true
        }
















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