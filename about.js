
  
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);


    if(pos > 100){
      scrollProgress.style.display = "grid";
    }
    else{
      scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
         document.documentElement.scrollTop = 0;
    });

 

    
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


let newsbutton = document.querySelector(".newsbtn");
newsbutton.onclick = function() {
  document.querySelector('.wrapper').style.display = 'block';
}




// Function to close the popup when the close button is clicked
function closeFunc() {
  document.querySelector('.wrapper').style.display = 'none';
}





// Handle Subscription

const subscribeBtn = document.getElementById("subscribeBtn");
const emailField = document.getElementById("email");
subscribeBtn.addEventListener("click", function() {
  if (emailField.value) { // Check if email field is not empty
      // Logic for handling subscription could go here

      // Close the popup after subscribing
      closeFunc();
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Subscribed!",
        showConfirmButton: false,
        timer: 2000
        });

      
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter Email",
      
    });
  }
});



window.addEventListener("scroll",function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY>0)
})

const toggle_btn = document.querySelector('#checkbox');

toggle_btn.addEventListener('change',()=>{
  if(toggle_btn.checked){
    document.body.classList.add('blue-mode')
  }
  else{
    document.body.classList.remove('blue-mode')
  }
})

const quotebtn = document.querySelector('.quote');
quotebtn.addEventListener('click',()=>{
  window.open('Get_Your_Quote/quote.html','_blank') 
})
const reviewbtn = document.querySelector('.review');
reviewbtn.addEventListener('click',()=>{
  window.open('Give_Your_Review/review.html','_blank') 
})



// animated counter

const myNum = document.querySelectorAll('.count')
// console.log(myNum.innerText)
let speed = 200;

myNum.forEach( (myCount) => {
    
    
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    // console.log(target_count)
    
    let new_increment_num = Math.floor(target_count / speed);
    
    const updateNumber = () => {
        init_count +=  new_increment_num;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 20)
        }
    }
    
    updateNumber();
    
})


// FAQ ---> for accordion

const accordion = document.getElementsByClassName('contentBx');
for(i = 0;i<accordion.length;i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
  })
}


// Slider code

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', // Change to 'vertical' if you prefer vertical sliding
  loop: true,
  autoplay: {
      delay: 5000, // Slide change interval in milliseconds
      disableOnInteraction: false, // Continue autoplay after user interactions
  },
  
  // Responsive breakpoints
  breakpoints: {
      // when window width is <= 1024px
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      },
      // when window width is <= 768px
      768: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      // when window width is <= 480px
      480: {
          slidesPerView: 1,
          spaceBetween: 10
      }
  },

  // Pagination configuration
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },

  // Navigation arrows configuration
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Enable keyboard control
  keyboard: {
      enabled: true,
  },

  // Enable mousewheel control
  mousewheel: {
      invert: false,
  },

  // Enable lazy loading (optional)
  lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: true,
  },
});


// Hamburger

function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('nav-active');
}