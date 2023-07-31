//% weight=0 color=#338899 icon="\uf0ad" block="jq8900"
namespace jq8900 {
let readserialdata='';

    //% blockId=jq8900_setMicrobit block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=102
    //% blockExternalInputs = 1
    export function jq8900_setMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        basic.pause(100)
    }

    //% blockId=playcurrentmp3 block="JQ8900 play current mp3"
    //% weight=100
    export function playcurrentmp3() {
            let _a=pins.createBuffer(4)
    	    _a[0] = 170
            _a[1] = 2
            _a[2] = 0
            _a[3] = 172
    	    serial.writeBuffer(_a)
    }    
    //% blockId=pausemp3 block="JQ8900 pause mp3"
    //% weight=100
    export function pausemp3() {
            let _a=pins.createBuffer(4)
    	    _a[0] = 170
            _a[1] = 3
            _a[2] = 0
            _a[3] = 173
    	    serial.writeBuffer(_a)
    }    
    //% blockId=stopmp3 block="JQ8900 stop mp3"
    //% weight=100
    export function stopmp3() {
            let _a=pins.createBuffer(4)
    	    _a[0] = 170
            _a[1] = 4
            _a[2] = 0
            _a[3] = 174
    	    serial.writeBuffer(_a)
    }
    //% blockId=previousmp3 block="JQ8900 play previous mp3"
    //% weight=100
    export function previousmp3() {
            let _a=pins.createBuffer(4)
    	    _a[0] = 170
            _a[1] = 5
            _a[2] = 0
            _a[3] = 175
    	    serial.writeBuffer(_a)
    }
    //% blockId=nextmp3 block="JQ8900 play next mp3"
    //% weight=100
    export function nextmp3() {
            let _a=pins.createBuffer(4)
    	    _a[0] = 170
            _a[1] = 6
            _a[2] = 0
            _a[3] = 176
    	    serial.writeBuffer(_a)
    }  
    //% blockId=setmp3vol block="JQ8900 set mp3 (0-20) %id volume"
    //% weight=100
    export function setmp3vol(vol:number) {
            let _a=pins.createBuffer(5)
    	    _a[0] = 170
            _a[1] = 13
            _a[2] = 1
            _a[3] = vol
            _a[4] = 190+vol
    	    serial.writeBuffer(_a)
    }
}
