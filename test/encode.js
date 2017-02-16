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
    expect(encode( 'w07' )).to.equal( '😭😅🐱' )
  })

})
