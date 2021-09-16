import React from 'react';
import { IoLocationSharp, IoLogoTwitter, IoBusiness } from 'react-icons/io5';
import { HiLink } from 'react-icons/hi';

function UserInfoComponent({ data }) {

  const getCreationDate = () => {
    const d = new Date(data.created_at);
    return `Desde ${d.getDate()} ${d.toLocaleString('pt-BR', { month: 'short' })} ${d.getFullYear()}`;
  }

  return (
      <>
      {data ? data.status ? <p className="userInfo__errorMessage" >Usuário não encontrado.</p>
      : 
      <main className="userInfo">
          <header className="userInfo__header">
              <div className="userInfo__header__avatar">
                  <img src={data.avatar_url} alt="avatar" />
              </div>
              <div  className="userInfo__header__desc">
                  <h1 className="userInfo__header__desc__title">{data.name ? data.name : data.login}</h1>
                  <a href={data.html_url} className="userInfo__header__desc__account" target="_blank" rel="noreferrer">@{data.login}</a>
                  <p className="userInfo__header__desc__date">{getCreationDate()}</p>
              </div>
          </header>
          <section className="userInfo__infos">
              <div className="userInfo__infos__desc">
                  {data.bio ? 
                    <p className="userInfo__infos__desc__bio">{data.bio}</p>
                    :
                    <p className="userInfo__infos__desc__bio--empty">Este usuário está sem bio definida.</p>
                    }
              </div>
              <div className="userInfo__infos__reposAndFollowers">
                    <div className="userInfo__infos__reposAndFollowers__stats">
                        <h2 className="userInfo__infos__reposAndFollowers__stats__title">Repos</h2>
                        <p className="userInfo__infos__reposAndFollowers__stats__text">{data.public_repos}</p> 
                    </div>

                    <div className="userInfo__infos__reposAndFollowers__stats">
                        <h2 className="userInfo__infos__reposAndFollowers__stats__title">Followers</h2>
                        <p className="userInfo__infos__reposAndFollowers__stats__text">{data.followers}</p> 
                    </div>

                    <div className="userInfo__infos__reposAndFollowers__stats">
                        <h2 className="userInfo__infos__reposAndFollowers__stats__title">Following</h2>
                        <p className="userInfo__infos__reposAndFollowers__stats__text">{data.following}</p> 
                    </div>
              </div>
          </section>
          <section className="userInfo__address">
              <div className="userInfo__address__info">
                {data.location ? 
                <>
                    <IoLocationSharp size={22} color="#fff" />
                    <p className="userInfo__address__info__desc">{data.location}</p>
                </>
                :
                <>
                    <IoLocationSharp size={22} color="#fff" style={{ opacity: 0.5 }} />
                    <p className="userInfo__address__info__desc--empty">Não definido.</p>
                </>
                }   
              </div>
              <div className="userInfo__address__info">
                {data.blog ? 
                    <>
                        <HiLink size={22} color="#fff" />
                        <p className="userInfo__address__info__desc">{data.blog}</p>
                    </>
                    :
                    <>
                        <HiLink size={22} color="#fff" style={{ opacity: 0.5 }}/>
                        <p className="userInfo__address__info__desc--empty">Não definido.</p>
                    </>
                    } 
              </div>
              <div className="userInfo__address__info">
                {data.twitter_username ? 
                    <>
                        <IoLogoTwitter size={22} color="#fff" />
                        <p className="userInfo__address__info__desc">{data.twitter_username}</p>
                    </>
                    :
                    <>
                        <IoLogoTwitter size={22} color="#fff" style={{ opacity: 0.5 }} />
                        <p className="userInfo__address__info__desc--empty">Não definido.</p>
                    </>
                    }
              </div>
              <div className="userInfo__address__info">
                {data.company ? 
                    <>
                        <IoBusiness size={22} color="#fff" />
                        <p className="userInfo__address__info__desc">{data.company}</p>
                    </>
                    :
                    <>
                        <IoBusiness size={22} color="#fff" style={{ opacity: 0.5 }} />
                        <p className="userInfo__address__info__desc--empty">Não definido.</p>
                    </>
                }
              </div>
              
          </section>
      </main>
        :
        <div></div>}
      </>
  );
}

export default React.memo(UserInfoComponent);