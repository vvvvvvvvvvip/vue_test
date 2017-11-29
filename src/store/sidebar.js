/**
 * Created by cy183 on 2017/11/10.
 */
const SHOW_SIDEBAR = true
const HIDE_SIDEBAR = false

const sideBar = {
    state: {
        isShow: false
    },
    mutations: {
        showBar (state) {
            state.isShow = SHOW_SIDEBAR
        },
        hideBar (state) {
            state.isShow = HIDE_SIDEBAR
        }
    },
    actions: {
        showSideBar ({commit}) {
            commit('showBar')
        },
        hideSideBar ({commit}) {
            commit('hideBar')
        }
    },
    getters: {
        isShowMethod () {
            return this.state.isShow
        }
    }
}
export default sideBar



// WEBPACK FOOTER //
// ./src/store/modules/sidebar.js