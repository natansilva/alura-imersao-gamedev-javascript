class Scenario {
    constructor(image) {
      this.image = image;
      this.startScenario();
      this.yImage1 = 0;
      this.yImage2 = 0;
    }
  
    startScenario(){
      this.xImage1 = 0;
      this.xImage2 = width;
    }
  
    show(){
      image(this.image, this.xImage1, this.yImage1, width, height);
      image(this.image, this.xImage2, this.yImage2, width, height);
    }

    hide(){
      this.yImage1 = height;
      this.yImage2 = height;
    }

    unhide(){
      this.yImage1 = 0;
      this.yImage2 = 0;
    }

    toogle(){
      if (this.yImage1 == 0){
        this.hide();
      } else {
        this.unhide();
      }
    }
  
    animate(velocity){
      if (this.xImage2 <= 0) {
        this.startScenario();
      } else {
        this.xImage1 = this.xImage1 - velocity;
        this.xImage2 = this.xImage2 - velocity;
      }
    }
  }