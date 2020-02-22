import Vue from 'vue'
import * as types from './agents_types'

const state = {
  agents: []
}

const getters = {
  agents: (state) => {
    return state.agents
  }
}

const mutations = {
  setAgents (state, payload) {
    state.agents = payload
  }
}

const actions = {
  [types.FETCH_AGENTS] ({commit, rootGetters, dispatch}) {
    return new Promise((resolve, reject) => {
      const data = {
        urlCommand: '/agents',
        options: {
          params: {
            teamId: rootGetters.team.id
          }
        }
      }
      dispatch('AUTH_GET', data).then(
        response => {
          commit('setAgents', response)
          resolve(response)
        },
        error => {
          reject(error)
        }
      )
    })
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}