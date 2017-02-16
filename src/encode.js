// import { reverseEmojiKey, emojiKey } from './emojiKey'

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

for (let alphanumericChar in emojiKey) {
  reverseEmojiKey[emojiKey[alphanumericChar]] = alphanumericChar
}


const encodeSingleAlphanumericChar = alphanumericCharInput => {
  return emojiKey[alphanumericCharInput] = emojiKey[alphanumericCharInput]
}

let returnSingleEmoji = encodeSingleAlphanumericChar('h')
console.log('returnSingleEmoji',returnSingleEmoji )


const encode = alphanumericCharStringInput => {
  const alphanumericCharInputArray = alphanumericCharStringInput
     let encodedString = ""
     for(let index = 0; index < alphanumericCharInputArray.length; index ++ ) {
        const emoji = encodeSingleAlphanumericChar(alphanumericCharInputArray[index])
        encodedString += `${emoji} `
     }
  return encodedString
}

let returnStringEmoji = encode('hjw')
console.log('returnStringEmoji',returnStringEmoji )

module.exports = { encode }
