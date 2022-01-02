
let grid_btn = document.querySelector('.grid')
let list_btn = document.querySelector('.list')
grid_btn.addEventListener('click',function(){
    let grid = document.querySelector('.card_content')
    let list = document.querySelector('.list_content')
    grid.style.display="flex";
    list.style.display = 'none';
})
list_btn.addEventListener('click',function(){
    let list = document.querySelector('.list_content')
    let grid = document.querySelector('.card_content')
    grid.style.display="none";
    list.style.display='block';
});