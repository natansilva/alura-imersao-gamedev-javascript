class Scenario {
    constructor(image) {
      this.image = image;
      this.startScenario();
    }
  
    startScenario(){
      this.xImage1 = 0;
      this.xImage2 = width;
    }
  
    show(){
      console.log(height);
      image(this.image, this.xImage1, 0, width, height, 0, 210);
      image(this.image, this.xImage2, 0, width, height, 0, 210);
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