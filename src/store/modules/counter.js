/**
 * Created by chan on 2017/8/8.
 * @des：权限信息
 */

import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  account: 0,
}

// getters
const getters = {
  account: state => state.account,
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.ACCOUNT_ADD](state, val){
    state.account = state.account + val;
  },
  [types.ACCOUNT_REDUCTIVE](state, val){
    state.account = state.account - val;
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
