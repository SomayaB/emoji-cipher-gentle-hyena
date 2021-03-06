import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { decode } from '../src/decode'

chai.use( chaiChange )

describe('decode', () => {
  'use strict'

  it('exists', () => {
    expect( decode ).to.be.a( 'function' )
  })

  it('decodes emoji string to alphanumeric characters', () => {
    expect(decode( '😭😅🐱' )).to.equal( 'w07' )
  })

})
