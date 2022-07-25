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

const docbody = document.querySelector('body')

if (isMobile.any()) {
   docbody.classList.add('_mobile')
} else {
   docbody.classList.add('_pc')

}

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

   const BurgerBody = document.querySelector('[data-burger-main-body]')

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
            // @ BurgerBody
            BurgerBody.classList.remove('_active')
         })
      })

      popup.addEventListener('click', (event) => {
         if (!event.target.closest('[data-popup-login-main-body]')) {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')
            // @ BurgerBody
            BurgerBody.classList.remove('_active')
         }
      })
   }

}
popupLogin()




function popupSignUp() {
   const btns = document.querySelectorAll('[data-popup-signup-btn]')
   const popup = document.querySelector('[data-popup-signup]')
   const overflow = document.querySelector('body')

   const crosses = document.querySelectorAll('[data-cross]')

   const BurgerBody = document.querySelector('[data-burger-main-body]')


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
            // @ BurgerBody
            BurgerBody.classList.remove('_active')
         })
      })

      popup.addEventListener('click', (event) => {
         if (!event.target.closest('[data-popup-signup-main-body]')) {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock')
            // @ BurgerBody
            BurgerBody.classList.remove('_active')
         }
      })
   }


}
popupSignUp()














if (isMobile.any()) {
   function dropListFn() {
      const btns = document.querySelectorAll('[data-drop-list-btn]')
      const bodyies = document.querySelectorAll('[data-drop-list-main-body]')

      if (btns.length > 0) {
         btns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
               event.preventDefault()
               bodyies.forEach((body) => {
                  body.classList.toggle('_active')
               })
               btn.classList.toggle('_active')
            })
         })

         document.addEventListener('click', (event) => {
            if (!event.target.closest('[data-drop-list-main-body]') && !event.target.closest('[data-drop-list-btn]')) {
               btns.forEach((btn) => {
                  btn.classList.remove('_active')
               })
               bodyies.forEach((body) => {
                  body.classList.remove('_active')
               })
            }
         })
      }
   }
   dropListFn()
}


function likesFn() {
   const btns = document.querySelectorAll('[data-like]')
   btns.forEach((btn) => {
      btn.addEventListener('mousedown', (event) => {
         const targetBtn = event.target
         targetBtn.classList.toggle('_active')
      })
   })

}
likesFn()





function burgerFn() {
   const btns = document.querySelectorAll('[data-burger-icon]')
   const body = document.querySelector('[data-burger-main-body]')
   const docBody = document.querySelector('body')
   const cross = document.querySelector('[data-menu-cross]')
   if (btns.length > 0) {
      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            body.classList.toggle('_active')
            docBody.classList.toggle('_lock')
         })
      })

      cross.addEventListener('click', (event) => {
         body.classList.remove('_active')
         docBody.classList.remove('_lock')

      })
   }
}
burgerFn()


function scrollFixedFn() {
   const body = document.querySelector('[data-header-fixed]')
   const fixedTarget = document.querySelector('[data-header-fixed-target]')

   window.addEventListener('scroll', (event) => {
      const top = fixedTarget.getBoundingClientRect().top
      if (top < 0) {
         body.classList.add('_active')
      } else {
         body.classList.remove('_active')
      }
   })
}
scrollFixedFn()

