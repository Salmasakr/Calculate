let count=0
let countEl=document.getElementById("count-el")
function increment(){
    count=count+1
    countEl.innerText=count

}
function save(){
    console.log(count)
}
let number=0
function restart(){
  count=0
  countEl.innerText=count
  count=number
  console.log(number)
}