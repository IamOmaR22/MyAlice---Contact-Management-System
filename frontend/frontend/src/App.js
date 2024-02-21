import React, { useEffect, useState } from "react";
import './App.css';
import Contacts from "./components/Contacts";
import ContactLoadingComponent from "./components/ContactLoading";

function App() {
  const ContactLoading = ContactLoadingComponent(Contacts);
  const [appState, setAppState] = useState({
    loading: false,
    contacts: null,
    error: null,
  });
  
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "http://localhost:8000/api/";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((contacts) => {
        setAppState({ loading: false, contacts: contacts, error: null });
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
        setAppState({ loading: false, contacts: [], error: "Error fetching contacts" });
      });
  }, []); // Empty dependency array

  if (appState.loading) {
    return <div>Loading...</div>;
  }

  if (appState.error) {
    return <div>Error: {appState.error}</div>;
  }

  return (
    <div className="App">
      <h1>Latest Contacts</h1>
      {appState.contacts && appState.contacts.length > 0 ? (
        <Contacts contacts={appState.contacts} />
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
}

export default App;
