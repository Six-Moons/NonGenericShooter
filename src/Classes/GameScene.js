class GameScene {
    constructor(ThreeScene, name) {
        this.ThreeScene = ThreeScene;
        this.Objects = [];
        this.name = name;
        this.player = null;
        this.objsMeshes = [];
    }

    addObject(obj) {
        this.ThreeScene.add(obj.mesh);
        // this.Objects.push(obj);
        this.objsMeshes.push(obj.mesh);
    }

    addLight(light) {
        this.ThreeScene.add(light);
    }

    addPlayer(player) {
        this.player = player;
        this.ThreeScene.add(player.mesh);
        // this.addObject(player);
    }

    update(delta) {
        // this.Objects.forEach(obj => {
        //     obj.update(delta, this);
        // });
        this.player.update(delta, this);
    }

    animate() {
        this.Objects.forEach(obj => {
            obj.animate();
        });
    }
}