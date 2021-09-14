import React from 'react';
import { IoLocationSharp, IoLogoTwitter, IoBusiness } from 'react-icons/io5';
import { HiLink } from 'react-icons/hi';

function UserInfoComponent() {
  return (
      <main className="userInfo">
          <header className="userInfo__header">
              <div className="userInfo__header__avatar">
                  <img src="https://www.kindpng.com/picc/m/694-6943951_octocat-github-logo-transparent-github-for-government-octocat.png" alt="avatar" />
              </div>
              <div  className="userInfo__header__desc">
                  <h1 className="userInfo__header__desc__title">The Octocat</h1>
                  <a href="#" className="userInfo__header__desc__account">@octocat</a>
                  <p className="userInfo__header__desc__date">Desde 25 Jan 2011</p>
              </div>
          </header>
          <section className="userInfo__infos">
              <div className="userInfo__infos__desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit nostrum quod cupiditate. Magni dolorum ab natus aliquam optio nemo nam, eos maxime non veniam quis sunt voluptas voluptates corporis.</p>
              </div>
              <div className="userInfo__infos__reposAndFollowers">
                    <div className="userInfo__infos__reposAndFollowers__stats">
                        <h2 className="userInfo__infos__reposAndFollowers__stats__title">Repos</h2>
                        <p className="userInfo__infos__reposAndFollowers__stats__text">8</p> 
                    </div>

                    <div className="userInfo__infos__reposAndFollowers__stats">
                        <h2 className="userInfo__infos__reposAndFollowers__stats__title">Followers</h2>
                        <p className="userInfo__infos__reposAndFollowers__stats__text">3938</p> 
                    </div>

                    <div className="userInfo__infos__reposAndFollowers__stats">
                        <h2 className="userInfo__infos__reposAndFollowers__stats__title">Following</h2>
                        <p className="userInfo__infos__reposAndFollowers__stats__text">9</p> 
                    </div>
              </div>
          </section>
          <section className="userInfo__address">
              <div className="userInfo__address__info">
                <IoLocationSharp size={22} color="#fff" />
                <p className="userInfo__address__info__desc">San Francisco</p>
              </div>
              <div className="userInfo__address__info">
                <HiLink size={22} color="#fff" />
                <p className="userInfo__address__info__desc">https://github.com/octocat</p>
              </div>
              <div className="userInfo__address__info">
                <IoLogoTwitter size={22} color="#fff" />
                <p className="userInfo__address__info__desc">Não disponível</p>
              </div>
              <div className="userInfo__address__info">
                <IoBusiness size={22} color="#fff" />
                <p className="userInfo__address__info__desc">@github</p>
              </div>
              
          </section>
      </main>
  );
}

export default UserInfoComponent;