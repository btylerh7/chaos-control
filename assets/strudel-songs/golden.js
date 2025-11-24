// @title Golden (Originally by HUNTR/X)
// @by Tyler

samples('https://strudel.b-cdn.net/tidal-drum-machines.json');
setcpm(115/4)
const verseProgression = "<C:Major G:Major D:Major E:Minor>"
const chorusProgression = "<C:Major D:Major [G:Major F#:locrian] E:minor>"
const slowBass = n("0").struct("<x x [x x] x>").sound("gm_fretless_bass")

let filterMuted = 1500;
let filterFull = 3500;
const drivingBass = n("0").struct("[x x x]*4")
.layer(
    (x) => x.sound("gm_acoustic_bass").velocity("[0.75 1 1]*4"),
    (x) => x.sound("saw").lpf(1700).add(note("0, 0.02")).gain(.15),
    (x) => x.sound("sine").add(note("-12, -11.90")).gain(1.2),
)
.orbit(2);

const piano = n("[0,2,4]").struct("<x x [x x] x>")
.layer(
  (x) => x.sound("piano").gain(1.2),
  (x) => x.sound("gm_string_ensemble_1").lpf(3000).hpf(800).gain(0.75)
)
const pumpSynth = n("[0,2,4]").struct("x*6").layer(
  (x) => x.sound("saw").add(note("0")).hpf(800).gain(.69),
  (x) => x.sound("sine").add(note("12"))
).orbit(2).decay(1.2).sustain(.5)
const drums = stack(
  n("0").struct("x!4")
    .layer(
      (x) => x.sound("bd").bank("RolandTR707"),
      (x) => x.sound("circuitsdrumtracks_bd")
    )
    .room(.1).duckorbit(2).duckattack(.2).duckdepth(1.2),
  n("0").struct("~ x ~ x").layer(
    (x) => x.sound("sd").bank("RolandTR707"),
    (x) => x.sound("sequentialcircuitstom_sd").gain(.25)
  ).room(.1),
  sound("[hh hh hh]*4").bank("RolandTR707").gain(.1)
)

const versePart1 = cat(
  n("[~ [2 3 3] 3 [2 3 3]]"),
  n("[3 [ ~ ~ 5] [~ ~ ~] [ ~ 1 1 ]]"),
  n("[2 [ ~ ~ 5] [~ ~ ~] [ ~ 0 0 ]]"),
  n("1 -1@12"),
  n("[~ [2 3 3] 3 [2 3 3]]"),
  n("[3 [ ~ ~ 5] [~ ~ ~] [ ~ 1 1 ]]"),
  n("[2 [~ ~ 7] [7] [~ 6 7]]"),
  n("6 _ 6  7 [~ 6] ~ [~ 6] ~ 6   1 ~ 5")
)
  .scale("G:Major").scaleTranspose("<-1>")

const versePart2 = cat(
  n("[~ ~ 5] [~ ~ 5 ] [ ~ ~ 1 ] [1 ~ 5]"),
  n("[~ ~ 5] [~ ~ 5 ] [ ~ ~ 1 ] [~ ~ ~ ]"),
  n("[5 5 5] [5 5 5]"),
  n("[5 _ 6] [~] [~ ~ 1] [1 ~ 5]"),
  n("[~ ~ 5] [~ ~ 5 ] [ ~ ~ 1 ] [1 ~ 5]"),
  n("[~ ~ 5] [~ ~ 5 ] [ 6 ~ 1 ] [~ ~ ~ ]"),
  n("[5 5 5] [5 4 3]"),
  n("[3 _ 2] [~] [~ ~ ~] [ ~ ]")
)
  .scale("G:Major").scaleTranspose("<-1>")

const prechorus = cat(
  n("[-1 1 4 3] [-2 0 6 5] [3 5 [~ ~ 6] [ 5 4 4]] [ 3 _ _ 0]"),
  n("[-1 1 4 3] [-2 0 6 5] [3 [~ ~ 3] 3 [5 ~ 5]] [ 5@2 [~ ~ 11] [11 ~ 14]]")
).slow(4)
  .scale("G:Major").scaleTranspose("<-1>")

const chorus1 = cat(
  n("<[6 6 [6 ~ 3] [3 ~ 5]] [6 6 [8 ~ 7] [6 _ 5]]>"),
  n("[5 [5 ~ ~] [4 5 5] [5 4 4]]"),
  n("[[4 _ 3] ~ [4 5 5] [5 4 4]]"),
  n("[[4 _ 3] ~ [2 _ 3] [~ 1 _]]")
)
  .scale("G4:Major").scaleTranspose("<-1>")
const chorus2 = cat(
  n("[-1 1 4 3] [-2 0 6 5] [3 5 9 [7 _ 8] ]  <[8 6 [~ ~ 1] 0] [8 6 _ ~]>"),
).slow(4).scale("G4:Major").scaleTranspose("<-1>")
  
vocals: arrange(
  [8, versePart1.lpf(filterMuted)],
  [8, versePart2.lpf(filterMuted)],
  [8, prechorus.lpf(filterMuted)],
  [8, chorus1.lpf(filterFull).hpf(800)],
  [8, chorus2.lpf(filterFull).hpf(800)]
)
  .layer(
    (x) => x.sound("triangle"),
    (x) => x.sound("saw")
  )
  .room(1)
  .delay(.5)
  .delayfeedback(.69)
  .sustain(1.2)
  .decay(.5)

backingTracks: arrange(
  [16, stack(
    drivingBass.scale(verseProgression).transpose("-12"),
    piano.lpf(2000).orbit(2).scale(verseProgression),
    drums

 )],
  [8, stack(
    slowBass.scale(chorusProgression).transpose("-12"),
    piano.lpf(3000).scale(chorusProgression)
  )],
  [16, stack(
    drivingBass.scale(chorusProgression).transpose("-12"),
    piano.scale(chorusProgression),
    pumpSynth.lpf(3000).scale(chorusProgression),
    drums

  )]
)

