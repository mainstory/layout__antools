const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
}

// if (isMobile.any()) {

// }

function animBtn() {
   const btns = document.querySelectorAll('[data-anim-btn]')
   if (btns.length > 0) {
      btns.forEach((btn) => {
         btn.addEventListener('mousedown', (event) => {
            btn.classList.add('_anim')
         })
      })
      document.addEventListener('mouseup', (event) => {
         btns.forEach((btn) => {
            btn.classList.remove('_anim')
         })
      })
   }

}
animBtn()



function popupLogin() {
   const btns = document.querySelectorAll('[data-popup-login-btn]')
   const popup = document.querySelector('[data-popup-login]')
   const overflow = document.querySelector('body')

   const crosses = document.querySelectorAll('[data-cross]')

   if (btns.length > 0) {
      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            popup.classList.add('_active')
            overflow.classList.add('_lock')
         })
      })

      crosses.forEach((cross) => {
         cross.addEventListener('click', (event) => {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')

         })
      })

      popup.addEventListener('click', (event) => {
         if (!event.target.closest('[data-popup-login-main-body]')) {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')

         }
      })
   }


}
popupLogin()


function popupSignIn() {
   const btns = document.querySelectorAll('[data-popup-signin-btn]')
   const popup = document.querySelector('[data-popup-signin]')
   const overflow = document.querySelector('body')

   const crosses = document.querySelectorAll('[data-cross]')

   if (btns.length > 0) {
      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            popup.classList.add('_active')
            overflow.classList.add('_lock')
         })
      })

      crosses.forEach((cross) => {
         cross.addEventListener('click', (event) => {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')

         })
      })

      popup.addEventListener('click', (event) => {
         if (!event.target.closest('[data-popup-signin-main-body]')) {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')

         }
      })
   }


}
popupSignIn()




