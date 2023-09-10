const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: [
        { name: "Valeire", email: "valerie@email.com", number: "111-111-1111" },
      ],
    },
    actions: {
      addContacts: (data) => {
        setStore({ contacts: [...getStore().contacts, data] });
      },
      updateContact: (oldData, newData) => {
		console.log(oldData, newData);
        const updatedContacts = getStore().contacts.map((contact) => {
          if (contact == oldData) {
            setStore({newData});
          } 
        });
        setStore({ contacts: updatedContacts });
      },

      findContact: (data) => {
        getStore().contacts.filter((x) => {
          return x === data;
          console.log(x);
        });
      },
      deleteContacts: (e) => {
        setStore({
          contacts: getStore().contacts.filter((x) => {
            return x != e;
          }),
        });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
