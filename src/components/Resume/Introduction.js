import React, { useContext } from "react";
import styled from "styled-components";
import HTMLReactParser from "html-react-parser";

import AddGithubLinksOnBio from "../../utils/AddGithubLinksOnBio";
import { ConfigContext } from "./";

const OverviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding-bottom: 10px;
  .user {
    h1 {
      font-family: "Noticia Text", serif;
      font-style: italic;
      color: #333;
    }
    p {
      color: var(--lightgrey);
      font-size: 12px;
      margin-top: -2px;
    }
    div {
      line-height: 24px;
    }
    .location {
      font-size: 14px;
    }
  }
  .avatar {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      object-fit: cover;
    }
  }
  border-bottom: 1px solid var(--lightgrey);
`;

function Overview({ name, username, bio, avatarUrl, location, createdAt }) {
  const { config } = useContext(ConfigContext);
  const date = new Date(createdAt).toUTCString().slice(8, 16);

  return (
    <OverviewWrapper>
      <div className="user">
        <h1>{name}</h1>
        <p>@{username}</p>
        <div>{config.intro.bio && bio && HTMLReactParser(AddGithubLinksOnBio(bio))}</div>
        {config.intro.location && location && (
          <div className="location">
            <i className="fas fa-map-marker-alt"></i>&nbsp; {location}
          </div>
        )}
        {config.intro.joinedYear && <div>On Github since {date}</div>}
      </div>
      {config.intro.avatar && (
        <div className="avatar">
          <img src={avatarUrl} alt="Github Profile Avatar" />
        </div>
      )}
    </OverviewWrapper>
  );
}

export default Overview;
