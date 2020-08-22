import React from "react";
import styled from "styled-components";

const Repository = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  a{
    text-decoration: none;
    color: var(--repoTitleColor);
  }
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  .repo_details {
    display: flex;
    align-items: center;
    > div {
      margin-left: 16px;
      .fas {
        font-size: 14px;
        margin-left: 3px;
      }
      .fa-star {
        color: #f4c724;
      }
    }
  }
  .name {
    font-size: 20px;
  }
`;

const Languages = styled.div`
  margin: 6px 0;
  display: flex;
  flex-wrap: wrap;
  .language {
    display: flex;
    align-items: center;
    margin-right: 12px;
    .indicator {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      border-radius: 50%;
    }
  }
`;

function Repo({
  forks,
  languages,
  stars,
  homepageUrl,
  name,
  description,
  url,
}) {
  return (
    <>
      <Repository>
        <div className="repo_details">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="name">{name}</div>
          </a>
          {stars ? (
            <div>
              {stars} <i className="fas fa-star"></i>
            </div>
          ) : null}
          {forks ? (
            <div>
              {forks} <i className="fas fa-code-branch"></i>
            </div>
          ) : null}
        </div>
        {homepageUrl ? (
          <div>
            <a href={homepageUrl} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
            <span className="material-icons">arrow_right_alt</span>
          </div>
        ) : null}
      </Repository>
      <Languages>
        {languages.edges.map((lang, i) => (
          <div className="language" key={i}>
            <div className="indicator" style={{ background: lang.node.color }}></div>
            {lang.node.name}
          </div>
        ))}
      </Languages>
      <p>{description}</p>
    </>
  );
}

export default Repo;
