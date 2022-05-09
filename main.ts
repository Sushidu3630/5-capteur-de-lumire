input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    led.brightness(),
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
