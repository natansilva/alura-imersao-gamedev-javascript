class TreeScenario {
    constructor(){
        this.backgroundScenario00 = new Scenario(loadImage('images/scenario/tree/Layer_0000_9.png'), 0, -30);
        this.backgroundScenario01 = new Scenario(loadImage('images/scenario/tree/Layer_0001_8.png'));
        this.backgroundScenario02 = new Scenario(loadImage('images/scenario/tree/Layer_0002_7.png'));
        this.backgroundScenario03 = new Scenario(loadImage('images/scenario/tree/Layer_0003_6.png'));
        this.backgroundScenario04 = new Scenario(loadImage('images/scenario/tree/Layer_0004_Lights.png'));
        this.backgroundScenario05 = new Scenario(loadImage('images/scenario/tree/Layer_0005_5.png'));
        this.backgroundScenario06 = new Scenario(loadImage('images/scenario/tree/Layer_0006_4.png'));
        this.backgroundScenario07 = new Scenario(loadImage('images/scenario/tree/Layer_0007_Lights.png'));
        this.backgroundScenario08 = new Scenario(loadImage('images/scenario/tree/Layer_0008_3.png'));
        this.backgroundScenario09 = new Scenario(loadImage('images/scenario/tree/Layer_0009_2.png'));
        this.backgroundScenario10 = new Scenario(loadImage('images/scenario/tree/Layer_0010_1.png'));
    }

    show(){
        this.backgroundScenario09.show();
        this.backgroundScenario09.animate(0.5);
        this.backgroundScenario08.show();
        this.backgroundScenario08.animate(1);
        this.backgroundScenario07.show();
        this.backgroundScenario07.animate(1);
        this.backgroundScenario06.show();
        this.backgroundScenario05.show();
        this.backgroundScenario05.animate(2);
        this.backgroundScenario04.show();
        this.backgroundScenario04.animate(3);
        this.backgroundScenario03.show();
        this.backgroundScenario03.animate(3);
        this.backgroundScenario02.show();
        this.backgroundScenario02.animate(3);
        this.backgroundScenario01.show();
        this.backgroundScenario00.show();
    }

    toogle(){
        this.backgroundScenario09.toogle();
        this.backgroundScenario08.toogle();
        this.backgroundScenario07.toogle();
        this.backgroundScenario06.toogle();
        this.backgroundScenario05.toogle();
        this.backgroundScenario04.toogle();
        this.backgroundScenario03.toogle();
        this.backgroundScenario02.toogle();
        this.backgroundScenario01.toogle();
        this.backgroundScenario00.toogle();
    }
}