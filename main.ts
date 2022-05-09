input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
