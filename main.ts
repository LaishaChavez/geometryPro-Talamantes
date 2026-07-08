controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cubo.vy == 0) {
        Cubo.vy = -100
    }
})
let Cubo: Sprite = null
scene.setBackgroundImage(assets.image`Sol`)
Cubo = sprites.create(assets.image`Cubo`, SpriteKind.Player)
controller.moveSprite(Cubo, 99, 0)
Cubo.setStayInScreen(true)
Cubo.setPosition(10, 103)
Cubo.ay = 200
tiles.setCurrentTilemap(tilemap`nivel1`)
