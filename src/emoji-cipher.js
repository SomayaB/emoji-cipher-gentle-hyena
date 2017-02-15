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
const decode = emojiStringInput => {
     let decodedString = ""
     console.log(emojiStringInput.length)
     for(let index = 0; emojiStringInput.length; index + 2) {
        const character = decodeSingleChar(emojiStringInput[index])
        decodedString += character
     }
  return decodedString
}

const returnValue = decode('🐱😩😅')
const decodeSingleChar = emojiInput => {
  console.log(emojiInput.length)
  return reverseEmojiKey[emojiInput]
}
let returnVal= decodeSingleChar('😱')
console.log(returnValue)
//try writing a for loop inside an if else where the
//else is the break condition to for loop
