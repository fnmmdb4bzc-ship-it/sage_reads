/*
 * ReadIT content: Levels 0 and 1.
 *
 * Every question lists the correct answer FIRST; the app shuffles the options.
 * Decodable ("read it myself") stories are checked by scripts/check-content.mjs:
 * every word must use only sounds taught so far, or be a heart word taught so far.
 *
 * Names in stories are short and decodable. Anchor words are simple everyday words.
 */
const CONTENT = {};

/* ---------------- Heart words ---------------- */
// h = the tricky letters, as [start, end) index ranges into the word.
CONTENT.heartWords = [
  // Level 1
  { w: 'a',    level: 1, after: 'a', h: [[0, 1]] },
  { w: 'the',  level: 1, after: 'n', h: [[2, 3]] },
  { w: 'is',   level: 1, after: 'n', h: [[1, 2]] },
  { w: 'has',  level: 1, after: 'n', h: [[2, 3]] },
  { w: 'I',    level: 1, after: 'd', h: [[0, 1]] },
  { w: 'said', level: 1, after: 'd', h: [[1, 3]] },
  { w: 'to',   level: 1, after: 'd', h: [[1, 2]] },
  { w: 'was',  level: 1, after: 'o', h: [[1, 3]] },
  { w: 'of',   level: 1, after: 'o', h: [[0, 2]] },
  { w: 'you',  level: 1, after: 'e', h: [[1, 3]] },
  { w: 'do',   level: 1, after: 'e', h: [[1, 2]] },
  { w: 'his',  level: 1, after: 'r', h: [[2, 3]] },
  { w: 'as',   level: 1, after: 'r', h: [[1, 2]] },
  // Level 2. Starred in the scope document: he, she, we, me and be become
  // decodable at Level 6 (open syllables).
  { w: 'he',    level: 2, after: 'sh', h: [[1, 2]] },
  { w: 'she',   level: 2, after: 'sh', h: [[2, 3]] },
  { w: 'we',    level: 2, after: 'ch', h: [[1, 2]] },
  { w: 'me',    level: 2, after: 'ch', h: [[1, 2]] },
  { w: 'be',    level: 2, after: 'ch', h: [[1, 2]] },
  { w: 'they',  level: 2, after: 'th', h: [[2, 4]] },
  { w: 'there', level: 2, after: 'th', h: [[2, 5]] },
  { w: 'what',  level: 2, after: 'wh', h: [[2, 3]] },
  { w: 'where', level: 2, after: 'wh', h: [[2, 5]] },
  { w: 'who',   level: 2, after: 'wh', h: [[0, 3]] },
  { w: 'put',   level: 2, after: 'ck', h: [[1, 2]] },
  { w: 'want',  level: 2, after: 'ck', h: [[1, 2]] },
  { w: 'are',   level: 2, after: 'floss', h: [[0, 3]] },
];

