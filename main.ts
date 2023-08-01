//% weight=0 color=#338899 icon="\uf0ad" block="jq8900"
namespace jq8900 {
     export enum play_mode {
        ALL_REPEAT = 1 ,
        SINGLE_REPEAT = 2,
        SINGLE_STOP = 3,
        RANDOM = 4,
        ORDER_PLAY = 5
     }
    //% blockId=jq8900_setMicrobit block="Initialize Microbitc |TX %tx | RX %rx"
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=102
    export function jq8900_setMicrobit(tx: SerialPin, rx: SerialPin) {
        serial.redirect(
            tx,
            rx,
            9600
        )
        basic.pause(100)
    }

    //% blockId=playcurrentmp3 block="JQ8900 play current mp3"
    //% weight=95
    export function playcurrentmp3() {
            let _a=pins.createBuffer(4)
    	       _a[0] = 170
            _a[1] = 2
            _a[2] = 0
            _a[3] = 172
    	       serial.writeBuffer(_a)
    }    
    //% blockId=pausemp3 block="JQ8900 pause mp3"
    //% weight=96
    export function pausemp3() {
            let _a=pins.createBuffer(4)
    	       _a[0] = 170
            _a[1] = 3
            _a[2] = 0
            _a[3] = 173
    	       serial.writeBuffer(_a)
    }    
    //% blockId=stopmp3 block="JQ8900 stop mp3"
    //% weight=97
    export function stopmp3() {
            let _a=pins.createBuffer(4)
    	       _a[0] = 170
            _a[1] = 4
            _a[2] = 0
            _a[3] = 174
    	       serial.writeBuffer(_a)
    }
    //% blockId=previousmp3 block="JQ8900 play previous mp3"
    //% weight=98
    export function previousmp3() {
            let _a=pins.createBuffer(4)
    	       _a[0] = 170
            _a[1] = 5
            _a[2] = 0
            _a[3] = 175
    	       serial.writeBuffer(_a)
    }
    //% blockId=nextmp3 block="JQ8900 play next mp3"
    //% weight=99
    export function nextmp3() {
            let _a=pins.createBuffer(4)
    	       _a[0] = 170
            _a[1] = 6
            _a[2] = 0
            _a[3] = 176
    	       serial.writeBuffer(_a)
    }  
    //% blockId=mp3play block="JQ8900 play mp3 %id "
    //% weight=101
   //% id.min=1 id.defl=1
    export function mp3play(vol:number) {
            let _a=pins.createBuffer(6)
    	       _a[0] = 170
            _a[1] = 7
            _a[2] = 2
            _a[3] = 0
            _a[4] = vol
            _a[5] = 179+vol       
    	       serial.writeBuffer(_a)
    }

    //% blockId=setmp3vol block="JQ8900 set mp3 volumn %vol "
    //% weight=101
        //% vol.min=0 vol.max=30  vol.defl=0
    export function setmp3vol(vol:number) {
            let _a=pins.createBuffer(5)
    	       _a[0] = 170
            _a[1] = 19
            _a[2] = 1
            _a[3] = vol
            _a[4] = 190+vol       
    	       serial.writeBuffer(_a)
    }

    //% blockId=insertmp3 block="JQ8900 insert mp3  %vid "
    //% weight=101
    //% id.min=1 id.defl=1
    export function insertmp3(id:number) {
            let _a=pins.createBuffer(7)
    	       _a[0] = 170
            _a[1] = 22
            _a[2] = 3
            _a[3] = 2
            _a[4] = 0
            _a[5] = id
            _a[6] = 197+id       
    	       serial.writeBuffer(_a)
    }

    //% blockId=mp3mode block="JQ8900 mp3 play mode  %vid "
    //% weight=101
    export function mp3mode(id:play_mode) {
        let _a=pins.createBuffer(5)
    	   _a[0] = 170
        _a[1] = 24
        _a[2] = 1
        if (id==1)
        {
            _a[3] = 0
            _a[4] = 195     
        }else if (id==2)
        {
            _a[3] = 1
            _a[4] = 196     
        }else if (id==3)
        {
            _a[3] = 2
            _a[4] = 197     
        }else if (id==4)
        {
            _a[3] = 3
            _a[4] = 198    
        }else if (id==5)
        {
            _a[3] = 0
            _a[4] = 202    
        }
   	   serial.writeBuffer(_a)
    }

}
