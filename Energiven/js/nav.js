const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".darkLight"),
        sidebarOpen = document.querySelector(".sidebarOpen"),
        sidebarClose = document.querySelector(".sidebarClose");

        let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode") {
                body.classList.add("dark")
            }
        

//js codigo para el cambio de color de modo claro y oscuro
        modeToggle.addEventListener("click" , () =>{
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark")
            //codigo js para cuando se refresque la pagina se mantenga en el modo que esta
            if(!body.classList.contains("dark")){
                localStorage.setItem("mode" , "light-mode")
            }else {
                localStorage.setItem("mode" , "dark-mode")
            }
        });

//js codigo para sidebar
        sidebarOpen.addEventListener("click" , () => {
            nav.classList.add("active");
        });

        body.addEventListener("click" , e => {
            let clickedElm = e.target;

            if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
                nav.classList.remove("active");
            }
        });

//js codigo para cambio de color de nav al dar scroll

        window.addEventListener("scroll" , function(){
            const header = document.querySelector("header");
            header.classList.toggle("abajo" , window.scrollY>50);
        });