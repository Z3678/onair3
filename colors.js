class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

   
    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            this.header.style.background = "wheat";
            document.body.style.background = "wheat";
        }
        else if(color == "color-2"){
            this.header.style.background =" rgb(247, 211, 52)";
            document.body.style.background ="rgb(247, 211, 52) ";
        }

        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();