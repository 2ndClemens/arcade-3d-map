namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`
}
function tofpx (n: number) {
    return (n * fpx_scale) | 0
}
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
let map = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
6 . . . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
6 . . . . . . . . . . . . . . . . 6 6 6 1 6 6 6 6 1 1 1 1 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . . . . . . . . . . . . . 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . . . . . . . . . . . . 6 6 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . . . . . . . . . . 6 6 6 1 1 1 1 . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . . . . . 6 6 6 6 6 6 1 1 1 1 1 . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . . . 6 6 6 6 6 6 1 1 1 1 1 1 . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . . . 6 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . . 6 6 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . 6 6 1 1 1 . . . . . . . . . . . . 1 1 1 . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . . 6 1 1 1 1 . . . . . . . . . . . . 1 2 1 . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . 6 6 1 1 1 . . . . . . . . . . . . . 1 1 1 . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 . 6 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 6 6 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 1 1 . . . . . 1 1 1 . . . . . . . . . . 1 1 1 . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 1 1 . . . . . 1 2 1 . . . 1 1 1 . . . . 1 2 1 . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . 1 1 1 . . . 1 2 1 . . . . 1 1 1 . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . 1 2 2 2 2 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . 1 2 2 2 2 1 . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . 1 1 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . 1 1 6 
6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 1 2 1 . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 2 1 . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 6 
6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
let textures = [img`
8 8 8 8 8 8 8 8 8 8 b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 b b b 4 4 4 4 4 4 b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 2 2 4 4 4 4 4 d d d 4 4 4 b 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 2 4 4 4 4 4 4 4 4 d d d d 4 4 e 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 2 4 4 4 4 4 4 4 4 4 4 4 d d d 4 b e 8 8 8 8 8 8 8 8 8 8 8 
8 8 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 4 b e 8 8 8 8 8 8 8 8 8 8 
8 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 b e 8 8 8 8 8 8 8 8 8 8 
8 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 8 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 8 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 8 
2 b b 4 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e 8 8 8 8 8 8 8 8 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 8 8 8 8 8 8 8 8 
2 b b b 4 4 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e 8 8 8 8 8 8 8 8 
2 2 b b b 4 4 4 b b 4 b b 4 4 4 4 4 4 4 4 4 b e 8 8 8 8 8 8 8 8 
8 2 b b b b b 4 4 b b b b 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 
8 2 2 b b b b b b b b 4 4 b b b 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 
8 8 e e e b b b b b b b 4 4 b b b 4 4 4 4 4 4 b e 8 8 8 8 8 8 8 
8 8 8 e e e e e b b b b b b b b 4 4 b 4 4 4 4 b e 8 8 8 8 8 8 8 
8 8 8 8 8 e e e e e e 2 2 2 b b 4 4 b b b 4 b b e 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 e e e e e 2 2 2 b b 4 4 b b b b e e 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 e 2 2 2 b b b b b b b e c 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e 2 b b b b e e b d b 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c d d d b 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c d 1 1 b b b b 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c d 1 1 1 d b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b 1 1 1 1 1 c 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 1 1 d d 1 c 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c d 1 d b c 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c b 1 1 c 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, null, img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 f f f f f f 3 3 3 3 3 3 3 3 3 3 f f f f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 f 3 f 3 f f 3 3 3 3 3 3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 f f f f f 3 3 3 3 3 3 3 3 3 3 3 3 f f f f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 f f 3 f f 3 3 3 3 3 3 3 3 3 3 3 f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, null, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 b b 6 6 6 6 3 3 3 3 b a a 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 b b 3 3 6 7 7 7 6 3 3 3 6 6 3 a a 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 b 3 3 3 3 3 8 8 8 3 3 3 3 8 9 6 3 3 a a 1 1 1 1 
1 1 1 1 1 1 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 8 9 6 3 3 a a 1 1 1 
1 1 1 1 1 1 b 3 4 4 4 3 3 3 3 3 3 3 3 3 3 3 3 8 6 3 3 b a e 1 1 
1 1 1 1 1 b 3 4 5 5 4 3 3 3 3 3 3 3 3 3 3 4 4 4 3 3 3 3 a e 1 1 
1 1 1 1 b 3 3 3 2 2 3 3 3 d d d d 3 3 3 3 4 5 5 2 3 3 d a e e 1 
1 1 1 b 3 d 3 3 3 3 3 3 d d 3 b b b b 3 3 3 2 2 3 3 3 d a b e 1 
1 1 b 3 d 3 3 3 3 3 3 d 3 b b 3 3 b b 3 3 3 3 3 3 3 3 d a 4 e 1 
1 1 b d 3 3 3 3 3 3 3 3 b 3 3 a a b 3 3 3 3 3 3 3 2 2 3 a 4 e e 
1 b 3 d 3 6 6 3 3 3 3 b 3 3 a a b 3 3 3 6 6 3 3 2 4 4 2 b 4 e e 
1 b d 3 b 9 8 3 3 3 3 a 3 a a 3 3 3 3 3 8 7 6 3 3 e e 3 b 4 e e 
1 b d 6 9 8 3 3 3 3 b a a a 3 3 3 3 3 3 3 8 7 6 3 3 b b 4 b e e 
b 3 d 6 8 3 3 3 3 3 b b a 3 3 3 3 3 3 3 3 3 8 6 3 b a 4 4 e b e 
b d d 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 4 4 b e b e 
a d d 6 6 6 6 3 3 3 3 3 3 2 2 3 3 3 3 6 6 3 3 3 b a 4 4 b b b e 
a d 6 7 7 7 6 3 3 3 3 3 2 4 4 2 3 3 6 9 8 3 d 3 a 4 4 4 b 4 e 1 
a d d 8 8 8 b 3 3 3 3 3 3 e e 3 3 6 9 8 3 3 d 3 a 4 4 b 4 4 e 1 
a d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 6 8 3 3 d 3 a 4 4 4 b 4 e 1 1 
a 3 d d 3 3 3 3 3 4 4 4 3 3 3 3 3 d d d d 3 a 4 4 4 b 4 4 e 1 1 
a b 3 3 d d d 3 2 5 5 4 3 3 3 3 d d 3 3 a a 4 4 4 b 4 4 e 1 1 1 
1 e a b b 3 d d 3 2 2 3 3 3 3 3 b a a a 4 4 4 4 b 4 4 e 1 1 1 1 
1 e b a b b 3 d 3 3 3 d 3 3 b a a 4 4 4 4 4 3 b 4 4 e 1 1 1 1 1 
1 1 e b a a b 3 d d d 3 a a a 4 4 4 4 4 3 3 b 4 4 e 1 1 1 1 1 1 
1 1 e e b b a a b 3 3 a 4 4 4 4 4 3 3 3 b 4 4 4 e 1 1 1 1 1 1 1 
1 1 1 e e e b b a a b 4 4 4 b 3 3 3 b 4 4 4 4 e 1 1 1 1 1 1 1 1 
1 1 1 1 e b e e e b b b b b b b b 4 4 4 4 e e 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 e e b b b b 4 4 4 4 4 4 4 4 e e 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 e e e b b b 4 4 4 e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 e e e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, null, img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c b 5 b c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c b 5 b c c c c c c c c c c c c c 
c c c c c c c c c c c c c b b b b b b c c c c c c c c c c c c c 
c c c c c c c c c c c c b b 5 5 5 5 5 b c c c c c c c c c c c c 
c c c c c c c c c c c b b 5 d 1 f 5 5 d f c c c c c c c c c c c 
c c c c c c c c c c c b 5 5 1 f f 5 d 4 c c c c c c c c c c c c 
c c c c c c c c c c c b 5 5 d f b d d 4 4 c c c c c c c c c c c 
c c c c c c c c b b b d 5 5 5 5 5 4 4 4 4 4 b c c c c c c c c c 
c c c c c c c b d d d b b d 5 5 4 4 4 4 4 b c c c c c c c c c c 
c c c c c c c b b d 5 5 5 b 5 5 5 5 5 5 b c c c c c c c c c c c 
c c c c c c c c d c 5 5 5 5 d 5 5 5 5 5 5 b c c c c c c c c c c 
c c c c c c c c b d c d 5 5 b 5 5 5 5 5 5 b c c c c c c c c c c 
c c c c c c c c c d d c c b d 5 5 5 5 5 d b c c c c c c c c c c 
c c c c c c c c c c b d d d d d 5 5 5 b b c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c b b c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`, null, img`
d d d c d d d d d d 1 d d d d d d d d d d d d d c d d d c c d d d d d d d d d d d d d d d d d d d d d d c c d d d d c d d d d d 
d d d d d c c d d 1 b 1 d d d d d d d d d d d d d c c c d d d c d d c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d 1 7 7 d 7 c c 1 7 d b d d d d c c d d d d d c c c c c c c c d c c d d d d d d d d d d d d d c c d d d c d d d d d d d d d c d 
d 1 7 7 d d d c 7 7 7 d 7 7 b d c 7 c d d d d b b d d d c c c d c d d c d d c d d d c c c d c c d c d d d d d d c d c c d c 5 5 
7 7 7 2 7 d d 7 2 7 7 d d 7 b b b 7 c d c c d c c c d b 6 7 7 7 7 7 7 c c c c c c c c 7 c d d d c c d d c d c c c d d d 5 c c c 
6 6 6 7 7 d d 7 7 c c 6 6 c c b 7 c c 7 c b d c c c 6 6 7 6 6 b 6 6 7 b c d c d 7 7 7 7 d c d c c c c 5 c c c 5 c c c c c c c c 
6 c c 7 7 7 c c 7 7 c c 7 7 7 7 7 b b 7 b b 7 d b d d 7 d d 6 d 6 6 7 d d b d d 7 7 7 c c c 5 5 c c c c d d c c 5 5 5 5 c c c c 
7 c 6 c c 7 7 c 7 7 7 c 7 c 7 7 7 b b 7 7 c c d d c c 7 b c c c b 6 6 6 c c d d c 7 7 c 7 7 7 c 5 5 5 5 5 5 c 5 5 d 7 5 1 1 c c 
7 c c c 7 c c 7 7 7 7 5 c 5 5 b 7 7 c c 7 7 7 d c 6 7 c c b b b b 7 7 7 7 d d 7 7 7 7 7 b d 7 b c 7 c b c c c c c 7 5 1 b 1 c c 
7 c 6 1 7 c 5 7 7 7 7 7 7 b b 5 5 5 7 7 7 7 c c c 7 7 b 7 7 7 7 7 7 c 7 c d b 7 6 6 6 b b 7 7 7 7 c b b b b 5 5 5 5 7 1 c 1 1 1 
7 7 7 7 7 5 7 c 5 b 7 b b c 5 5 5 c c 5 5 7 5 c b c c 7 7 7 7 7 7 7 7 c c 7 7 7 7 b 6 b b 7 7 b b b b b b b b 7 7 7 1 7 b c c c 
7 7 7 7 5 7 c b b 5 5 5 5 5 5 5 c c 5 7 5 5 5 b 5 5 5 c b c 7 7 7 c 7 c 7 c c 7 7 c c 7 7 5 5 c c c c 7 7 c 5 5 5 5 1 7 c c c c 
6 7 7 c 7 c b 5 7 b b 6 b c 5 5 c b 5 b c 7 7 7 5 5 c 5 c b 7 c 7 c b 5 c c c 7 7 c 5 7 7 c c 7 b c c c 7 c 7 c c c 1 c 5 5 5 c 
b 7 7 7 c c 7 7 b c 6 b b b 1 b 5 5 5 c c 7 7 7 7 5 5 b 5 5 5 7 7 7 7 7 5 b 5 7 b 5 5 b 7 7 5 7 7 7 c 7 c 7 c c b b b 5 7 5 5 c 
b 7 7 7 c 7 b c 6 6 b b c b d d 5 5 5 c 5 5 7 7 c 7 c c b c c b c b b b b b b 5 5 7 5 5 6 7 5 7 c 5 5 c 5 7 b 5 5 b c 7 5 5 1 c 
b 5 7 b 7 b c 6 7 b 7 b c c c d b c c 5 7 6 c 7 6 c 7 c b b c b b b b c b c c c c 7 7 c 6 7 c 7 6 6 6 6 6 5 5 5 6 5 5 5 7 5 5 5 
b 1 b b 7 b b c c 7 c c b b b b c c c 5 5 c 7 c 6 7 7 1 c c c c c c b c c c c c 7 7 c c c c 6 7 7 7 b 7 7 c c c 1 7 1 c b c 7 5 
b b b 7 b b c 5 b 7 c b b b b b b b c c 5 5 5 5 5 7 7 7 b 6 6 b b 7 7 b b c c 7 7 7 1 1 c c 6 7 7 7 7 7 7 c 1 c 5 5 1 1 b c 7 c 
1 b 1 7 7 b c 5 1 b 7 b b c b 1 c c b b b c 7 6 7 6 6 5 c b c c c 7 7 1 1 b 7 7 7 c b c 1 1 7 7 c c 7 c c 1 1 c 5 1 1 c b 7 c c 
b 6 7 b c b c c 5 b b 7 7 7 7 b b b b b c b 6 c 7 c 7 5 5 5 5 6 7 6 6 7 7 7 7 6 b 6 b c c c 7 7 b 7 7 7 c 7 c 5 5 c c 5 b 7 5 c 
b d 7 c b b 7 7 7 7 7 7 b b d 6 7 7 c b b 6 7 c 7 7 c 5 5 5 5 c 6 b 7 7 c 7 7 6 c 6 c c 5 5 5 6 7 7 5 5 b 7 7 5 5 6 5 5 5 5 5 b 
b d 7 b b b 4 5 5 5 5 5 5 5 5 7 7 b b b b 7 7 7 7 7 7 b c c c 5 5 7 7 c c 7 b c 6 6 6 6 6 7 7 6 6 7 5 5 5 c b 7 b 5 6 7 7 5 b c 
c c 7 7 7 7 7 7 7 5 7 7 7 7 7 5 5 5 5 5 5 c c 7 1 7 b 6 6 6 5 6 6 7 7 c 7 c c 7 7 6 c b c c b b 6 7 7 5 5 5 c 5 7 7 c 7 7 7 b c 
c c 7 7 b 6 6 6 7 1 7 7 5 c 1 7 7 1 7 7 b 5 5 5 5 5 6 6 7 6 6 6 a 7 6 6 c 7 c 7 c c b b 5 5 5 5 6 7 7 c 5 5 5 7 b c 7 b b 7 b c 
c c 7 7 b 6 b 4 7 7 b 4 c c b 1 7 7 6 c b 5 5 5 6 6 6 c 7 7 c 6 6 7 7 b 1 6 6 b c c 7 5 c c c 7 7 6 7 c 6 6 6 6 6 6 6 c 7 b b c 
4 c b c d 5 5 5 5 5 b c 5 b 7 7 7 7 6 8 b 5 7 7 6 7 c c 7 7 c c 7 6 6 6 6 6 6 6 b b 1 5 5 6 5 7 c 6 6 6 7 a c 7 c c 6 c 7 b b 7 
b b 5 c 5 5 5 7 b 7 7 5 5 7 7 d 7 6 6 6 6 5 5 5 6 6 5 7 6 7 c 5 6 6 6 6 7 b c 6 b 6 6 6 b b 5 5 6 7 5 5 6 6 6 6 6 c c c c 7 7 c 
b b 5 5 5 b 7 7 b 7 7 7 c 7 c 7 6 6 c c b 6 6 7 7 7 5 5 5 7 5 6 c 6 6 7 c b 6 6 6 6 5 5 c 6 6 6 6 6 6 5 5 5 6 6 c 7 6 6 a c 7 c 
b b 7 7 7 6 7 7 b 5 d 7 7 b c 7 6 c 6 6 b 7 6 6 7 7 5 5 6 5 5 5 5 6 c b b b 6 6 c 5 5 c 6 c c b b c 1 c 7 c b 6 c 5 5 5 a 7 b c 
b c 7 b 7 7 b 7 b 5 5 5 7 5 5 6 7 7 a b c 7 c c c 6 b b 6 7 c 6 5 5 b 6 6 6 5 6 6 6 b 6 6 7 5 5 5 c c 6 5 6 5 5 6 5 5 6 7 7 b c 
b c 7 c b 7 1 7 5 5 5 5 1 6 7 8 c c a b c 6 6 6 6 6 6 6 6 6 6 c c b b c 5 5 5 c 6 b 6 7 7 5 5 b 7 c b 6 5 5 7 7 7 7 7 6 7 a b 5 
b 7 c c b 7 6 6 b 7 6 d 6 b 6 7 c c c 6 7 7 b b 5 5 c 6 5 6 7 c c b c b c b 5 5 5 b 7 7 7 6 b c 7 b 5 6 6 b c 7 c 7 c 7 b c c 5 
b 7 c c 7 6 6 7 b c 6 6 6 6 c 6 6 6 6 6 6 7 a c 5 5 c 5 5 6 b b b b c b b 5 b b b 7 c c 7 c 6 b 7 c c 5 5 b 7 c 6 b 7 7 c c c 5 
5 7 7 7 3 7 b 7 b 6 6 6 6 b 3 1 6 6 c 7 7 b 5 5 7 5 5 5 b 7 5 c 5 c 5 b b 5 c b b 7 c 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 7 c 5 5 5 
5 7 b c 3 b c b 6 c 3 b 6 b b 1 c c 7 7 7 5 7 7 a 5 5 5 6 5 5 5 5 5 6 6 5 c 7 7 7 7 c 5 7 5 c 7 c c b c 6 7 7 c c 6 6 6 6 c 7 5 
5 b 1 1 b 3 b 1 1 7 b 6 c b 5 5 1 7 7 7 7 5 b 7 7 5 5 b 6 5 5 c 5 5 5 b 5 c c 7 7 5 5 7 c 5 7 b b b c 6 7 7 c 7 c 7 6 b 6 7 5 5 
5 6 7 7 7 b 3 b c c 6 b c b b 7 7 1 5 7 b 5 7 1 c b 5 c c c c 5 5 5 5 5 5 5 7 c b c 7 6 6 5 6 6 7 5 5 c c c c 7 5 5 6 6 7 c c c 
5 6 7 7 b b 7 b c c 6 c c b 7 b c b 5 c b 5 c c b b 7 1 7 c 5 7 5 5 5 5 5 c c c b 6 6 7 6 5 6 6 c 6 5 5 5 5 6 6 5 6 7 5 5 c 5 5 
5 7 6 7 b 5 7 5 7 c 6 b 7 7 6 6 b c 6 6 6 b b b c 7 c b 7 1 5 7 b 5 5 5 6 6 6 6 7 b b 6 5 5 6 c 6 1 c 6 6 6 1 7 7 5 b 6 a 7 c c 
d d 6 b b 7 c 7 5 6 5 6 6 6 c 6 6 6 c b 6 6 b c 6 7 c 7 7 b 1 7 c 7 7 7 c b b 6 6 6 6 7 c 5 5 6 6 6 6 6 6 7 7 c c 7 b c 5 5 6 c 
b b 7 6 b 3 c 7 b 6 6 b 3 b 3 5 b c c b b 6 6 c 6 c c 7 c b 7 c b 7 7 7 b c c c 7 b c 7 a 5 c 6 1 c 6 a 6 7 c 1 c 6 7 6 5 6 c b 
b 7 1 5 6 5 c 7 7 7 c c 1 b 7 b b c c b b b 6 6 c 6 5 c c 7 c c b 7 7 6 7 c c 7 b b b 1 7 5 1 6 6 6 c 7 6 6 1 6 6 7 7 6 6 7 b c 
b 7 c c 5 5 7 7 7 c b 7 7 7 b b c c c b b b 7 c b 6 6 5 7 7 c c 6 5 c 1 5 7 1 7 b b b c 7 b 6 c b 1 7 6 6 6 6 6 7 1 c c 7 7 b b 
7 b c 5 5 5 7 1 7 7 7 1 b 7 b b c c b c b 7 c c c c 7 7 6 6 5 5 b 6 5 5 b c 7 7 b b b 7 7 7 b 7 7 6 6 c a c c 7 6 6 7 7 7 b c b 
d 5 5 3 b 7 7 7 7 7 b 1 b 7 7 7 a a b b b 7 c b 5 5 5 5 6 c 6 6 b c c c c 5 7 6 6 6 7 6 6 6 6 6 6 b 6 7 7 b 7 c 6 7 7 7 6 b b b 
3 5 5 b 7 b c 7 7 c 7 1 b 7 3 c 6 7 7 b c 7 c b 7 7 b 5 c b b 6 c b c c 5 5 6 1 b b 6 b 1 c c 6 c c c 6 6 6 6 6 c 7 6 6 6 b b b 
3 3 5 7 7 3 7 7 c 7 b 5 5 7 7 6 6 6 5 5 6 6 7 7 b b 1 5 b c 5 5 b b b 5 5 5 5 5 b c c b c 6 6 c c 6 b b b a b 6 6 6 7 7 7 7 b b 
b 3 7 5 5 7 a 7 6 b 5 b 7 7 7 c 7 7 7 7 5 5 b c b 5 b b 5 5 c 5 5 5 5 c 6 5 5 5 7 c c 6 5 c 7 5 5 5 6 c b b b b b c b b 1 7 7 7 
b 5 c 7 7 5 5 7 6 7 7 7 b b 5 5 5 5 5 5 7 7 c b c b 5 5 b 6 6 6 6 7 7 6 5 5 6 6 6 7 c c 5 5 5 5 7 5 5 b b 6 5 5 1 5 5 6 5 5 c 5 
b 5 7 b b b 7 c 7 b b b b b c c 7 7 7 b 7 6 b b b c c 6 6 b c c 5 b c 1 c b 5 5 5 b 5 7 7 5 5 b 7 6 6 6 6 5 5 a 1 5 5 6 5 5 5 7 
b 3 b b c c 3 c a 7 b c c b b d c 7 c 7 6 c c 5 5 6 6 c 5 5 5 1 5 b 5 5 5 c 5 5 5 5 c 6 c b 5 7 b 5 5 5 6 b b a b 5 5 6 c 5 c 7 
3 b 5 5 b 5 5 c 1 7 7 c c 3 b 1 c 7 7 6 6 c 5 6 5 5 c 5 5 5 5 5 5 5 c 5 5 b 6 6 6 6 c c 6 6 b b 7 c 7 7 7 b b b b c 6 a a b 7 7 
b 7 a c 5 b b 3 1 7 7 a a a b b c b b 5 a 5 c 7 7 7 5 5 6 c c c 5 5 5 b 5 5 6 7 7 6 6 6 6 6 6 6 6 6 6 7 7 7 b b 6 b a 6 c 7 a a 
b 7 a a a a a a 7 a a a a 7 b a c c b a 5 c 6 a a c c 6 6 6 6 6 5 c b b b b b b b 6 b 7 6 a a 7 7 b 7 6 b 7 b 6 a b a c c c a a 
b 5 7 5 c c 5 a 5 5 7 c a 1 b a a a b c b b a a a a a b b b b 6 6 b b c c c b c c 5 6 5 5 a a c 5 7 7 6 6 b 6 5 a 7 7 6 5 a a b 
b 7 7 c 5 3 3 b a a 7 a 5 5 b 5 7 c b c b c 5 a c a a 6 a b b 5 5 6 6 b a a c b b b 5 c c a a 6 5 7 5 5 7 5 5 5 c 5 a a a b a 6 
b a 5 1 c 5 5 a 5 b b a b 7 7 5 a b c c b b a b 5 5 c b b b b b a 5 5 6 a a a 6 b a a 6 b a a 6 5 5 b c c a a a 1 1 1 6 6 b a a 
d b 5 1 a c a a 5 5 a b b a a 5 5 b a 7 b 5 a b c c 5 5 c b a b a 6 5 b c 6 6 5 b b 6 6 a a a a 6 a 6 a a a b a c a b b b a b b 
a b a b a a a b b b b b a 5 a 6 a a 7 a a c 5 b b 5 a 5 b b 5 a b a a 5 b b b 5 b b 5 b a b a b 6 a a a a a b a a a 5 a a b b b 
5 b b 5 a a b 3 c a b a a a b 7 5 5 5 6 6 5 5 5 5 6 a 5 7 5 a 5 a b 5 5 5 7 7 5 b 5 a b b b a b c a 6 6 5 a 7 7 a b a 5 b b b 5 
5 c b b b a b 5 5 a 5 5 a 5 5 5 c 5 5 a a a a a 6 6 a a 5 c a 5 a b b 5 5 5 b b b b 5 5 5 a a 5 6 c a b 7 b a a b b b b b a 5 5 
8 c a a c 3 c c c 3 3 8 8 a c c c c c 8 8 8 8 a a 8 a c c a a a a b b b 5 6 c b b b 6 5 a a a a a b b 5 b b a a b 7 a b b 8 c c 
8 5 5 a a a 8 8 c c 7 c 8 8 a a 8 8 8 8 8 8 8 a a a c a 6 c 8 8 5 5 5 5 b c 6 6 b 5 5 5 5 c 8 c c a a b b b a 8 8 8 8 b 8 8 8 8 
8 7 7 7 c 8 8 7 8 8 8 7 8 8 8 8 c 8 8 8 8 8 8 8 8 a a a a a c 8 8 c 8 8 b 8 6 8 a a 8 8 8 a a 8 8 8 c c b b 8 8 c 8 b b 8 8 8 8 
`, img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 d d d d d d d d d d d d d d d d d d d d d d d d 
d a a 9 d d 9 d d d d d 9 9 d d d d 9 9 d d d d d 9 d d d 9 d d d 9 9 d d d d d d d d d d d d d 9 d 9 d d d 9 d d 9 d d d d d d 
d d a 9 d d 9 9 d d 9 9 9 9 d 9 9 9 9 9 d d d d 9 d d 9 d 9 9 9 9 d d 9 d 9 d d d d d 9 9 d d d 9 d d d 9 d 9 d 9 9 d d d d d d 
d 9 9 9 d d 9 9 d d 9 9 a 9 d 9 9 9 9 9 9 d d d 9 d d d d 9 9 9 9 a a d d d d 9 d 9 d 9 d d d 9 9 9 d 9 9 9 d d 9 9 d d 9 9 d 9 
9 9 9 9 a d 9 9 9 d 9 9 a 9 d 9 9 9 9 9 9 9 d 9 9 9 9 d d 9 9 9 9 a 9 a 9 d 9 d d 9 d d 9 d d 9 9 9 9 9 9 9 9 9 5 9 9 9 9 9 d 9 
9 9 9 9 a 9 9 9 9 d 9 9 9 a d 9 9 9 a 9 9 9 d 9 9 9 9 d 9 9 9 9 9 9 9 9 a 9 9 9 9 d d d d d d 9 9 9 9 9 9 6 6 5 5 9 9 9 9 9 9 d 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 a 9 9 9 a a a a 9 d 9 a a 9 9 9 9 9 9 9 9 9 a d d 9 d d 9 9 9 9 9 9 6 9 6 5 5 9 9 9 9 a 9 d 
9 9 9 9 9 9 9 6 6 6 9 9 9 9 d 9 9 a 9 9 9 9 9 9 9 9 9 9 5 9 9 5 5 9 9 9 5 9 9 9 9 d d 9 9 9 9 9 9 9 9 6 5 5 5 5 5 9 9 9 9 9 9 d 
d 9 9 9 9 9 9 6 9 9 5 5 9 6 6 6 6 6 9 9 9 a a 9 9 9 9 9 5 5 5 9 5 9 9 5 5 9 9 9 9 d 9 9 9 9 a 9 9 5 5 5 9 9 6 5 5 5 9 9 a 9 9 d 
d 9 a a 9 9 5 5 9 9 9 6 6 6 6 9 9 a 9 9 9 9 5 5 5 9 9 9 9 9 9 9 5 5 5 9 5 9 9 9 5 5 9 9 9 9 a 5 9 6 9 9 9 6 a 9 9 9 5 5 5 5 9 9 
d 9 9 a 5 9 5 5 9 9 9 9 9 9 a 9 9 a 9 9 9 9 a 9 9 a 9 9 9 9 9 5 a a 9 9 5 6 9 9 9 d 5 9 9 5 5 a 5 5 9 9 9 6 a 9 9 9 9 5 9 d 9 9 
a 9 9 5 5 6 9 9 a 9 9 6 d 9 6 6 9 a 9 9 9 9 a 9 9 9 9 9 6 9 9 6 6 6 a a a 9 6 a a d a 5 5 9 9 9 a 5 9 9 9 b 9 9 9 9 9 a 9 9 9 9 
a 9 a 9 a 6 9 9 9 9 6 6 9 9 6 9 9 a 9 9 9 9 9 a 9 9 6 6 9 9 9 a 9 9 5 5 5 9 9 9 9 a 5 9 9 9 9 a a 5 9 9 9 9 9 9 9 9 9 a 9 d 9 9 
a 9 a 9 a 6 6 9 9 9 9 9 9 9 a a 9 a 5 9 9 9 9 a a 5 5 5 5 5 9 a 5 5 9 9 5 9 9 9 9 5 5 9 5 5 5 9 a 5 5 9 9 5 b d 9 9 a a 9 9 9 9 
a 9 a 9 a 6 6 a c 9 9 9 9 5 5 5 5 5 a 5 5 9 9 5 5 a 9 5 5 5 5 5 9 9 9 b b 5 9 9 5 9 9 5 9 5 5 9 a 5 5 5 5 a 9 9 d b a b b 9 b 9 
d 9 a 9 a 9 9 6 9 9 5 5 5 9 d a 9 a b 9 9 5 5 a a 9 5 5 5 5 9 9 9 9 5 b a 5 5 5 b 9 9 5 5 5 9 5 5 5 5 b 9 b a 9 b b b 5 5 b b b 
b 9 5 9 a 9 a 9 9 5 a 9 9 d 9 a 9 a b 9 9 b b 9 a a 5 5 9 5 5 5 5 5 9 b 9 a 9 9 b 9 9 5 9 5 9 9 9 5 5 b 9 b b b 9 b 5 9 a 9 9 d 
b 9 9 5 5 5 5 5 5 9 a 9 9 d 9 9 b b 9 9 9 b b 9 9 5 5 9 9 5 9 9 5 9 5 5 9 a 9 b 9 a a a 9 5 9 9 6 9 9 9 9 9 a 9 9 9 5 a d 9 9 d 
9 9 a 9 9 9 9 b 9 b a 9 9 d 9 9 9 5 9 9 9 9 7 a a 9 9 9 9 5 a 5 a 9 9 9 9 5 9 7 7 9 9 9 9 9 9 9 6 d d d 9 9 d 9 9 9 a a d 9 d d 
9 9 a 9 9 9 5 9 b a a a d a a 9 9 5 9 9 9 9 a 7 9 9 9 9 7 5 5 9 5 5 5 5 5 5 5 a 9 9 9 9 9 9 9 9 6 6 9 6 9 d 9 6 a a 9 a a d d d 
9 9 a 9 9 5 5 5 b a 9 d 9 d 9 9 a 5 9 9 9 9 5 7 7 7 7 7 5 5 5 5 a 9 9 9 5 5 5 5 a 5 9 9 9 b 5 5 9 9 9 9 9 6 6 d a 9 9 a a d 9 d 
9 9 a 5 5 5 5 5 b a 9 d 9 d 9 9 a 5 5 9 5 5 5 a 5 9 9 5 a 9 a 5 5 5 5 5 5 5 5 5 5 a 9 5 5 5 5 9 9 9 9 9 6 6 6 7 7 9 a 9 a 9 9 9 
9 9 a 9 5 9 5 9 5 9 5 d 9 d 9 9 9 a 9 9 d a a b 5 9 9 5 a 7 5 5 5 5 5 5 5 5 9 9 9 5 5 b 9 5 5 5 5 9 9 b 9 9 a 6 a a a 7 7 9 5 5 
9 9 b 5 9 9 9 5 5 5 5 d 5 5 9 9 9 a 9 d d a a b 5 5 9 5 9 9 5 5 5 9 a a b 9 5 b 9 c c 9 9 9 9 9 5 5 5 9 9 b 9 5 a a a 7 9 5 5 5 
9 b b 5 a 9 9 5 5 5 5 5 5 5 a 9 9 a 9 d 9 a a b b 9 a 5 5 9 5 9 5 a 9 a b 9 9 5 b c 9 9 9 8 9 9 a 9 9 a a b 9 6 9 b 9 5 9 9 9 5 
b b b 9 a 9 9 9 9 9 9 d 5 5 a 9 9 6 6 d 9 a a a 9 9 a 5 5 5 9 9 a 5 d a 9 9 9 9 5 5 5 5 5 5 9 9 9 a a 9 b b 9 6 9 b 5 9 a 9 5 5 
b b b 9 9 a 9 d 9 9 9 9 d 5 6 6 6 a 9 9 9 a 9 6 9 a 9 9 6 6 6 6 6 5 d 9 9 9 9 b 9 9 9 9 7 7 5 9 9 9 9 9 b a 9 6 6 a 9 a 5 5 5 9 
b 7 b 9 9 a 9 d 9 9 9 9 d 9 9 d 9 a 9 9 9 a 9 8 6 a 9 6 9 9 9 9 b 5 a 9 9 9 9 b 9 9 9 7 8 7 9 9 9 9 b 9 b 9 a 9 9 a 9 a 5 6 9 a 
9 b b 9 9 a 9 a 9 9 9 5 5 5 9 9 9 a 9 9 9 5 5 5 5 5 5 9 9 9 7 b b 5 9 9 9 9 9 9 9 5 5 9 9 9 9 9 9 9 b 9 9 9 9 9 b b 9 a 9 9 a a 
9 9 b 9 9 a 5 9 a 9 5 b b b 5 5 5 5 5 5 5 a 9 9 8 8 a 5 7 7 b b 9 d 5 5 5 5 5 5 5 5 9 5 7 9 9 9 9 9 b 9 9 9 9 b 9 a 9 a 9 9 9 a 
9 9 7 b 9 a 5 9 9 9 9 5 7 d 9 9 9 a 9 9 9 a b 9 9 8 7 7 9 b b 7 9 d 9 9 9 9 5 5 a 9 5 5 b b 9 d 5 b b 9 9 5 b 9 9 a a 9 6 6 a 9 
9 9 7 b 9 a 5 9 9 9 9 5 5 5 9 9 9 a 9 7 b 9 9 9 9 9 9 b b b a 7 9 d 9 9 9 5 9 9 5 b 9 5 5 7 b 9 b 5 5 b b b 5 5 a a 9 5 9 7 a d 
9 7 b 9 9 9 5 9 a 9 9 9 a 9 9 9 9 a d 9 b 7 7 7 b b 9 9 9 9 a a 9 9 9 9 5 9 9 9 5 b 9 5 5 9 b 5 5 5 9 5 9 9 9 5 9 9 6 5 9 9 a d 
9 7 5 b b 9 5 b a 9 9 9 a 9 9 9 9 d 7 7 7 9 7 9 9 9 9 9 9 b a 9 8 5 5 5 5 5 5 5 5 9 9 a 7 b 5 9 7 9 5 5 b 9 9 a 5 5 5 9 9 9 a d 
7 b 5 b b 9 5 b 9 9 9 c c 9 9 9 d d b 9 7 7 a 9 9 5 5 9 9 b b 9 8 5 5 9 9 a 9 a a 5 5 9 9 b 9 9 9 9 9 5 5 6 6 6 9 9 9 9 9 9 a 9 
7 5 7 5 7 9 5 9 9 9 9 9 a c 5 9 d d b 9 9 9 9 a 9 5 5 7 b b 5 5 9 5 7 9 9 9 b b 9 a a 5 9 9 9 9 9 9 6 6 5 5 9 a 5 5 9 a 9 a 9 9 
b b 9 5 b 9 9 a 9 9 9 9 9 9 5 5 d d 5 5 5 5 9 9 5 9 b b b b 7 5 5 9 9 9 b b a a 9 a a 9 5 9 9 9 9 b 9 b 5 5 5 5 5 5 5 5 9 7 9 9 
9 7 b 5 5 9 9 a 9 a 9 9 9 9 5 5 5 5 9 a 5 9 5 5 d 9 9 a a b 9 b 9 5 9 b b 9 a 9 a 9 a 9 9 5 5 5 b 5 5 5 9 b 9 a 9 9 5 5 7 b b b 
9 b b 5 7 5 9 a 5 9 d 9 9 a 5 5 d 5 9 a a 9 9 9 9 9 9 9 a 9 b 9 9 b 5 9 9 9 a 9 a 9 a a 9 b b 9 5 b 9 9 9 b 5 b 9 b 5 7 a b 7 7 
b b 9 5 7 b 5 5 9 9 9 9 9 a 9 9 9 5 a 9 9 5 9 9 9 9 b b 9 9 b 9 b 9 5 7 9 9 9 9 a 9 a a 9 b b 9 9 9 9 9 9 b 5 a 9 5 9 7 a 7 b 7 
7 9 9 5 9 b 9 a 9 9 9 9 9 a 9 7 b 5 a 9 9 5 9 9 9 9 9 9 9 9 9 9 b b 5 7 7 7 9 7 a 9 9 9 9 b 9 a 9 9 9 a 9 5 9 b 5 5 9 9 a 7 b 7 
7 9 5 5 5 9 9 a 5 5 5 5 5 5 5 b b 5 5 5 5 6 9 5 5 5 9 9 9 9 9 9 b 9 5 7 b b 9 9 b 9 9 b b 9 9 9 9 9 a a 9 5 9 b 5 9 9 9 7 b 7 7 
6 9 5 5 5 5 9 b b d 9 9 9 7 5 b 9 5 5 9 5 5 5 a 5 5 9 9 d 9 9 9 9 9 5 9 b 9 6 6 b 5 6 b 9 9 5 5 5 6 6 a 5 9 9 9 5 9 9 9 7 b d b 
6 6 5 5 b 9 9 9 9 9 9 9 9 d 9 5 5 5 a 5 6 a 5 5 5 5 5 5 5 5 5 5 a 9 5 9 5 5 5 5 5 6 5 5 5 5 a a 5 a 9 9 a 9 9 5 5 5 9 b a b b 7 
6 6 5 5 5 b b 9 9 9 9 9 9 d d 9 9 5 a 6 6 6 a d 9 5 6 5 5 5 a 5 5 5 5 5 5 6 6 9 a a 9 9 9 9 9 a 5 9 9 9 a 9 5 6 9 5 b 9 a 9 7 7 
6 b 6 7 6 b 6 5 6 9 a 9 9 d 9 9 9 a 9 9 9 a 6 6 d 3 5 5 a a 5 5 5 5 9 9 b b 9 9 9 a a 9 9 9 9 b 5 9 9 9 5 5 9 6 a 5 9 b 9 9 7 9 
9 b 9 9 a 6 5 5 5 5 5 5 a 9 9 6 6 6 a 9 9 a 9 6 9 a 9 d 5 9 9 9 9 a 9 9 9 6 9 9 9 5 5 a 9 9 5 5 5 9 9 5 a 9 a 9 6 5 b 9 9 9 9 9 
9 b 9 9 5 9 5 a 9 9 a 5 a 6 6 6 a 6 a 9 9 a 9 6 9 9 a d 5 5 5 9 9 6 9 a 6 6 9 9 6 6 6 5 5 5 b a 5 6 5 6 6 6 6 b b b b b 9 9 9 9 
d b 9 9 5 6 6 6 6 6 a 5 9 a 6 6 6 6 9 9 9 a 6 6 9 9 a 5 9 9 6 5 5 6 6 3 6 9 6 6 6 6 6 9 b 6 6 6 5 5 9 b 9 9 5 b b a b b 9 9 9 9 
d b 9 9 9 5 6 5 a 9 6 9 9 d d 9 6 9 9 9 9 6 6 5 9 9 9 5 9 5 5 5 5 5 5 5 5 5 5 5 6 9 b b 6 6 b 5 9 9 b b b b 5 9 9 a a 9 9 a a a 
9 d a 9 9 5 6 5 5 5 9 9 9 d d 9 6 9 9 9 6 9 a 6 5 5 5 5 5 6 6 9 9 9 5 9 9 9 9 9 9 b b b 6 a 9 5 9 b 9 b b 9 5 9 9 a a 9 a 9 9 a 
d a a 9 5 9 9 6 a 6 9 9 9 9 d 9 9 9 9 6 9 6 9 6 9 5 9 9 a 6 6 9 9 9 9 9 9 a 9 9 b b b 9 9 a 9 9 9 9 b 9 9 9 5 9 9 b b b a 9 d a 
d c a 9 9 9 9 6 a 6 9 9 6 6 d 9 9 9 6 a 9 9 6 6 9 9 5 9 6 6 a 9 9 a 9 9 9 9 a 9 b 9 a a 9 a 9 9 9 9 9 9 9 9 9 5 5 5 5 b b 9 d a 
9 a 9 9 9 9 5 5 a 9 9 6 6 9 9 9 9 9 9 b b b 9 a 9 9 9 a 9 6 a 9 6 6 9 9 9 9 9 b b a a a 9 a 9 a 6 6 6 6 6 6 9 5 5 a 5 9 9 9 d a 
9 a 9 9 9 9 9 a 5 b 9 9 a 9 9 9 9 5 5 5 9 9 9 a a 9 a 9 9 a 6 6 a a 6 6 6 9 6 6 6 9 a a 6 5 9 a 9 a a 6 6 6 5 5 5 9 5 6 6 6 6 6 
a a 9 9 b 9 9 a 5 5 5 5 5 9 9 9 5 9 5 5 5 5 5 5 9 9 5 5 5 5 a 6 6 a a a 9 9 6 5 6 9 9 a 5 9 9 9 a a a 9 9 5 6 6 6 6 5 9 9 9 9 a 
a 9 b b 9 a a 6 9 b 6 a 5 5 9 9 5 9 a 5 5 9 9 9 5 5 9 a 9 a 6 9 a 9 a 9 9 5 5 5 5 5 5 5 9 5 5 a a 9 9 5 5 5 5 a 9 9 9 5 5 5 9 d 
a 9 9 9 9 9 a 6 9 6 b b 9 5 5 6 5 5 5 5 5 9 9 9 9 a a a 9 6 a 9 5 5 5 5 5 5 a a 9 5 5 5 5 9 a 5 5 a 5 9 5 9 9 5 6 6 9 9 9 9 a d 
a 9 9 9 9 9 6 9 9 6 6 9 9 a a 6 9 9 a a 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 5 9 9 5 5 5 9 9 9 5 5 9 9 9 5 5 5 9 9 9 5 9 9 6 6 9 9 d d 
a a 9 9 9 9 9 6 6 9 9 9 9 9 a 9 6 6 a 6 9 8 9 5 5 9 5 5 5 5 9 9 5 5 5 9 6 6 5 6 5 9 9 5 5 6 5 5 9 5 a 9 9 9 a 9 9 6 6 6 a a 9 9 
a a 9 a a 9 9 9 9 9 9 a 9 a a 9 9 a a 9 9 8 9 a 9 5 5 9 9 9 9 9 9 5 5 5 5 5 9 6 5 5 5 6 6 8 9 5 5 9 a a 5 5 5 9 9 6 9 6 9 9 9 9 
8 8 9 9 a 9 9 a 8 9 9 a a 9 9 9 9 a a 8 8 8 a a 9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 8 a 6 8 9 9 8 8 9 5 5 5 5 a 9 9 9 9 9 6 a 9 9 9 9 
8 8 9 8 9 8 8 8 8 a 8 9 a 8 8 9 9 a 8 9 9 8 9 9 8 9 8 8 8 9 9 8 9 9 9 9 a a 9 9 9 8 8 8 8 8 9 8 8 8 8 9 8 8 8 8 8 8 9 6 6 6 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 a 8 8 8 8 8 8 8 9 9 8 8 8 8 9 9 9 9 9 9 9 8 8 9 a 9 9 9 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 6 9 9 
`, img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 7 7 7 1 1 7 7 7 1 1 1 1 7 7 7 1 1 1 1 7 7 7 1 7 7 7 1 1 
1 1 1 1 7 7 7 1 1 7 7 7 1 1 1 1 7 7 7 1 1 1 1 7 7 7 1 7 7 7 1 1 
1 1 1 1 7 7 7 1 1 7 7 7 1 1 1 1 7 7 7 1 1 1 1 7 7 7 1 7 7 7 1 1 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 
3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 
3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, img`
6 6 6 6 6 6 6 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 9 9 1 1 9 9 6 
6 6 6 6 6 6 6 6 
`]
game.stats = true
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
let fpx = 10
let fpx_scale = 1024
let fov = 0.66
class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * - fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
        
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(15)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color && color > 1)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h *8 << fpx, perpWallDist) * 1 | 1;
            let drawStart = (-lineHeight + h*1.2) >> 1;

            let texX = (wallX * tex.width) >> fpx;

            let mapOffset = mapY;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                {
                    texX = tex.height - texX - 1;
                }

            if (sideWallHit) {
                mapOffset = mapX;
            }
            
             screen.blitRow(x, drawStart+4, tex, texX/4 + 16* (mapOffset % 4), lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}
const st = new State()
game.onPaint(function () {
    st.trace()
})
game.onUpdate(function () {
    st.updateControls()
})
