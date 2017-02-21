import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { encode } from '../src/encode'

chai.use( chaiChange )

describe('encode', () => {
  'use strict'

  it('exists', () => {
    expect( encode ).to.be.a( 'function' )
  })

  it('encodes alphanumeric characters into emoji string ', () => {
    expect(encode( 'w07' )).to.equal( '😭 😅 🐱 ' )
  })


  it('outputs the corresponding emoji string when the input has spaces', () => {
    expect(encode('i'+' '+'love'+' '+'you')).to.deep.equal('😗   😝 😁 😂 😉   😥 😁 😢 ')

  })
})
