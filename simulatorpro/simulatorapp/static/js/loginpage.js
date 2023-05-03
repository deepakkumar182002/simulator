  
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

        
        // <a id="res" href="#">
        // <span>Resources</span>
        //         <li class="test">gdfdhd</li>
        //         <li class="test">gdfdhd</li>
        //         <li class="test">gdfdhd</li>

        // <a href="#">components</a>
        //     <a href="#">Projects</a>
        //     <a href="#">Classroom</a>
        //     <a href="#">Learning center</a>
        //     <a href="#">Resources</a>