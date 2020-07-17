basic.forever(function () {
    midi.playDrum(DrumSound.AcousticBassDrum)
    midi.playTone(262, music.beat(BeatFraction.Whole))
    if (pins.analogReadPin(AnalogPin.P1) > 600) {
        midi.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (pins.analogReadPin(AnalogPin.P2) > 600) {
        midi.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (pins.analogReadPin(AnalogPin.P3) > 600) {
        midi.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (pins.analogReadPin(AnalogPin.P4) > 600) {
        midi.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (pins.analogReadPin(AnalogPin.P10) > 600) {
        midi.playTone(392, music.beat(BeatFraction.Quarter))
    } else {
    	
    }
})
