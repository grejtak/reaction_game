input.onButtonPressed(Button.A, function () {
    count += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
    basic.clearScreen()
    count = 0
})
let count = 0
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    count = 0
}
