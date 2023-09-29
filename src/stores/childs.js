import { defineStore } from 'pinia'
import { uid } from 'uid';

export const useChildStore = defineStore('childs', {
    state: () => {
      return {
        user: {
            name: '',
            age: ''
        },
        childs: [],
        limit: 5
      };
    },
    actions: {
        addChild() {
            this.childs.push({
                id: uid(),
                name: '',
                age: '',
                saved: false
            });
        },
        deleteChild(id) {
            this.childs = this.childs.filter(child => child.id !== id);
        },
        saveChilds() {
            this.childs = this.childs.map(child => {
                child.saved = true;
                return child;
            });
        },
        updateChild(child) {
            this.childs = this.childs.map(item => {
                return item.id === child.id ? {...item, ...child } : item;
            });
        },
        updateUser(user) {
            this.user = user;
        }
    },
    getters: {
       getChilds: (state) => state.childs,
       createChilds: (state) => state.childs.length < state.limit,
       getSavedChilds: (state) => state.childs.filter(child => child.saved),
       getUser: (state) => state.user
    },
});