/* ---------------- Level 1 sound cards ---------------- */
// Order of teaching. Each card: sound, anchor word (+ picture key), rhyme,
// listen story (adult reads), and from n onwards a decodable story.
CONTENT.level1 = [
  {
    g: 's', anchor: 'sun', group: 1,
    rhyme: 'The sun is up, the sun is high,\nsss says the snake as he slides by.',
    listen: {
      title: 'Sam and Kim at the Sea',
      text: 'Sam and his sister Kim went to the sea. They made a big sandcastle in the sun. A little crab came out of the sand and waved its claws. Then a big wave came, splash! The sea washed the sandcastle away. Sam and Kim laughed and started all over again.',
      qs: [
        { q: 'Who went to the sea?', o: ['Sam and Kim', 'Tom and Dad', 'Nan and Pip'] },
        { q: 'What did they make?', o: ['a sandcastle', 'a kite', 'a cake'] },
        { q: 'What came out of the sand?', o: ['a crab', 'a dog', 'a fish'] },
        { q: 'What happened to the sandcastle?', o: ['a wave washed it away', 'a dog sat on it', 'it fell in the wind'] },
        { q: 'How did Sam and Kim feel at the end?', o: ['happy, they laughed', 'cross', 'very sad'], think: true },
      ],
    },
  },
  {
    g: 'a', anchor: 'ant', group: 1,
    rhyme: 'Little ant, little ant, marching in a line,\na, a, a, the ants are doing fine.',
    listen: {
      title: 'The Apple Picnic',
      text: 'Ann and Ben had a picnic under a big tree. They put six red apples on a blanket. They ran off to play. When they came back, a line of ants was marching to the apples! The ants carried away tiny bits of apple. Ann laughed. "The ants are having a picnic too!"',
      qs: [
        { q: 'What did Ann and Ben have under the tree?', o: ['a picnic', 'a party', 'a nap'] },
        { q: 'How many apples were there?', o: ['six', 'two', 'ten'] },
        { q: 'Who came to the apples?', o: ['ants', 'a dog', 'birds'] },
        { q: 'Why did Ann laugh?', o: ['the ants were having a picnic too', 'Ben fell over', 'the apples were green'], think: true },
      ],
    },
  },
  {
    g: 't', anchor: 'ten', group: 1,
    rhyme: 'Ten toes, ten toes, tap them on the floor,\nt, t, t, can you tap some more?',
    listen: {
      title: 'Tom\'s Tent',
      text: 'Tom and Dad put up a tent in the garden. They took a torch, two pillows and a tin of biscuits. At night they heard tap, tap, tap on the tent. Tom was scared. Dad switched on the torch. It was only the rain! Tom smiled and fell asleep.',
      qs: [
        { q: 'Where did Tom and Dad put the tent?', o: ['in the garden', 'at the beach', 'in the park'] },
        { q: 'What did they hear at night?', o: ['tap, tap, tap', 'a dog barking', 'a bell'] },
        { q: 'What was making the sound?', o: ['the rain', 'a cat', 'Mum'] },
        { q: 'How did Tom feel when he heard the sound?', o: ['scared', 'hungry', 'cross'], think: true },
      ],
    },
  },
  {
    g: 'p', anchor: 'pig', group: 1,
    rhyme: 'Pink pig, pink pig, plays in the park,\np, p, p, from morning to dark.',
    listen: {
      title: 'Pip the Pig',
      text: 'Pip the pig loved to play in the mud. One day the farmer\'s children gave Pip a bath. Pip was pink and clean. But then Pip saw a big puddle. Splash! Pip was muddy again, and very happy.',
      qs: [
        { q: 'What did Pip love to do?', o: ['play in the mud', 'sleep in the sun', 'eat apples'] },
        { q: 'What colour was Pip after the bath?', o: ['pink', 'brown', 'white'] },
        { q: 'What did Pip see after the bath?', o: ['a big puddle', 'a big apple', 'a big dog'] },
        { q: 'Does Pip like to be clean or muddy?', o: ['muddy', 'clean', 'Pip does not mind'], think: true },
      ],
    },
  },
  {
    g: 'i', anchor: 'in', group: 2,
    rhyme: 'In, in, in, put it in the tin,\ni, i, i, let the fun begin!',
    listen: {
      title: 'The Insect on the Window',
      text: 'Kim found a little insect on the window. It had six legs and red wings with black spots. It was a ladybird. Kim let it walk onto her hand. It tickled! Then Kim opened the window and the ladybird flew outside.',
      qs: [
        { q: 'Where did Kim find the insect?', o: ['on the window', 'in the bath', 'in her shoe'] },
        { q: 'How many legs did it have?', o: ['six', 'four', 'eight'] },
        { q: 'What kind of insect was it?', o: ['a ladybird', 'a bee', 'an ant'] },
        { q: 'What did Kim do at the end?', o: ['let it fly outside', 'put it in a box', 'gave it to Mum'] },
      ],
    },
  },
  {
    g: 'n', anchor: 'nest', group: 2,
    rhyme: 'Nine little nuts in a cosy nest,\nn, n, n, the nest is the best.',
    listen: {
      title: 'The Nest in the Hedge',
      text: 'Nan and Ben found a nest in the hedge. In the nest were three blue eggs. Every day they looked at the nest very quietly. One morning the eggs had hatched! Three baby birds opened their beaks wide. "They are hungry," whispered Nan.',
      qs: [
        { q: 'Where was the nest?', o: ['in the hedge', 'on the roof', 'in a box'] },
        { q: 'How many eggs were in the nest?', o: ['three', 'two', 'five'] },
        { q: 'What colour were the eggs?', o: ['blue', 'white', 'brown'] },
        { q: 'Why did Nan and Ben look very quietly?', o: ['so they did not scare the birds', 'because they were tired', 'because it was night'], think: true },
      ],
    },
    read: {
      title: 'The Pin in the Tin',
      text: 'Nan has a tin. A pin is in the tin. Pip taps the tin. Tap, tap, tap! Nan tips the tin. Tip! The pin is in Nan\'s pan.',
      qs: [
        { q: 'Who has a tin?', o: ['Nan', 'Pip', 'Sam'] },
        { q: 'What is in the tin?', o: ['a pin', 'a pan', 'a nut'] },
        { q: 'What does Pip do?', o: ['taps the tin', 'sits in the tin', 'has a nap'] },
        { q: 'Where is the pin at the end?', o: ['in Nan\'s pan', 'in the tin', 'in Pip\'s hat'] },
      ],
    },
  },
  {
    g: 'm', anchor: 'mug', group: 2,
    rhyme: 'My mug is full of milk for me,\nm, m, m, yummy as can be.',
    listen: {
      title: 'Mum\'s Mug',
      text: 'Mum has a big green mug. Every morning she drinks tea from it. One day Max wanted to help. He carried the mug to Mum very slowly. He did not spill a drop! Mum gave Max a big hug.',
      qs: [
        { q: 'What colour is Mum\'s mug?', o: ['green', 'red', 'blue'] },
        { q: 'What does Mum drink from it?', o: ['tea', 'milk', 'juice'] },
        { q: 'How did Max carry the mug?', o: ['very slowly', 'very fast', 'on his head'] },
        { q: 'What did Mum give Max?', o: ['a big hug', 'a sweet', 'a new mug'] },
      ],
    },
    read: {
      title: 'The Tan Mat',
      text: 'Sam has a tan mat. Sam sits. Tim sits. Pam sits. Tap, tap! It is Nan. Nan sits. Is the mat a tan mat? It is!',
      qs: [
        { q: 'What does Sam have?', o: ['a tan mat', 'a map', 'a pan'] },
        { q: 'Who taps?', o: ['Nan', 'Tim', 'Pam'] },
        { q: 'How many sit on the mat?', o: ['four', 'two', 'three'], think: true },
        { q: 'What colour is the mat?', o: ['tan', 'red', 'pink'] },
      ],
    },
  },
  {
    g: 'd', anchor: 'dog', group: 2,
    rhyme: 'Dig, dig, dig, says the dog in the yard,\nd, d, d, he digs very hard.',
    listen: {
      title: 'Dot Digs',
      text: 'Dan has a dog called Dot. Dot loves to dig. One day Dot dug a big hole in the garden and found an old bone. Dot was so proud. She wagged her tail and dropped the bone at Dan\'s feet.',
      qs: [
        { q: 'What is the dog\'s name?', o: ['Dot', 'Dan', 'Ben'] },
        { q: 'What does Dot love to do?', o: ['dig', 'swim', 'sleep'] },
        { q: 'What did Dot find?', o: ['an old bone', 'a ball', 'a shoe'] },
        { q: 'Why did Dot drop the bone at Dan\'s feet?', o: ['to show Dan what she found', 'because it was too heavy', 'because she did not like it'], think: true },
      ],
    },
    read: {
      title: 'Tap, Tap, Dad',
      text: 'Dan pats a tin. Pat, pat, pat! Dad taps a pan. Tap, tap, tap! Dad sat. Dad naps. Dan taps Dad. "I am in a nap!" said Dad.',
      qs: [
        { q: 'What does Dan pat?', o: ['a tin', 'a pan', 'a pin'] },
        { q: 'What does Dad tap?', o: ['a pan', 'a tin', 'a mat'] },
        { q: 'What did Dad do when he sat?', o: ['had a nap', 'had a tap', 'had a dig'] },
        { q: 'Did Dad want Dan to tap him?', o: ['no, he wanted to rest', 'yes, he loves it', 'yes, he wanted to play'], think: true },
      ],
    },
  },
  {
    g: 'g', anchor: 'gum', group: 3,
    rhyme: 'Gum, gum, pink and sticky,\ng, g, g, chewing it is tricky.',
    listen: {
      title: 'The Gift',
      text: 'It was Gus\'s birthday. Gran gave him a gift in a box with a gold bow. Gus shook the box. It went rattle, rattle. He opened it. Inside was a green toy train! "Thank you, Gran!" said Gus.',
      qs: [
        { q: 'Whose birthday was it?', o: ['Gus', 'Gran', 'Kim'] },
        { q: 'What colour was the bow?', o: ['gold', 'red', 'green'] },
        { q: 'What was inside the box?', o: ['a toy train', 'a ball', 'a book'] },
        { q: 'What did Gus say?', o: ['Thank you, Gran!', 'Oh no!', 'Goodbye!'] },
      ],
    },
    read: {
      title: 'Tim\'s Pig',
      text: 'Tim has a pig. The pig digs. Dig, dig, dig! It digs a pit. "Sit, pig!" said Tim. The pig sits. Tim pats the pig. The pig naps in its pit.',
      qs: [
        { q: 'What does Tim have?', o: ['a pig', 'a dog', 'a cat'] },
        { q: 'What does the pig dig?', o: ['a pit', 'a tin', 'a pan'] },
        { q: 'What did Tim say?', o: ['Sit, pig!', 'Dig, pig!', 'Nap, pig!'] },
        { q: 'Where does the pig nap?', o: ['in its pit', 'on a mat', 'in a tin'] },
      ],
    },
  },
  {
    g: 'o', anchor: 'on', group: 3,
    rhyme: 'On, off, on, off, flick the light,\no, o, o, when it is on, it is bright.',
    listen: {
      title: 'Sharing an Orange',
      text: 'Tom had an orange in his lunch box. At break, Tom peeled it. He shared it with his friend Liz. There were ten pieces. Tom had five and Liz had five. "Sharing is fun," said Liz.',
      qs: [
        { q: 'Where was the orange?', o: ['in Tom\'s lunch box', 'in a bag', 'on a tree'] },
        { q: 'Who did Tom share with?', o: ['Liz', 'Mum', 'Dad'] },
        { q: 'How many pieces were there?', o: ['ten', 'five', 'two'] },
        { q: 'How many pieces did each child get?', o: ['five', 'ten', 'two'], think: true },
      ],
    },
    read: {
      title: 'Tom\'s Pot',
      text: 'Tom got a pot. Dip is in the pot. Tom got a pan. Tom tips the pot. Dip is in the pan. Dip is on the mat! "Tom!" said Nan. Tom got a mop. Mop, mop, mop!',
      qs: [
        { q: 'What did Tom get first?', o: ['a pot', 'a pan', 'a tin'] },
        { q: 'What was in the pot?', o: ['dip', 'sand', 'a pin'] },
        { q: 'Where did the dip go?', o: ['in the pan and on the mat', 'in the sand', 'on Nan'] },
        { q: 'What did Tom get at the end?', o: ['a mop', 'a map', 'a pot'] },
      ],
    },
  },
  {
    g: 'c', anchor: 'cat', group: 3,
    rhyme: 'Cat on the carpet, curled up tight,\nc, c, c, she sleeps all night.',
    listen: {
      title: 'Coco on the Car',
      text: 'Meg\'s cat, Coco, likes warm places. One cold morning, Coco slept on the warm car. When Dad came out, he saw Coco and smiled. He waited until Coco jumped down before he drove to work.',
      qs: [
        { q: 'What is the cat\'s name?', o: ['Coco', 'Meg', 'Dot'] },
        { q: 'Where did Coco sleep?', o: ['on the car', 'in a box', 'on the bed'] },
        { q: 'Why did Coco sleep there?', o: ['it was warm', 'it was soft', 'it was high'] },
        { q: 'Why did Dad wait before he drove?', o: ['to keep Coco safe', 'he was late', 'he was tired'], think: true },
      ],
    },
    read: {
      title: 'The Cat and the Cod',
      text: 'Sam has a cat. It can nap on a mat. It can sit in a pot. It can tip a can. A cod is in the can! "Not the cod, cat!" said Sam. The cat got the cod. Sam is mad at the cat!',
      qs: [
        { q: 'Where can the cat nap?', o: ['on a mat', 'in a can', 'on Sam'] },
        { q: 'What is in the can?', o: ['a cod', 'a pin', 'dip'] },
        { q: 'Who got the cod?', o: ['the cat', 'Sam', 'Nan'] },
        { q: 'How does Sam feel at the end?', o: ['cross', 'happy', 'sleepy'], think: true },
      ],
    },
  },
  {
    g: 'k', anchor: 'kit', group: 3,
    rhyme: 'Kit, kit, my first aid kit,\nk, k, k, it helps a bit.',
    listen: {
      title: 'Kim\'s Kite',
      text: 'Kim made a kite with a long red tail. She took it to the park on a windy day. Up, up, up went the kite! Then it got stuck in a tree. Kim\'s big brother Ken climbed up and got it down.',
      qs: [
        { q: 'What colour was the kite\'s tail?', o: ['red', 'blue', 'yellow'] },
        { q: 'What kind of day was it?', o: ['windy', 'rainy', 'very hot'] },
        { q: 'Where did the kite get stuck?', o: ['in a tree', 'on a roof', 'in a pond'] },
        { q: 'Who got the kite down?', o: ['Ken', 'Mum', 'Kim'] },
      ],
    },
    read: {
      title: 'Kim\'s Kit',
      text: 'Kim has a kit. A cap is in the kit. A map is in the kit. A tin pot is in the kit. Kim tips the kit. Is a pin in it? It is not!',
      qs: [
        { q: 'Who has a kit?', o: ['Kim', 'Tom', 'Sam'] },
        { q: 'Which one is in the kit?', o: ['a cap', 'a cat', 'a pig'] },
        { q: 'Is a pin in the kit?', o: ['no', 'yes', 'two pins'] },
        { q: 'Why might Kim need a map?', o: ['to find the way', 'to eat', 'to sleep on'], think: true },
      ],
    },
  },
  {
    g: 'e', anchor: 'end', group: 4,
    rhyme: 'Here is the end, the very end,\ne, e, e, goodbye, my friend!',
    listen: {
      title: 'The Egg Hunt',
      text: 'Ben and Jen went on an egg hunt in the garden. Jen found an egg under a bush. Ben found two eggs by the shed. They put all the eggs in a basket. Then they shared them with Gran.',
      qs: [
        { q: 'Where was the egg hunt?', o: ['in the garden', 'at school', 'at the beach'] },
        { q: 'How many eggs did Ben find?', o: ['two', 'one', 'three'] },
        { q: 'How many eggs did they find in all?', o: ['three', 'two', 'four'], think: true },
        { q: 'Who did they share the eggs with?', o: ['Gran', 'the dog', 'Dad'] },
      ],
    },
    read: {
      title: 'Ned the Pig',
      text: 'Meg has a pet pig. The pig is Ned. Ned is in a pen. Meg sets a pan of dip in the pen. "Do you get it, Ned?" said Meg. Ned gets the dip. Ned is a top pet!',
      qs: [
        { q: 'What pet does Meg have?', o: ['a pig', 'a cat', 'a dog'] },
        { q: 'What is the pig\'s name?', o: ['Ned', 'Meg', 'Tom'] },
        { q: 'What did Meg put in the pen?', o: ['a pan of dip', 'a mat', 'a cap'] },
        { q: 'Does Ned like the dip?', o: ['yes, he gets it', 'no, he does not', 'he is not sure'], think: true },
      ],
    },
  },
  {
    g: 'u', anchor: 'up', group: 4,
    rhyme: 'Up, up, up, the balloon goes high,\nu, u, u, up in the sky.',
    listen: {
      title: 'The Umbrella',
      text: 'It started to rain. Gus and Mum were walking to the shop. Mum put up her big umbrella. Gus held it with her. Then the wind blew, and the umbrella turned inside out! Gus and Mum laughed and ran home in the rain.',
      qs: [
        { q: 'Where were Gus and Mum going?', o: ['to the shop', 'to school', 'to the park'] },
        { q: 'What did Mum put up?', o: ['her umbrella', 'a tent', 'her hood'] },
        { q: 'What happened to the umbrella?', o: ['it turned inside out', 'it flew away', 'it fell in a puddle'] },
        { q: 'How did Gus and Mum feel?', o: ['they thought it was funny', 'they were cross', 'they were scared'], think: true },
      ],
    },
    read: {
      title: 'Gus the Pup',
      text: 'Gus is a pup. Gus digs in the mud. Gus gets mud on Mum\'s mat. "Gus!" said Mum. Mum got a mop. Mop, mop! Gus naps in the sun. Gus is a mud pup!',
      qs: [
        { q: 'Who is Gus?', o: ['a pup', 'a cat', 'a pig'] },
        { q: 'Where does Gus dig?', o: ['in the mud', 'in the sand', 'in a pot'] },
        { q: 'Where did the mud go?', o: ['on Mum\'s mat', 'on a cap', 'in the pen'] },
        { q: 'What did Mum get?', o: ['a mop', 'a tub', 'a cup'] },
      ],
    },
  },
  {
    g: 'r', anchor: 'red', group: 4,
    rhyme: 'Red, red, a red, red rose,\nr, r, r, and a red, red nose.',
    listen: {
      title: 'Gran\'s Lost Ring',
      text: 'Gran lost her ring. Rob looked under the bed. Rob looked in the bath. Then Rob saw something shiny in the plant pot. It was Gran\'s ring! Gran gave Rob a big smile.',
      qs: [
        { q: 'Who lost a ring?', o: ['Gran', 'Mum', 'Rob'] },
        { q: 'Where did Rob look first?', o: ['under the bed', 'in the bath', 'in the plant pot'] },
        { q: 'Where was the ring?', o: ['in the plant pot', 'under the bed', 'in the bath'] },
        { q: 'How did Gran feel?', o: ['happy', 'sad', 'cross'], think: true },
      ],
    },
    read: {
      title: 'The Red Rug',
      text: 'Ron has a red rug. Ron sits on his rug. A pup ran on the rug. Rip! A rip is in the rug. Ron is sad. Mum sets a red rag on the rip. Ron is not sad. Ron sits on his rug.',
      qs: [
        { q: 'What colour is Ron\'s rug?', o: ['red', 'tan', 'green'] },
        { q: 'Who ran on the rug?', o: ['a pup', 'a cat', 'Mum'] },
        { q: 'What happened to the rug?', o: ['it got a rip', 'it got wet', 'it got lost'] },
        { q: 'How did Mum fix the rug?', o: ['with a red rag', 'with a pin', 'with a new rug'] },
      ],
    },
  },
  {
    g: 'h', anchor: 'hat', group: 4,
    rhyme: 'My hat, my hat, I hop in my hat,\nh, h, h, imagine that!',
    listen: {
      title: 'The Windy Hat',
      text: 'Hal wore his new hat to the beach. A big gust of wind blew it off his head! The hat rolled along the sand. A friendly dog ran after it and brought it back to Hal. "Thank you, dog!" said Hal.',
      qs: [
        { q: 'Where did Hal go?', o: ['to the beach', 'to the shop', 'to school'] },
        { q: 'What happened to the hat?', o: ['the wind blew it off', 'it got wet', 'Hal sat on it'] },
        { q: 'Who brought the hat back?', o: ['a dog', 'Mum', 'a boy'] },
        { q: 'Why do we say the dog was friendly?', o: ['it helped Hal', 'it barked', 'it ran away'], think: true },
      ],
    },
    read: {
      title: 'Hen in the Hut',
      text: 'Hen has a red hat. Hen hops to the hut. "It is hot!" said Hen. Hen sits in the hut. The sun is hot, hot, hot. Hen naps in the hut. Hen has the hat on.',
      qs: [
        { q: 'What does Hen have?', o: ['a red hat', 'a red rug', 'a hut'] },
        { q: 'Where does Hen hop to?', o: ['the hut', 'the sun', 'the pen'] },
        { q: 'Why did Hen go in the hut?', o: ['it was hot', 'it was wet', 'Hen was sad'], think: true },
        { q: 'What does Hen do in the hut?', o: ['naps', 'digs', 'hops'] },
      ],
    },
  },
  {
    g: 'b', anchor: 'bat', group: 5,
    rhyme: 'Bat and ball, hit it far,\nb, b, b, you are a star!',
    listen: {
      title: 'The Ball in the Bush',
      text: 'Ben and Bob were playing with a big blue ball. Bob kicked it too hard. It landed in a prickly bush. Ben used a long stick to push it out. "Let\'s play where there are no bushes!" said Bob.',
      qs: [
        { q: 'What colour was the ball?', o: ['blue', 'red', 'green'] },
        { q: 'Where did the ball land?', o: ['in a bush', 'in a pond', 'on a roof'] },
        { q: 'How did Ben get the ball out?', o: ['with a long stick', 'he climbed in', 'Dad got it'] },
        { q: 'Why did Bob want to play where there are no bushes?', o: ['so the ball does not get stuck', 'he likes the sun', 'bushes are pretty'], think: true },
      ],
    },
    read: {
      title: 'Ben on the Bus',
      text: 'Ben gets on the bus. The bus is big. The bus is red. Ben has a bag. In his bag is a bun. Ben sits. Ben gets his bun. Ben has his bun on the bus.',
      qs: [
        { q: 'What does Ben get on?', o: ['a bus', 'a bed', 'a box'] },
        { q: 'What is in his bag?', o: ['a bun', 'a bat', 'a bug'] },
        { q: 'What colour is the bus?', o: ['red', 'tan', 'pink'] },
        { q: 'Why might Ben eat his bun on the bus?', o: ['he is hungry', 'he is sad', 'he is hot'], think: true },
      ],
    },
  },
  {
    g: 'f', anchor: 'fig', group: 5,
    rhyme: 'A fig, a fig, so soft and sweet,\nf, f, f, a fruity treat.',
    listen: {
      title: 'Flip and Flop',
      text: 'Dad and Jen got a fish tank. They put in water, stones and a little plant. Then they added two orange fish. Jen called them Flip and Flop. Every morning Jen feeds them a tiny pinch of food.',
      qs: [
        { q: 'What did Dad and Jen get?', o: ['a fish tank', 'a dog', 'a cat'] },
        { q: 'How many fish did they add?', o: ['two', 'three', 'one'] },
        { q: 'What are the fish called?', o: ['Flip and Flop', 'Fin and Fan', 'Sam and Kim'] },
        { q: 'When does Jen feed them?', o: ['every morning', 'every night', 'once a week'] },
      ],
    },
    read: {
      title: 'A Hot Day',
      text: 'It is hot. Dad gets a fan. Dad sets the fan on. Dad sits at the fan. It is fun! Pop! The fan is not on. Dad is hot. Dad gets in the tub!',
      qs: [
        { q: 'What is the day like?', o: ['hot', 'wet', 'cold'] },
        { q: 'What did Dad get?', o: ['a fan', 'a fig', 'a hat'] },
        { q: 'What happened to the fan?', o: ['it stopped', 'it fell', 'it got wet'] },
        { q: 'What did Dad do at the end?', o: ['got in the tub', 'sat in the sun', 'had a nap'] },
      ],
    },
  },
  {
    g: 'l', anchor: 'leg', group: 5,
    rhyme: 'Left leg, right leg, lift them high,\nl, l, l, kick up to the sky.',
    listen: {
      title: 'Liz\'s Leaf Book',
      text: 'In autumn, a big yellow leaf fell from a tree. The wind carried it over the wall. It landed in Liz\'s garden. Liz picked it up and stuck it in her book. Now she has a leaf book with ten leaves in it.',
      qs: [
        { q: 'What colour was the leaf?', o: ['yellow', 'green', 'blue'] },
        { q: 'What carried the leaf over the wall?', o: ['the wind', 'a bird', 'a boy'] },
        { q: 'Where did the leaf land?', o: ['in Liz\'s garden', 'on the road', 'in a pond'] },
        { q: 'What did Liz make?', o: ['a leaf book', 'a hat', 'a card'] },
      ],
    },
    read: {
      title: 'Len\'s Lids',
      text: 'Len has a lot of lids. Len sets a lid on a pot. Len sets a lid on a pan. Len sets a lid on a tub. Len has a big lid. It fits on the bin!',
      qs: [
        { q: 'What does Len have a lot of?', o: ['lids', 'logs', 'legs'] },
        { q: 'Where does the big lid go?', o: ['on the bin', 'on a pot', 'on a tub'] },
        { q: 'Which one did Len put a lid on?', o: ['a pan', 'a cat', 'a bus'] },
        { q: 'Why do pots need lids?', o: ['to keep the food in', 'to look nice', 'to make a noise'], think: true },
      ],
    },
  },
  {
    g: 'j', anchor: 'jam', group: 5,
    rhyme: 'Jiggle the jam, jiggle the jar,\nj, j, j, there you are!',
    listen: {
      title: 'Gran\'s Jam',
      text: 'Gran makes jam from plums. She fills five jars with sticky purple jam. Jack helps her stick labels on the jars. Then they have jam on warm toast. "Yum!" says Jack.',
      qs: [
        { q: 'What does Gran make the jam from?', o: ['plums', 'apples', 'oranges'] },
        { q: 'How many jars does she fill?', o: ['five', 'two', 'ten'] },
        { q: 'How does Jack help?', o: ['he sticks labels on', 'he picks plums', 'he washes the jars'] },
        { q: 'What do they eat at the end?', o: ['jam on toast', 'jam with ice cream', 'plums'] },
      ],
    },
    read: {
      title: 'Jen and the Jam',
      text: 'Jen has a pot of jam. Jen sets jam on a bun. Jen gets jam on the mat. Jen gets jam on Dad! "Jen!" said Dad. Dad has jam on his lip. Dad gets a jam bun!',
      qs: [
        { q: 'What does Jen have?', o: ['a pot of jam', 'a jug', 'a jet'] },
        { q: 'Where does Jen put the jam first?', o: ['on a bun', 'on the mat', 'on Dad'] },
        { q: 'Where is the jam on Dad?', o: ['on his lip', 'on his hat', 'on his leg'] },
        { q: 'What does Dad get at the end?', o: ['a jam bun', 'a jug', 'a hat'] },
      ],
    },
  },
  {
    g: 'v', anchor: 'van', group: 6,
    rhyme: 'Vroom goes the van, very fast,\nv, v, v, zooming past.',
    listen: {
      title: 'Vin\'s Van',
      text: 'Vin drives a big white van. Every day he takes parcels to the houses in town. Today he has a very big box for Meg. Meg opens the door. It is a new bicycle! "Thank you, Vin!" says Meg.',
      qs: [
        { q: 'What colour is the van?', o: ['white', 'red', 'blue'] },
        { q: 'What does Vin take to the houses?', o: ['parcels', 'milk', 'pizza'] },
        { q: 'Who is the big box for?', o: ['Meg', 'Vin', 'Gran'] },
        { q: 'What was in the box?', o: ['a bicycle', 'a dog', 'a bed'] },
      ],
    },
    read: {
      title: 'Vic\'s Van',
      text: 'Vic has a big red van. Vic sets ten bags in the van. Vic gets in. Vic sits. Tap, tap! It is Dad. Dad has a bag. "Get in, Dad!" said Vic.',
      qs: [
        { q: 'What does Vic have?', o: ['a big red van', 'a big red bus', 'a jet'] },
        { q: 'How many bags did Vic put in the van?', o: ['ten', 'six', 'two'] },
        { q: 'Who tapped?', o: ['Dad', 'Mum', 'Gus'] },
        { q: 'What did Vic say to Dad?', o: ['Get in, Dad!', 'Get out, Dad!', 'Go home, Dad!'] },
      ],
    },
  },
  {
    g: 'w', anchor: 'web', group: 6,
    rhyme: 'A web on the wall, wet with dew,\nw, w, w, a spider too.',
    listen: {
      title: 'The Web on the Gate',
      text: 'One morning Will saw a spider\'s web on the gate. It was wet with dew and it sparkled in the sun. A small spider sat in the middle. Will was careful not to break the web when he opened the gate.',
      qs: [
        { q: 'Where was the web?', o: ['on the gate', 'on the window', 'in a tree'] },
        { q: 'Why did the web sparkle?', o: ['it was wet with dew', 'it was painted', 'it had lights'] },
        { q: 'Where did the spider sit?', o: ['in the middle', 'on the gate', 'on Will'] },
        { q: 'Why was Will careful?', o: ['the web is the spider\'s home', 'he was scared', 'the gate was heavy'], think: true },
      ],
    },
    read: {
      title: 'A Wet Web',
      text: 'It is wet. Wes sits on a log. Wes gets wet. A web is on the log. A bug sits on the web. The web is wet. Wes is wet. The bug is wet, but it is in its web.',
      qs: [
        { q: 'What is the weather like?', o: ['wet', 'hot', 'windy'] },
        { q: 'Where does Wes sit?', o: ['on a log', 'on a bus', 'on a rug'] },
        { q: 'What is on the web?', o: ['a bug', 'a hen', 'a lid'] },
        { q: 'Why does the bug stay on its web?', o: ['it is its home', 'it is lost', 'it is cold'], think: true },
      ],
    },
  },
  {
    g: 'x', anchor: 'fox', group: 6, end: true,
    rhyme: 'A fox in a box, a box with a fox,\nx, x, x, he is wearing socks!',
    listen: {
      title: 'Max\'s Fox',
      text: 'Max found a little toy fox in a box in the cupboard. The fox was old and it had one ear missing. Mum helped Max sew a new ear on. Now the fox sits on Max\'s bed every night.',
      qs: [
        { q: 'Where did Max find the toy fox?', o: ['in a box', 'in the garden', 'at school'] },
        { q: 'What was missing?', o: ['an ear', 'a tail', 'an eye'] },
        { q: 'Who helped Max?', o: ['Mum', 'Dad', 'Gran'] },
        { q: 'Where does the fox sit now?', o: ['on Max\'s bed', 'in the box', 'in the car'] },
      ],
    },
    read: {
      title: 'Max and the Fox',
      text: 'Max has a big box. Max sets the box on the mat. A red fox gets in the box! Max tips the box. The fox ran to its den. Max has his box. Max sits in it!',
      qs: [
        { q: 'What does Max have?', o: ['a big box', 'a big bag', 'a big bus'] },
        { q: 'What got in the box?', o: ['a fox', 'a pup', 'a hen'] },
        { q: 'Where did the fox go?', o: ['to its den', 'to the hut', 'in the tub'] },
        { q: 'What did Max do at the end?', o: ['sat in the box', 'ran to the den', 'had a nap'] },
      ],
    },
  },
  {
    g: 'y', anchor: 'yam', group: 6,
    rhyme: 'Yam, yam, yummy yam,\ny, y, y, I like yam with jam!',
    listen: {
      title: 'The Yellow Yo-yo',
      text: 'Jen got a yellow yo-yo. At first it would not come back up. She tried and tried. Her friend Kit showed her how to flick her hand. Up came the yo-yo! "Yes!" said Jen.',
      qs: [
        { q: 'What colour was the yo-yo?', o: ['yellow', 'red', 'green'] },
        { q: 'Who showed Jen how to do it?', o: ['Kit', 'Mum', 'her teacher'] },
        { q: 'What did Jen say at the end?', o: ['Yes!', 'Oh no!', 'Help!'] },
        { q: 'What does this story teach us?', o: ['keep trying', 'yo-yos are bad', 'do not ask for help'], think: true },
      ],
    },
    read: {
      title: 'Yum, Yam!',
      text: 'Mum has a big yam. Mum cuts the yam. Gus has a bit. "Yum!" said Gus. The pup yaps. Yap, yap, yap! "Not yet, pup!" said Mum. The pup sits. Mum gets the pup a bit of yam. Yes!',
      qs: [
        { q: 'What does Mum have?', o: ['a big yam', 'a big bun', 'a big fig'] },
        { q: 'What did Gus say?', o: ['Yum!', 'Yuck!', 'Yes!'] },
        { q: 'What does the pup do?', o: ['yaps', 'naps', 'digs'] },
        { q: 'What does the pup get at the end?', o: ['a bit of yam', 'a bun', 'nothing'] },
      ],
    },
  },
  {
    g: 'z', anchor: 'zip', group: 6,
    rhyme: 'Zip up your jacket, zip it right,\nz, z, z, snug and tight.',
    listen: {
      title: 'The Stuck Zip',
      text: 'Zak\'s jacket has a zip. One cold morning, the zip got stuck. Zak pulled and pulled. Dad came to help. He wiggled the zip gently and zip! It closed. Zak was warm and ready for school.',
      qs: [
        { q: 'What got stuck?', o: ['the zip on Zak\'s jacket', 'a door', 'a shoe'] },
        { q: 'What kind of morning was it?', o: ['cold', 'hot', 'rainy'] },
        { q: 'Who came to help?', o: ['Dad', 'Mum', 'his teacher'] },
        { q: 'Where was Zak going?', o: ['to school', 'to the park', 'to bed'] },
      ],
    },
    read: {
      title: 'Liz and the Bug',
      text: 'Liz has a red bag. The bag has a big zip. Liz zips the bag up. Zip! But a bug is in the bag! Liz tugs the zip. Zap! The bug hops on Liz!',
      qs: [
        { q: 'What does Liz\'s bag have?', o: ['a big zip', 'a big lid', 'a big bug'] },
        { q: 'What was in the bag?', o: ['a bug', 'a pup', 'a fox'] },
        { q: 'What did the bug do?', o: ['hopped on Liz', 'went to sleep', 'ate the bag'] },
        { q: 'How might Liz feel?', o: ['surprised', 'bored', 'sleepy'], think: true },
      ],
    },
  },
  {
    g: 'qu', anchor: 'queen', group: 6,
    rhyme: 'The queen sat quietly, quite alone,\nqu, qu, qu, upon her throne.',
    listen: {
      title: 'The Queen\'s Quiet Day',
      text: 'The Queen lived in a big castle. One day she wanted a quiet day. She sat in her garden with a cup of tea and a good book. A duck walked by and went quack, quack! The Queen laughed. "Not so quiet after all!"',
      qs: [
        { q: 'Where did the Queen live?', o: ['in a castle', 'in a hut', 'in a tent'] },
        { q: 'What did the Queen want?', o: ['a quiet day', 'a party', 'a new crown'] },
        { q: 'What walked by?', o: ['a duck', 'a dog', 'a frog'] },
        { q: 'What sound did it make?', o: ['quack', 'woof', 'moo'] },
      ],
    },
    read: {
      title: 'The Quiz',
      text: 'Dad has a quiz. "Is a pup big?" said Dad. "It is not!" said Kim. "Can a hen dig?" said Dad. "It can!" said Kim. "Can a pig get on a bus?" said Dad. "It can not!" said Kim. Kim did not quit. Kim is a quiz kid!',
      qs: [
        { q: 'Who has a quiz?', o: ['Dad', 'Kim', 'Mum'] },
        { q: 'In the quiz, is a pup big?', o: ['no', 'yes', 'very big'] },
        { q: 'Can a hen dig?', o: ['yes', 'no', 'only in the sun'] },
        { q: 'Why is Kim a quiz kid?', o: ['she got the answers right', 'she likes cake', 'she was sleepy'], think: true },
      ],
    },
  },
];

