basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.isGesture(Gesture.FreeFall)) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
