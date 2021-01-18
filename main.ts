basic.clearScreen()
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 600) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (pins.analogReadPin(AnalogPin.P2) > 600) {
        music.playTone(311, music.beat(BeatFraction.Half))
    } else if (pins.analogReadPin(AnalogPin.P3) > 600) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (pins.analogReadPin(AnalogPin.P4) > 600) {
        music.playTone(370, music.beat(BeatFraction.Half))
    } else if (pins.analogReadPin(AnalogPin.P10) > 600) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else {
    	
    }
})