/* ---------------- Level 2 sound cards ---------------- */
// key: used in progress records (card_<key>). gs: the spellings this card teaches.
// pos: where the anchor word shows the spelling ('start' or 'end').
CONTENT.level2 = [
  {
    g: 'sh', anchor: 'ship', group: 1, pos: 'start',
    say: '/sh/ as in ship. Finger to lips, like asking for quiet.',
    rhyme: 'Sh, sh, sh, the baby is asleep,\nthe ship on the sea does not make a peep.',
    listen: {
      title: 'The Shell',
      text: 'Sam found a pink shell on the beach. He held it to his ear and heard a soft shhh sound, like the sea. He took the shell home and put it on his shelf. Every night he listens to the sea in his shell.',
      qs: [
        { q: 'Where did Sam find the shell?', o: ['on the beach', 'in the park', 'in the garden'] },
        { q: 'What colour was the shell?', o: ['pink', 'white', 'blue'] },
        { q: 'What did Sam hear in the shell?', o: ['a soft shhh, like the sea', 'a dog barking', 'music'] },
        { q: 'Where did he put the shell?', o: ['on his shelf', 'in his bag', 'under his bed'] },
      ],
    },
    read: {
      title: 'The Fish Dish',
      text: 'Josh has a pet fish. The fish is in a dish. Josh sets the dish on a box. The cat sits on the box. The cat taps the dish. The dish tips! The fish is on the rug! Josh gets the fish. He sets it in the dish. "Shut the cat in the shed!" said Mum.',
      qs: [
        { q: 'What pet does Josh have?', o: ['a fish', 'a cat', 'a dog'] },
        { q: 'Where is the fish at the start?', o: ['in a dish', 'in a box', 'in the shed'] },
        { q: 'Who tipped the dish?', o: ['the cat', 'Josh', 'Mum'] },
        { q: 'Why did Mum want the cat in the shed?', o: ['to keep the fish safe', 'the cat was cold', 'the cat was hungry'], think: true },
      ],
    },
  },
  {
    g: 'ch', anchor: 'chick', group: 1, pos: 'start',
    say: '/ch/ as in chick. A short sneeze sound, not "chuh".',
    rhyme: 'Chick, chick, chick, come and eat,\nch, ch, ch, a crunchy treat.',
    listen: {
      title: 'The Cheeky Chick',
      text: 'On Gran\'s farm there are six fluffy yellow chicks. Every morning Meg helps Gran to feed them. One cheeky chick always jumps into the food bowl! Meg laughs and lifts it out gently.',
      qs: [
        { q: 'Where are the chicks?', o: ['on Gran\'s farm', 'at school', 'in a shop'] },
        { q: 'How many chicks are there?', o: ['six', 'two', 'ten'] },
        { q: 'What does the cheeky chick do?', o: ['jumps into the food bowl', 'runs away', 'sings a song'] },
        { q: 'How does Meg lift the chick out?', o: ['gently', 'quickly', 'roughly'] },
      ],
    },
    read: {
      title: 'Chip the Pup',
      text: 'Chad has a pup. It is Chip. Chip can run. Chip can hop. Chip hops on a big tin. Chip hops on Chad\'s chin! "Not on me, Chip!" said Chad. "Sit on the mat." Chip sits on the mat. Chip has a nap.',
      qs: [
        { q: 'What does Chad have?', o: ['a pup', 'a cat', 'a duck'] },
        { q: 'What is the pup\'s name?', o: ['Chip', 'Chad', 'Chin'] },
        { q: 'Where did Chip hop?', o: ['on Chad\'s chin', 'on a bus', 'in the shed'] },
        { q: 'What does Chip do at the end?', o: ['has a nap', 'runs off', 'hops on the tin'] },
      ],
    },
  },
  {
    g: 'th', anchor: 'thumb', group: 1, pos: 'start',
    say: '/th/ as in thumb. Tongue peeps out between the teeth.',
    rhyme: 'Thumbs up, thumbs up, one and two,\nth, th, th, I am proud of you.',
    listen: {
      title: 'Tom\'s Thumb',
      text: 'Tom was helping Dad to build a birdhouse. Bang! Tom hit his thumb with the hammer. "Ouch!" Dad put ice on it and gave Tom a hug. Soon his thumb felt better, and they finished the birdhouse together.',
      qs: [
        { q: 'What were Tom and Dad building?', o: ['a birdhouse', 'a boat', 'a bed'] },
        { q: 'What did Tom hit?', o: ['his thumb', 'his foot', 'Dad'] },
        { q: 'What did Dad put on it?', o: ['ice', 'a sock', 'jam'] },
        { q: 'Did they finish the birdhouse?', o: ['yes, together', 'no', 'Dad finished it alone'] },
      ],
    },
    read: {
      title: 'The Moth',
      text: 'Beth is in the bath. A moth is on the bath mat. "Get the moth, Seth!" said Beth. Seth gets a net. The moth sits on Seth\'s hat. Then it sits on the tub. Then it is in the net! Seth sets the moth on the path. "There, moth!" said Seth.',
      qs: [
        { q: 'Where is Beth?', o: ['in the bath', 'on the path', 'in the shed'] },
        { q: 'Where is the moth at first?', o: ['on the bath mat', 'on a hat', 'in a net'] },
        { q: 'What does Seth get?', o: ['a net', 'a hat', 'a cup'] },
        { q: 'Was Seth kind to the moth?', o: ['yes, he let it go outside', 'no, he kept it in the net', 'no, he was cross'], think: true },
      ],
    },
  },
  {
    g: 'wh', anchor: 'whale', group: 1, pos: 'start',
    say: '/w/ as in whale. Most of us say wh the same as w.',
    rhyme: 'The whale in the waves goes whoosh and whee,\nwh, wh, wh, out in the sea.',
    listen: {
      title: 'The Whale',
      text: 'Kim and Dad went on a boat trip. The sea was calm and blue. Suddenly a huge whale came up and blew water out of its blowhole. Whoosh! Kim waved at the whale. It slapped its tail on the water and swam away.',
      qs: [
        { q: 'Where were Kim and Dad?', o: ['on a boat', 'at the zoo', 'in a pool'] },
        { q: 'What came up out of the sea?', o: ['a whale', 'a shark', 'a seal'] },
        { q: 'What came out of the blowhole?', o: ['water', 'a fish', 'sand'] },
        { q: 'What did the whale do at the end?', o: ['slapped its tail and swam away', 'went to sleep', 'jumped onto the boat'] },
      ],
    },
    read: {
      title: 'Where Is the Cap?',
      text: 'Where is Ben\'s cap? It is not in the shed. It is not in the bath. Which pup has it? Rex has it! "Rex, what is that?" said Ben. Rex wags. When Ben gets the cap, Rex gets a hug.',
      qs: [
        { q: 'What did Ben lose?', o: ['his cap', 'his hat', 'his dog'] },
        { q: 'Where did Ben look?', o: ['in the shed and the bath', 'on the bus', 'in a box'] },
        { q: 'Who had the cap?', o: ['Rex', 'Mum', 'Beth'] },
        { q: 'What does Rex get at the end?', o: ['a hug', 'a bun', 'a bath'] },
      ],
    },
  },
  {
    g: 'ck', anchor: 'duck', group: 2, pos: 'end',
    say: '/k/ at the end of duck. We use ck straight after a short vowel.',
    rhyme: 'Quack goes the duck, quack, quack, quack,\nck, ck, ck, at the end, at the back.',
    listen: {
      title: 'Slow Coach',
      text: 'Every Saturday Jack and his sister Kate go to the park. They watch the ducks swim on the pond. A mother duck leads her ducklings in a line. One little duckling is always last. Jack calls it Slow Coach.',
      qs: [
        { q: 'When do Jack and Kate go to the park?', o: ['every Saturday', 'every night', 'on Monday'] },
        { q: 'What do they watch?', o: ['ducks', 'dogs', 'boats'] },
        { q: 'Who leads the ducklings?', o: ['the mother duck', 'Jack', 'Kate'] },
        { q: 'Why does Jack call the duckling Slow Coach?', o: ['it is always last', 'it is very fast', 'it is very big'], think: true },
      ],
    },
    read: {
      title: 'Mack the Duck',
      text: 'Jack has a duck. It is Mack. Mack can quack. Quack, quack, quack! Mack sits on a rock. Jack wants to pick Mack up. Peck! Mack pecks Jack\'s neck! "Mack!" said Jack. Jack puts Mack back on the rock.',
      qs: [
        { q: 'What does Jack have?', o: ['a duck', 'a chick', 'a fish'] },
        { q: 'What is the duck\'s name?', o: ['Mack', 'Jack', 'Rex'] },
        { q: 'Where does Mack sit?', o: ['on a rock', 'on a bus', 'in a sock'] },
        { q: 'What did Mack do to Jack?', o: ['pecked his neck', 'sat on his lap', 'ran off'] },
      ],
    },
  },
  {
    g: 'ff ll ss zz', key: 'floss', gs: ['ff', 'll', 'ss', 'zz'], anchor: 'bell', group: 2, pos: 'end',
    say: 'The doubling rule: a short word with a short vowel that ends in f, l, s or z doubles it, as in bell, puff, kiss and buzz.',
    rhyme: 'Puff and bell, and kiss and buzz,\nshort vowel, double the end, that is what it does!',
    listen: {
      title: 'The School Bell',
      text: 'Ring, ring! The school bell rang. Bella packed her bag and ran to the gate. Her dog Fluff was waiting with Mum. Fluff wagged his tail so hard that he nearly fell over!',
      qs: [
        { q: 'What rang?', o: ['the school bell', 'the phone', 'a clock'] },
        { q: 'Who was waiting at the gate?', o: ['Fluff and Mum', 'Dad', 'Gran'] },
        { q: 'What is the dog\'s name?', o: ['Fluff', 'Rex', 'Bella'] },
        { q: 'How did Fluff feel?', o: ['very happy', 'scared', 'tired'], think: true },
      ],
    },
    read: {
      title: 'Bill on the Hill',
      text: 'Bill is on a big hill. Nell is on the hill as well. Puff, puff! "The hill is big!" said Bill. Buzz! A bug is on Bill. Bill fell in the mud. "Are you well?" said Nell. Bill is a mess, but he is well.',
      qs: [
        { q: 'Where are Bill and Nell?', o: ['on a big hill', 'in the bath', 'at the shop'] },
        { q: 'What landed on Bill?', o: ['a bug', 'a bell', 'a doll'] },
        { q: 'Where did Bill fall?', o: ['in the mud', 'in a dish', 'on Nell'] },
        { q: 'Is Bill all right at the end?', o: ['yes, he is well', 'no, he is sick', 'he is lost'] },
      ],
    },
  },
  {
    g: 'ng', anchor: 'king', group: 2, pos: 'end',
    say: '/ng/ at the end of king. Keep it as one sound, do not add a g.',
    rhyme: 'The king can sing a ding-dong song,\nng, ng, ng, all day long.',
    listen: {
      title: 'The King\'s Party',
      text: 'King Leo was having a party. Everyone wanted to sing for him. The frog sang, the bird sang, and the lion sang a very loud song. The king clapped and clapped. Then the king sang too, and everyone laughed, because he sang so badly!',
      qs: [
        { q: 'Who was having a party?', o: ['King Leo', 'the frog', 'the bird'] },
        { q: 'Who sang a very loud song?', o: ['the lion', 'the frog', 'the bird'] },
        { q: 'What did the king do?', o: ['clapped, then sang', 'went to sleep', 'danced'] },
        { q: 'Why did everyone laugh?', o: ['the king sang badly', 'the king fell over', 'the frog told a joke'], think: true },
      ],
    },
    read: {
      title: 'The King\'s Ring',
      text: 'King Ming has a ring. The king sings a long song. Sing, sing, sing! His ring fell in a dish. Ding! "Where is the ring?" said the king. It is in the dish! The king gets his ring. Then he sings a ring song.',
      qs: [
        { q: 'Who has a ring?', o: ['the king', 'Nell', 'Rex'] },
        { q: 'What does the king do?', o: ['sings a long song', 'has a bath', 'cooks'] },
        { q: 'Where did the ring go?', o: ['in a dish', 'in the bath', 'on a rug'] },
        { q: 'What does the king do at the end?', o: ['sings a ring song', 'has a nap', 'loses the ring'] },
      ],
    },
  },
  {
    g: 'nk', anchor: 'sink', group: 2, pos: 'end',
    say: '/nk/ at the end of sink, as in think and bank.',
    rhyme: 'Pink ink, wink, wink,\nnk, nk, nk, down the sink.',
    listen: {
      title: 'The Sink Boat',
      text: 'Zak filled the kitchen sink with water. He made a little boat from a cork and a paper sail. He blew on the sail, and the boat floated across the sink. Then he added a toy frog to be the captain!',
      qs: [
        { q: 'What did Zak fill with water?', o: ['the kitchen sink', 'the bath', 'a bucket'] },
        { q: 'What did he make?', o: ['a boat', 'a kite', 'a hat'] },
        { q: 'How did he make the boat move?', o: ['he blew on the sail', 'he pushed it', 'it had a motor'] },
        { q: 'Who was the captain?', o: ['a toy frog', 'Zak', 'a duck'] },
      ],
    },
    read: {
      title: 'Pink Ink',
      text: 'Hank has a pot of pink ink. The ink tips in the sink. The sink is pink! "Hank!" said Mum. "Is that ink?" "It is," said Hank. Hank gets a rag. He rubs the sink. Rub, rub, rub! The sink is not pink. "Thank you," said Mum.',
      qs: [
        { q: 'What colour is the ink?', o: ['pink', 'red', 'black'] },
        { q: 'Where did the ink go?', o: ['in the sink', 'on the rug', 'on Mum'] },
        { q: 'What did Hank use?', o: ['a rag', 'a mop', 'a sock'] },
        { q: 'Why did Mum say thank you?', o: ['Hank cleaned the sink', 'Hank made the sink pink', 'Hank had a bath'], think: true },
      ],
    },
  },
];

