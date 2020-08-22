import React from "react";
import styled from "styled-components";

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
    .raleway {
      // font-family: "Raleway", serif;
      font-weight: 600;
    }
  }
  .avatar {
    img {
      width: 100px;
      object-fit: cover;
    }
  }
  border-bottom: 1px solid var(--lightgrey);
`;

function Overview({ name, username, bio, avatarUrl, location, createdAt }) {
  const date = new Date(createdAt).toUTCString().slice(8, 16);
  return (
    <OverviewWrapper>
      <div className="user">
        <h1>{name}</h1>
        <p>@{username}</p>
        <div>{bio}</div>
        {location ? <div className="location raleway"><i className="fas fa-map-marker-alt"></i>&nbsp; {location}</div> : null}
        <div className="raleway">On Github since {date}</div>
      </div>
      <div className="avatar">
        <img src={avatarUrl} alt="Github Profile Avatar" />
      </div>
    </OverviewWrapper>
  );
}

export default Overview;
