import React from "react";
import styled from "styled-components";

const OverviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding-bottom: 10px;
  .user {
    h2 {
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
      font-family: "Raleway", serif;
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

function Overview() {
  return (
    <OverviewWrapper>
      <div className="user">
        <h2>Satyam Lachhwani</h2>
        <p>@Satyam1203</p>
        <div>Developer</div>
        <div className="location raleway">From Raipur</div>
        <div className="raleway">On Github since May, 2017</div>
      </div>
      <div className="avatar">
        <img
          src="https://avatars2.githubusercontent.com/u/39918167?s=460&v=4"
          alt="Profile Photo"
        />
      </div>
    </OverviewWrapper>
  );
}

export default Overview;