// Level 2 words: Level 1 rules plus sh ch th wh ck, the doubling rule, ng and nk.
CONTENT.words2 = ('ship shop shed shell shut fish dish wish cash mash rash shin shot hush rush dash ' +
  'chin chip chop chat check chick much such rich chug chess chill ' +
  'thin thick this that them then with bath moth path math ' +
  'when whip whiz which ' +
  'duck sock lock rock neck back pack sack kick pick lick sick tick deck peck luck tuck ' +
  'bell well tell sell fell hill fill pill will doll dull puff cuff huff off kiss miss hiss mess less boss toss fuss buzz fizz jazz ' +
  'king ring sing wing thing long song bang hang sung lung ' +
  'sink pink wink link think bank tank sank honk junk sunk bunk').split(' ');

CONTENT.nonsense2 = ('shib chom thep whid jeck vock bish tull pess fiss ning hink shog chab thog whap gock nuff').split(' ');

CONTENT.pictureWords2 = ('fish dish shell ship shed chick bath moth duck sock lock rock bell doll hill king ring wing sink').split(' ');

/* ---------------- Word banks ---------------- */
// Level 1 real CVC words, no blends and no digraphs. The app only offers a
// word once every letter in it has been taught.
CONTENT.cvc = ('sat pat tap tip pit sit nap pin tin nip pan tan man map mat mad sad dip did dim ' +
  'pig dig big gap tag got dog top pot not on mop cot cap can cat cod kit kid ' +
  'peg pet net ten pen men den get met set up pup cup mud sun nut gum tub rug ' +
  'rat rip red ran rot hat hit hot him hen hug hut hip bat bag bed bin bus but bit bud bun ' +
  'fan fat fig fin fun fog fed lap lid lip lit log lot leg let jam jet jug jog job ' +
  'van vet web wet wig win wag box fox six mix fix wax yes yet yum yap zip zap quiz quit').split(' ');

