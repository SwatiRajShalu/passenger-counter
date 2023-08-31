let countel=document.getElementById("count-el")
let count=0
let entries=document.getElementById("entries-el")
function increament(){
    count+=1
    countel.textContent=count
}
function decreament(){
    count-=1
    countel.textContent=count
}
function save(){
    entries.textContent+=count+" - "
    count=0
    countel.textContent=count

}