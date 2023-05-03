
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const Sbtn = document.querySelector('.SignInbtn-popup');
        const Lbtn = document.querySelector('.Loginbtn-popup');
        const icon = document.querySelector('.icon-clos');
    
        registerLink.addEventListener('click',()=>{
            wrapper.classList.add('active');
        });
        
        loginLink.addEventListener('click',()=>{
                wrapper.classList.remove('active');
        });

        Lbtn.addEventListener('click',()=>{
            wrapper.classList.add('active-popup');
        });
        
        Sbtn.addEventListener('click',()=>{
            wrapper.classList.add('active-popup');
        });

        icon.addEventListener('click',()=>{
            wrapper.classList.remove('active-popup');
        });
        
        // for resources in loginpage
        $(document).ready(function () {
            $(".res").click(function () {
              $(".test").slideToggle("slow");
            });
          });


        //   for user account details
        // $(document).ready(function () {
        //     $(".user-btn").click(function () {
        //       $(".user-info-container").slideToggle("slow");
        //     });
        //   });

        // $(document).ready(function(){
        //     $(".user-btn").click(function(){
        //         $(".user-info-container").animate({
        //             width: "toggle"
        //         });
        //     });
        // });