// Made-up words for "Real or made up?". Checked by hand to not be English words.
CONTENT.nonsense = ('tib nim pid sut mog dap gom kep heg bim fip lom jad vop wem zut quib pab sep mib ' +
  'dop gid rup hib lun jeb wib yat zom fod sab tep nug rop').split(' ');

// Pictures available for word activities (keys in ILLUS).
CONTENT.pictureWords = ('cat hat bat map pan fan can man rat bag jam cap mat sun bun nut cup bus mug bug rug tub hut ' +
  'pig pin bin lip six dog log pot top box fox mop bed net pen ten hen web leg jet jug zip van').split(' ');

/* ---------------- Level 0 ---------------- */
CONTENT.level0 = {
  rhymeSets: [
    ['cat', 'hat', 'sun'], ['pig', 'wig', 'dog'], ['dog', 'log', 'cup'], ['sun', 'bun', 'pen'],
    ['hen', 'pen', 'fox'], ['fox', 'box', 'bed'], ['mop', 'top', 'bus'], ['bug', 'rug', 'hat'],
    ['jet', 'net', 'pig'], ['fan', 'van', 'mug'], ['bat', 'cat', 'egg'], ['pin', 'bin', 'cup'],
    ['mug', 'bug', 'fan'], ['ten', 'hen', 'log'], ['can', 'pan', 'web'], ['map', 'cap', 'six'],
  ],
  syllables: [
    ['sun', 1], ['cat', 1], ['dog', 1], ['kite', 1], ['fish', 1], ['ball', 1],
    ['apple', 2], ['rabbit', 2], ['pencil', 2], ['insect', 2], ['orange', 2], ['yoyo', 2],
    ['banana', 3], ['butterfly', 3], ['umbrella', 3], ['elephant', 3], ['tomato', 3], ['octopus', 3],
  ],
  firstSound: [
    ['sun', 'six', 'cat'], ['pig', 'pen', 'dog'], ['mug', 'map', 'fan'], ['bat', 'bed', 'hen'],
    ['fan', 'fox', 'net'], ['cat', 'cup', 'jet'], ['hat', 'hen', 'pot'], ['jam', 'jet', 'web'],
    ['leg', 'log', 'bus'], ['net', 'nut', 'top'], ['top', 'ten', 'rug'], ['rug', 'rat', 'box'],
    ['web', 'wig', 'pan'], ['cup', 'can', 'pig'], ['bus', 'bag', 'lip'], ['pin', 'pot', 'van'],
  ],
  listen: [
    {
      title: 'The Lost Teddy',
      text: 'Ben could not find his teddy. He looked on his bed. He looked under the table. He looked in the bath. Then his dog, Rex, came in with something in his mouth. It was Teddy! Ben gave Rex a big hug.',
      qs: [
        { q: 'What did Ben lose?', o: ['his teddy', 'his ball', 'his hat'] },
        { q: 'Where did Ben look first?', o: ['on his bed', 'in the bath', 'under the table'] },
        { q: 'Who found Teddy?', o: ['Rex the dog', 'Mum', 'Ben'] },
        { q: 'How did Ben feel at the end?', o: ['happy', 'cross', 'sleepy'], think: true },
      ],
    },
    {
      title: 'Rainy Day Fun',
      text: 'It was raining, so Kim and Sam could not play outside. They made a fort with blankets and chairs. They took a torch and some books inside the fort. When the rain stopped, they were having so much fun that they stayed in the fort.',
      qs: [
        { q: 'Why could Kim and Sam not play outside?', o: ['it was raining', 'it was night', 'they were sick'] },
        { q: 'What did they make?', o: ['a fort', 'a cake', 'a kite'] },
        { q: 'What did they take into the fort?', o: ['a torch and books', 'a dog', 'their shoes'] },
        { q: 'Why did they stay in the fort?', o: ['they were having fun', 'it was still raining', 'Mum told them to'], think: true },
      ],
    },
  ],
};


