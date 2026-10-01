import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContact from "./GeneralContact";
import AddContact from "./AddContact";

const ContactIndex = () => {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Ben Parker",
      phone: 9876544231,
      email: "ben@gmail.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Peter Parker",
      phone: 568457579,
      email: "peter@gmail.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "May Parker",
      phone: 686785899,
      email: "may@gmail.com",
      isFavorite: true,
    },
  ]);

  const handleFavorite = (contact) => {
    console.log("Logged");
    console.log(contact);
    setContactList((prevState) => {
      return prevState.map((obj) =>
        obj.id === contact.id ? { ...obj, isFavorite: !obj.isFavorite } : obj,
      );
    });
  };

  const handleDelete = (contactId) => {
    console.log("Logged");
    console.log(contactId);
    setContactList((prevState) => {
      return prevState.filter((x) => x.id != contactId);
    });
  };

  const handleEdit = (contact) => {
    console.log("Logged");
    console.log(contact);
  };

  return (
    <div className="container">
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6">ADD CONTACT</div>
          <div className="col-6">REMOVE CONTACT</div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <AddContact></AddContact>
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">FAVORITE CONTACT</div>
          <FavoriteContacts
            onClickFavorite={handleFavorite}
            onClickDelete={handleDelete}
            onClickEdit={handleEdit}
            contacts={contactList.filter((x) => x.isFavorite == true)}
          ></FavoriteContacts>
        </div>
        <div className="py-2">
          <div className="col-12">
            <GeneralContact
              onClickFavorite={handleFavorite}
              onClickDelete={handleDelete}
              onClickEdit={handleEdit}
              contacts={contactList.filter((x) => x.isFavorite === false)}
            ></GeneralContact>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactIndex;
