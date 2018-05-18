import test from 'ava'
import {expect} from 'chai'
import Vue from '../src/instance/vue-1.0'
import Vue2 from '../src/instance/vue-2.0'

test('Vue', t => {
  const v = new Vue({
    data: {
      a: 1,
      b: {
        c: 3
      },
      c: 1
    }
  })
  v.$watch('a', (newVal, oldVal) => {
    expect(typeof newVal === 'number').to.eql(true)
    expect(typeof oldVal === 'number').to.eql(true)
    expect(newVal !== oldVal).to.eql(true)
  })
  v.$watch('c', (newVal, oldVal) => {
    expect(typeof newVal === 'number').to.eql(true)
    expect(typeof oldVal === 'number').to.eql(true)
    expect(newVal !== oldVal).to.eql(true)
  })

  v.a = 4

  v.a = 5

  v.a = 6

  v.c = 1
  v.c = 2
  v.c = 3
  v.c = 4
})

test('Vue2', t => {
  var demo = new Vue2({
    el: '#demo',
    data: {
      text: 'before'
    },
    render () {
      return this.__h__('div', {}, [
        this.__h__('span', {}, [this.__toString__(this.text)])
      ])
    }
  })
  demo.text = 'after'
})