/* ---------------- Games ----------------
 * The catalogue of games. The app supplies how each one plays (by "base");
 * this list says which levels have it and what it is called. The key a game
 * is saved under is l<level>_<base>, for example l1_pic2word.
 * adultOnly games show only when "Adult helper" is on.
 */
CONTENT.games = [
  { base: 'rhyme',  levels: [0], title: 'Rhyme Time', pic: 'cat', color: 'c-coral', desc: 'Tap the two pictures that rhyme.', adult: 'Say the name of each picture together. Then the learner taps the two that rhyme.' },
  { base: 'syll',   levels: [0], title: 'Clap the Syllables', pic: 'banana', color: 'c-sand', desc: 'Clap the word. How many claps?', adult: 'Say the word slowly and clap each part together: ba-na-na is 3 claps.' },
  { base: 'first',  levels: [0], title: 'Same First Sound', pic: 'pig', color: 'c-ocean', desc: 'Tap the two pictures that start with the same sound.', adult: 'Say each picture name, stretching the first sound: ppp-ig.' },
  { base: 'letter', levels: [0], title: 'Letter Match', pic: 'kite', color: 'c-purple', desc: 'Find the letter that looks the same.', adult: 'Trace the letter in the air together before choosing.' },
  { base: 'case',   levels: [0], title: 'Big and Small Letters', pic: 'queen', color: 'c-green', desc: 'Match the capital letter to its small letter.', adult: 'Name the letter together, then find its small letter.' },

  { base: 'pic2word',   levels: [1, 2], title: 'Picture to Word', pic: { 1: 'cat', 2: 'fish' }, color: 'c-coral', desc: 'Look at the picture. Read the words. Tap the right one.', adult: 'Ask the learner to read every word before tapping, not just the first sound.' },
  { base: 'build',      levels: [1, 2], title: 'Build the Word', pic: { 1: 'box', 2: 'sock' }, color: 'c-sand', desc: 'Look at the picture. Tap the letters to spell it.', adult: 'The learner says the word, taps out each sound, then builds it. Two letters that make one sound sit on one tile.' },
  { base: 'sort',       levels: [1, 2], title: { 1: 'Vowel Sort', 2: 'Sound Sort' }, pic: { 1: 'apple', 2: 'ship' }, color: 'c-ocean', desc: { 1: 'Read the word. Which vowel sound is in the middle?', 2: 'Read the word. Which sound do you hear?' }, adult: { 1: 'Vowels are the red letters. Ask: what sound is in the middle?', 2: 'Ask the learner to find the two letters that make one sound.' } },
  { base: 'realfake',   levels: [1, 2], title: 'Real or Made Up?', pic: { 1: 'queen', 2: 'king' }, color: 'c-purple', desc: 'Read the word. Is it a real word or a made-up word?', adult: 'Made-up words check that the learner is sounding out, not guessing from memory.' },
  { base: 'readchoose', levels: [1, 2], title: 'Read and Choose', pic: { 1: 'hat', 2: 'duck' }, color: 'c-green', desc: 'Read each sentence. Tap the one that matches the picture.', adult: 'Encourage the learner to read the whole sentence, then check it against the picture.' },
  { base: 'heart',      levels: [1, 2], title: 'Heart Words', pic: { 1: 'gift', 2: 'bell' }, color: 'c-coral', desc: 'Look at the heart word. Then find it.', adult: 'The heart sits over the part we learn by heart. Read the word, spell it aloud, then find it.' },

  { base: 'drill',      levels: [1, 2], adultOnly: true, title: 'Sound Card Drill', pic: { 1: 'kite', 2: 'whale' }, color: 'c-sand', desc: 'The learner says the sound. You mark it.', adult: 'Show the card. The learner says the sound (not the letter names). Tap Correct or Not yet.' },
  { base: 'point',      levels: [1, 2], adultOnly: true, title: 'Point to the Sound', pic: { 1: 'web', 2: 'chick' }, color: 'c-ocean', desc: 'You say a sound. The learner taps the letters.' },
  { base: 'wordread',   levels: [1, 2], adultOnly: true, title: 'Word Reading', pic: { 1: 'map', 2: 'shell' }, color: 'c-green', desc: 'The learner reads each word. You mark it.', adult: 'If the learner is stuck, point to each sound and ask for it, then blend.' },
  { base: 'dict',       levels: [1, 2], adultOnly: true, title: 'Dictation', pic: { 1: 'pen', 2: 'lock' }, color: 'c-coral', desc: 'You say a word. The learner spells it with letter tiles.', adult: 'Say the word. The learner repeats it and taps out the sounds before building it.' },
  { base: 'heartflash', levels: [1, 2], adultOnly: true, title: 'Heart Word Flash', pic: { 1: 'ring', 2: 'doll' }, color: 'c-purple', desc: 'A heart word flashes up. The learner reads it. You mark it.' },
];

