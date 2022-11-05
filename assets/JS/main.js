    console.log("ádasfas")
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    let menuModal = $('.js-menu-modal')   
    let modalCLoses = $$('.js-close')
    let modalOpen = $('.js-menu')
    let modalContainer = $('.js-menu-modal-container')
    let naviBtn = $$('.js-navi-btn')
    let foodPage = $$('.js-food-page') 

    
    // Thêm class open vào modal 
    function ShowMenuModal() {
        menuModal.classList.add('open')
    }

    // Bỏ class open ra khỏi modal 
    function HideMenuModal() {
        menuModal.classList.remove('open')
    }

    //chuyển trang
    function nextPage() {
        naviBtn.forEach((item, i) => 
        item.classList.remove('chosen-btn'))
        foodPage.forEach((page) =>
        page.classList.remove('open'))
        this.classList.add('chosen-btn')
        foodPage[Number(this.innerText) - 1].classList.add('open') //thêm class open để mở từng trang tương ứng với btn
    }

    naviBtn.forEach((item) =>
    item.addEventListener('click', nextPage))

    // Click vào menu sẽ mở modal 
    modalOpen.addEventListener('click', ShowMenuModal)

    // Đếm từng class có khả năng đóng modal 
    for (const modalClose of modalCLoses) {
        modalClose.addEventListener('click', HideMenuModal)
    }

    // Bấm vào khoảng ko để tắt modal 
    menuModal.addEventListener('click', HideMenuModal)

    // cách để phần tắt modal chỉ dừng lại ở khoảng ko bên ngoài chứ ko chạm vào phần container 
    // cách viết nhanh hơn ko cần set function trước 
    modalContainer.addEventListener('click', function(event){
        event.stopPropagation() //chấm dứt hvi sự kiện nổi bọt
    })

    //ngăn chặn hvi scroll
    let menuItemContainer = $('.menu-items-container')

    menuItemContainer.onscroll = function(e) {
        e.preventDefault()
    }


    // lướt xuống thì items sẽ biến mất dần
    // let foodItemRow = $$('.js-food-page .row')
    // console.log(foodItemRow[0].outerHTML)
    // window.onscroll = function(e) {
    //     // console.log(foodItemRow[0].getBoundingClientRect().top)
    //     itemHeight = foodItemRow[0].getBoundingClientRect().top + 380
    //     // for(let i = 0; i < foodItemRow.length; i++){
    //         itemHeight > 0 ? foodItemRow[0].style.height = itemHeight+ 'px': foodItemRow[i].style.height = 0 
    //     // }
    // }





    //RANDOM BTN
    var randomBtn = $('.random-btn')
    var demo = $('.demo')
    var foodItem = $$('.food-title')

   
function randNum() {
  var randNumber = Math.floor(Math.random()*16)
  demo.innerHTML = foodItem[randNumber].innerText
}

//PHẦN CONTACT MODAL
let contactModalBtn = $('.contact-title')
let contactModal = $('.contact-layer')
let contactCloseBtn = $('contact-close')
let contactContainer = $('.contact-container')

openContactModal = () => contactModal.classList.add('open')

hideContactModal = () => contactModal.classList.remove('open')

 // Bấm vào khoảng ko để tắt modal 
contactModal.addEventListener('click', HideMenuModal)

contactContainer.addEventListener('click', function(event){
    event.stopPropagation() //chấm dứt hvi sự kiện nổi bọt
})



