function Banner(){
   		
                this.img = document.querySelectorAll(".cont img");
                this.left = document.getElementById("left")
                this.right = document.getElementById("right")
                
                this.index = 0;

                this.iPrev = this.img.length - 1;
                this.init()
            }
            Banner.prototype.init = function(){
                var that = this;
                this.left.onclick = function(){
                    that.changeIndex(0)
                }
                this.right.onclick = function(){
                    that.changeIndex(1)
                }
            }
            Banner.prototype.changeIndex = function(type){
                if(type == 0){
                    if(this.index == 0){
                        this.index = this.img.length-1;
                        this.iPrev = 0;
                    }else{
                        this.index--;
                        this.iPrev = this.index + 1;
                    }
                    this.display(1)
                }else{
                    if(this.index == this.img.length-1){
                        this.index = 0;
                        this.iPrev = this.img.length-1
                    }else{
                        this.index++;
                        this.iPrev = this.index-1
                    }
                    this.display(-1)
                }
            }
            Banner.prototype.display = function(type){
                console.log(this.iPrev,this.index)
                this.img[this.iPrev].style.left = 0;
                move(this.img[this.iPrev],{left:1200*type})
                this.img[this.index].style.left = -1200*type+"px";
                move(this.img[this.index],{left:0})
            }
  
            
new Banner();