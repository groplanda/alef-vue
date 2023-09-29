import { defineStore } from 'pinia'
import { uid } from 'uid';

export const usePersonStore = defineStore('person', {
    state: () => {
      return {
        persons: [],
        limit: 5
      };
    },
    actions: {
        addPerson() {
            this.persons.push({
                id: uid(),
                name: '',
                age: '',
                saved: false
            });
        },
        deletePerson(id) {
            this.persons = this.persons.filter(person => person.id !== id);
        },
        savePersons() {
            this.persons = this.persons.map(person => {
                person.saved = true;
                return person;
            });
        },
        updatePerson(person) {
            this.persons = this.persons.map(item => {
                return item.id === person.id ? {...item, ...person } : item;
            });
        }
    },
    getters: {
       getPersons: (state) => state.persons,
       createPerson: (state) => state.persons.length < state.limit,
       getSavedPersons: (state) => state.persons.filter(person => person.saved)
    },
});
