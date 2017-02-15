// import GraphemeSplitter from '../graphemeSplitter'

const emojiKey = {
a:'😄',
b:'😃',
c:'😀',
d:'😊',
e:'😉',
f:'😍',
g:'😘',
h:'😚',
i:'😗',
j:'😙',
k:'😜',
l:'😝',
m:'😛',
n:'😳',
o:'😁',
p:'😔',
q:'😌',
r:'😒',
s:'😞',
t:'😣',
u:'😢',
v:'😂',
w:'😭',
x:'😪',
y:'😥',
z:'😰',
0: '😅',
1: '😓',
2: '😩',
3: '😨',
4: '😱',
5: '🐶',
6: '🐺',
7: '🐱',
8: '🐭',
9: '🐹',
'!':'🐰',
',':'🐸',
'.':'🐯',
'&':'🐨',
'@':'🐻',
'*':'🐷',
'%':'🐽',
'(':'🐮',
')':'🐗',
'+':'🐵',
'?':'🐒'
 }

 const reverseEmojiKey = {}

for (let alphanumericChar in emojiKey){
  reverseEmojiKey[emojiKey[alphanumericChar]]=alphanumericChar
}
const decodeSingleEmoji = emojiInput => {
  console.log('this is line 57',emojiInput.length)
  return reverseEmojiKey[emojiInput] = reverseEmojiKey[emojiInput]
}

//https://github.com/orling/grapheme-splitter
const decode = emojiStringInput => {
  // const splitter = new GraphemeSplitter()
  // console.log(splitter, 'splitter');
  emojiInputArray = emojiStringInput.split('')
  console.log("emojiInputArray", emojiInputArray);
     let decodedString = ""
     console.log('input string length',emojiInputArray.length)
     for(let index = 0; index < emojiInputArray.length; index += 2) {
        const character = decodeSingleEmoji(emojiInputArray[index] + emojiInputArray[index+1])
        console.log('character',character)
        decodedString += character
     }
  return decodedString
}

const returnDecodeValue = decode('😀😱')

let returnSingleCharVal= decodeSingleEmoji('😱')
console.log('returnSingleCharVal',returnSingleCharVal)
console.log('returnDecodeValue',returnDecodeValue)
//try writing a for loop inside an if else where the
//else is the  condition that satifies the loop
