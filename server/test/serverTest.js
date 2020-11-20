var assert = require('assert')

const { Sequelize } = require('sequelize');

describe('App', ()=>{
  // after((done) => {
  //   Sequelize.close()
  //     .then(() => done())
  //     .catch((err) => done(err));
  // })

  beforeEach( () => {
    const app = require('../server')
 } ),

 afterEach( ( done ) => {

    // UPDATE DON'T CLOSE THE SERVER

    delete require.cache[require.resolve( '../server' )]
    done()

    //server.close( () => {
    //   delete require.cache[require.resolve( './server' )]
    //   done()
    //})      
 } ),

  it('hello should return hello world', ()=>{
    let result = app.hello()
    assert.strictEqual(result, 'hello world')
  })
})

// app.db.close()

// console.log('func = ',app.hello())