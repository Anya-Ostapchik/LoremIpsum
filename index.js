const select = document.querySelector('#form__select');
const list = document.querySelector('#form__select_list');
const mainItem = document.querySelector('#select__list_main');
const listElems = document.querySelectorAll('.select_list_item');

select.addEventListener('click', function(){
    mainItem.classList.toggle('select__list_main_active');
    list.classList.toggle('form__select_list_active');
    select.classList.toggle('form__select_active');
});

for(let elem of listElems){
    elem.addEventListener('click', function(){
        mainItem.textContent = this.textContent;
    });
}

const headerLink = document.querySelectorAll('.header__link');

for(let link of headerLink){
    link.addEventListener('click',function(){
        for(let elem of headerLink){
            elem.classList.remove('header__link_blue');
        }
        this.classList.add('header__link_blue');
    } );
}