namespace SpriteKind {
    export const Ayudante = SpriteKind.create()
}
function establecerAyudante () {
    ayudante = sprites.create(assets.image`Pato`, SpriteKind.Ayudante)
    ayudante.ay = 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cubo.vy == 0) {
        Cubo.vy = -100
    }
})
let ayudante: Sprite = null
let Cubo: Sprite = null
scene.setBackgroundImage(assets.image`Sol`)
Cubo = sprites.create(assets.image`Cubo`, SpriteKind.Player)
controller.moveSprite(Cubo, 99, 0)
Cubo.setStayInScreen(true)
Cubo.setPosition(10, 103)
Cubo.ay = 200
tiles.setCurrentTilemap(tilemap`nivel1`)
establecerAyudante()
game.onUpdate(function () {
    ayudante.setPosition(ayudante.x + (Cubo.x - 20 - ayudante.x) / 5, ayudante.y + (Cubo.y - 20 - ayudante.y) / 5)
})
