class HillScenario {
    constructor(){
        this.backgroundScenario01 = new Scenario(loadImage('images/scenario/hill/Hills_Layer_01.png'));
        this.backgroundScenario02 = new Scenario(loadImage('images/scenario/hill/Hills_Layer_02.png'));
        this.backgroundScenario03 = new Scenario(loadImage('images/scenario/hill/Hills_Layer_03.png'));
        this.backgroundScenario04 = new Scenario(loadImage('images/scenario/hill/Hills_Layer_04.png'));
        this.backgroundScenario05 = new Scenario(loadImage('images/scenario/hill/Hills_Layer_05.png'));
        this.backgroundScenario06 = new Scenario(loadImage('images/scenario/hill/Hills_Layer_06.png'));

        this.ground = 30;
    }

    show(){
        this.backgroundScenario01.show();
        this.backgroundScenario02.show();
        this.backgroundScenario02.animate(0.5);
        this.backgroundScenario03.show();
        this.backgroundScenario03.animate(2);
        this.backgroundScenario04.show();
        this.backgroundScenario04.animate(3);
        this.backgroundScenario05.show();
        this.backgroundScenario06.show();
    }

    toogle(){
        this.backgroundScenario01.toogle();
        this.backgroundScenario02.toogle();
        this.backgroundScenario03.toogle();
        this.backgroundScenario04.toogle();
        this.backgroundScenario05.toogle();
        this.backgroundScenario06.toogle();
    }
}