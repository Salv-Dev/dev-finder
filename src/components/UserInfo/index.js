import React from 'react';

function UserInfoComponent() {
  return (
      <main className="userInfo">
          <header className="userInfo__header">
              <div className="userInfo__header__avatar"></div>
              <div  className="userInfo__header__desc"></div>
          </header>
          <section className="userInfo__infos"></section>
          <section className="userInfo__address"></section>
      </main>
  );
}

export default UserInfoComponent;