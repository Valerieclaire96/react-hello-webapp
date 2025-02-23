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
        { name: "Valerie", email: "valerie@email.com", number: "111-111-1111" },
      ],
	  editMode: false
    },
    actions: {
      addContacts: (data) => {
        setStore({ contacts: [...getStore().contacts, data] });
      },
      // [[],date]
      // [... ,data]

      updateContact: (oldData, newData) => {
        const index = getStore().contacts.findIndex(
          (contact) => contact.name === oldData.name
        );
        if (index !== -1) {
          const updatedContact = [...getStore().contacts];
          updatedContact[index] = newData;
          setStore({ contacts: updatedContact });
        }
		setStore({editMode: false})
      },

	  setEditMode: (boolean) =>{
		setStore({editMode: boolean});
	  },

    //   findContact: (data) => {
    //     getStore().contacts.filter((x) => {
    //       return x === data;
    //       console.log(x);
    //     });
    //   },
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
