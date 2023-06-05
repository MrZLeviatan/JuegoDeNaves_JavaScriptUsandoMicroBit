// SE ESTABLECE LAS FUNCIONES DEL BOTON A, HACIENDO EL MOVIMIENTO DE LA NAVE A LA DIRECCION DE LA IZQUIERDA
input.onButtonPressed(Button.A, function () {
    Nave.move(-1)
})
// SE ESTABLECE LAS FUNCIONES DEL BOTON A+B, LO CUAL OCACIONA EL EVENTO DE DISPARO
input.onButtonPressed(Button.AB, function () {
    Disparo = game.createSprite(Nave.get(LedSpriteProperty.X), Nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        Disparo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
// SE ESTABLECE LAS FUNCIONES DEL BOTON B, HACIENDO QUE EL MOVIMIENTO DE LA NAVE A LA DIRECCION DE LA DERECHA
input.onButtonPressed(Button.B, function () {
    Nave.move(1)
})
let Disparo: game.LedSprite = null
let Nave: game.LedSprite = null
Nave = game.createSprite(2, 4)
let Enemigo1 = game.createSprite(2, 0)
Disparo = game.createSprite(2, 0)
Enemigo1.delete()
Disparo.delete()
game.setScore(0)
basic.forever(function () {
	
})
