class Scenario {
    constructor(image, velocity) {
      this.image = image;
      this.velocity = velocity;
      this.startScenario();
    }
  
    startScenario(){
      this.xImage1 = 0;
      this.xImage2 = width;
    }
  
    show(){
      image(this.image, this.xImage1, 0, width, height);
      image(this.image, this.xImage2, 0, width, height);
    }
  
    animate(){
      if (this.xImage2 == 0) {
        this.startScenario();
      } else {
        this.xImage1 = this.xImage1 - this.velocity;
        this.xImage2 = this.xImage2 - this.velocity;
      }
    }
  }