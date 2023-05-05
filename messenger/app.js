// TODOS

// 사용자 이름을 입력할수 있다.
// 메세지를 입력할수 있다.
// 작성한 메세지를 등록할수 있다.

// 랜덤 트윗을 생성할수 있다.

// 작성자의 이름을 클릭하면 작성자의 모든 메세지를 확인할수 있고, 뒤로가기 버튼이 생성된다.
// 뒤로가기 버튼을 누르면 모든 메세지가 출력된다.

// 목표
// 함수를 만들 수 있다.
// DOM(document object model)을 컨트롤 할수 있다.
// 데이터를 배열, 객체, 등으로 다룰수 있다.
// 테그의 생성, 정렬, 소멸 등을 다룰수 있다.
// 테그의 내용을 변경할수 있다.
// 테그에 속성이나 메서드를 추가 할수 있다.

// let body = document.getElementById("test")
let body = document.body

let name_title = document.createElement("div")
    name_title.textContent = "작성자"
    body.append(name_title)

let name_input = document.createElement("input")
    body.append(name_input)

let message_title = document.createElement("div")
    message_title.innerText = "메세지"
    body.append(message_title)

let message_input = document.createElement("input")
    body.append(message_input)

let add = document.createElement("button")
    add.addEventListener('click',function(){
        console.dir(name_input.value)
        let newMsg = {
            user: name_input.value,
            message: message_input.value,
            created_at: "now" //todo : 지금 시간입력
        }
        list.append(mkItem(newMsg))
    })
    add.textContent = "등록"
    body.append(add)

let random = document.createElement("input")
    random.addEventListener('click',()=>{
        console.log("randomclick")
        let newMsg = generateNewTweet()
        let item = mkItem(newMsg)
        list.append(item)
        console.log(newMsg)
        // {
        //     user: "랜덤 유저",
        //     message: "랜덤 메시지",
        //     created_at: "now" //todo : 지금 시간 입력
        // }
    })
    random.setAttribute("type","button")
    random.value = "랜덤"
    body.append(random)

    let back = document.createElement("div")
    back.addEventListener('click',()=>{
        //기존 리스트 삭제, origin 리스트 추가
        back.style.display = "none"
        console.log("backbutton")
    })
    back.style.display = "none"

    back.innerHTML = "뒤로가기"
    body.append(back)


    let list = document.createElement("ol")
    body.append(list)

function mkItem(source){
    let item = document.createElement("li")
    // list.append(item)
    let item_name = document.createElement("div")
        item_name.textContent = source.user
        item.append(item_name)
        item_name.addEventListener('click',()=>{
            let newList = []
            list.childNodes.forEach((value, index)=>{
                if (source.user === value.childNodes[0].innerText){
                    newList.push(value)
                }
            })
            // originList 임시 저장
            
            for(let i = list.childNodes.length - 1 ;  i >= 0; i--){
                console.log(list.childNodes.length)
                if(list.childNodes[i].childNodes[0].innerText !== source.user){
                    list.childNodes[i].remove()
                }
            }
            back.style.display = "block"
            // console.log(list.childNodes)
            // console.dir(newList)
            // console.log(source.user)    
        console.log("filter")
        }
        )
    let item_text = document.createElement("div")
        item_text.textContent = source.message
        item_text.style.color = 'red'
        item.append(item_text)
    let item_time = document.createElement("div")
        item_time.textContent = source.created_at
        item.append(item_time)
    return item
}

let base_list = (data)=>{
    // base_list 기본 메시지 5개 출력
    // for(let i=0; i<5; i++){
    //     let item = document.createElement("li")
    //     // list.append(item)
    //     let item_name = document.createElement("div")
    //         item_name.textContent = data[i].user
    //         item.append(item_name)
    //     let item_text = document.createElement("div")
    //         item_text.textContent = data[i].message
    //         item.append(item_text)
    //     let item_time = document.createElement("div")
    //         item_time.textContent = data[i].created_at
    //         item.append(item_time)
    //     list.append(item)
    //     console.log(data[i])
    // }
    for(let i=0; i<5; i++){
        list.append(mkItem(data[i]))
    // list.append(mkItem(data[1]))
    // list.append(mkItem(data[2]))
    // list.append(mkItem(data[3]))
    // list.append(mkItem(data[4]))
    }
}
base_list(DATA)
// console.log(DATA)

// let arr = [1,2,3,4]
// arr.map(function(value,index,array){

// })