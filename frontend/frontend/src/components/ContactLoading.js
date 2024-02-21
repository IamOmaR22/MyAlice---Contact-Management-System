import React from "react";

function ContactLoading(Component) {
  return function ContactLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: '25px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}

export default ContactLoading;