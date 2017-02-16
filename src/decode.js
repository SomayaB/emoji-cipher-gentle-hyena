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

const decodeSingleEmoji = emojiInput => {
  return reverseEmojiKey[emojiInput] = reverseEmojiKey[emojiInput]
}

const decode = emojiStringInput => {
  const emojiInputArray = emojiStringInput.split('')
     let decodedString = ""
     for(let index = 0; index < emojiInputArray.length; index += 2) {
        const character = decodeSingleEmoji(emojiInputArray[index] + emojiInputArray[index+1])
        decodedString += character
     }
  return decodedString
}

module.exports = { decode }
