/*use strict */
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
const decode = (emojiInput) => {
    console.log(emojiInput)

}
decode('abcde')
