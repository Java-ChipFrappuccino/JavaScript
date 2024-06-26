// 버튼 요소 가져오기
let voteBox = document.querySelector("#vote-box");
let likeButtonBox = voteBox.querySelector(".like-box");
let disLikeButtonBox = voteBox.querySelector(".dislike-box");

let likeCount = likeButtonBox.querySelector(".like-box > span:first-child");
let disLikeCount = disLikeButtonBox.querySelector(".dislike-box > span:first-child");
let data = {};
let boardId = Number(voteBox.dataset.boardid);
let url = '/api/community-board-likes/'+boardId;

voteBox.onclick = function(e) {
    e.preventDefault();
    // 좋아요 클릭
    if (likeButtonBox.contains(e.target)) {
        // 현재 값 가져오기
        let currentLikeCount = Number(likeCount.innerText);
        // 값 증가
        let addLikeCount = currentLikeCount + 1;
        // 버튼 텍스트 업데이트
        likeCount.innerText = addLikeCount;

        // let boardId = Number(voteBox.dataset.boardid);
        // let userId = Number(voteBox.dataset.userid);
        let type = 1;

        data = {boardId: boardId, type: type};

        // let test = JSON.stringify(data);
        // console.log(test);
        // // POST 요청 보내기
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // body: data.json()
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         // API 응답 처리
        //         console.log(data);
        //         // 여기에 응답에 따른 추가적인 처리 작성
        //     })
        //     .catch(error => {
        //         console.error('There was an error with the fetch operation:', error);
        //         // 에러 처리
        //     });

        async function like() {
            const response = await fetch(url+'/like',
                {
                    method: 'POST',
                    // headers: {
                    //     'Content-Type': 'text/plain'
                    // },
                    // body: boardId
                });
            const jsonData = await response.json();

            if (jsonData === 100) {
                alert("좋아요 성공");
            }

        }

        like();
    }

    // 싫어요 클릭
    if (disLikeButtonBox.contains(e.target)) {
        // e.target.closest(".dislike-box") 이렇게도 쓸수있음
        // 현재 값 가져오기
        let currentDisLikeCount = Number(disLikeCount.innerText);
        // 값 증가
        let addDisLikeCount = currentDisLikeCount + 1;
        // 버튼 텍스트 업데이트
        disLikeCount.innerText = addDisLikeCount;

        // let boardId = voteBox.dataset.boardid;
        // let userId = voteBox.dataset.userid;
        // let type = 2;

        // data = { boardId: boardId, userId: userId, type: type };

        async function disLike() {
            const response = await fetch(url+'dislike',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: boardId
                });
            const jsonData = await response.json();

            if (jsonData === 200) {
                alert("싫어요 성공");
            }

        }

        disLike();
    }
};


// // 클릭 이벤트 핸들러 등록
// likeButtonBox.addEventListener("click", function(e) {
//
//     e.preventDefault();
//
//     // 현재 값 가져오기
//     let currentLikeCount = Number(likeCount.innerText);
//     console.log("현재 좋아요 수",currentLikeCount);
//     // 값 증가
//     let addLikeCount = currentLikeCount + 1;
//     console.log(addLikeCount);
//
//     // 버튼 텍스트 업데이트
//     likeCount.innerText = addLikeCount;
//     // like = "Click to Increment: " + newValue;
// });
//
// // 클릭 이벤트 핸들러 등록
// disLikeButtonBox.addEventListener("click", function(e) {
//     e.preventDefault();
//     // 현재 값 가져오기
//     let currentDisLikeCount = Number(disLikeCount.innerText);
//     console.log("현재 싫어요 수",currentDisLikeCount);
//     // 값 증가
//     let addDisLikeCount = currentDisLikeCount + 1;
//     console.log(addDisLikeCount);
//
//     // 버튼 텍스트 업데이트
//     disLikeCount.innerText = addDisLikeCount;
//     // like = "Click to Increment: " + newValue;
// });