/* ---------------- Level metadata ---------------- */
CONTENT.levels = [
  { n: 0, title: 'Sound awareness', grade: 'Grade R', ready: true },
  { n: 1, title: 'Single sounds and short vowels', grade: 'Grade R to 1', ready: true },
  { n: 2, title: 'Consonant digraphs', grade: 'Grade 1', ready: true },
  { n: 3, title: 'Blends', grade: 'Grade 1' },
  { n: 4, title: 'Closed syllables', grade: 'Grade 2' },
  { n: 5, title: 'Silent e', grade: 'Grade 2' },
  { n: 6, title: 'Open syllables', grade: 'Grade 2' },
  { n: 7, title: 'R-controlled vowels', grade: 'Grade 2 to 3' },
  { n: 8, title: 'Vowel teams', grade: 'Grade 2 to 3' },
  { n: 9, title: 'Diphthongs', grade: 'Grade 3' },
  { n: 10, title: 'Consonant-le', grade: 'Grade 3' },
  { n: 11, title: 'Spelling rules', grade: 'Grade 3 to 4' },
  { n: 12, title: 'Suffixes and prefixes', grade: 'Grade 3 to 4' },
  { n: 13, title: 'Longer words', grade: 'Grade 4' },
];

if (typeof module !== 'undefined') module.exports = CONTENT;
