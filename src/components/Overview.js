import React from "react";
import styled from "styled-components";

const OverviewWrapper = styled.div`
display: flex;
justify-content: space-between;
  text-align: left;
  .user{
      p{
          color: var(--lightgrey);
          font-size: 12px;
      }
      div{
        margin: 10px 0;
      }
  }
  .avatar{
    img{
      width: 100px;
    }
  }
  border-bottom: 1px solid var(--lightgrey)
`;

function Overview() {
  return (
    <OverviewWrapper>
      <div className="user">
        <h2>Satyam</h2>
        <p>@Satyam1203</p>
        <div>Developer</div>
        <div>On Github since 2017</div>
      </div>
      <div className='avatar'>
          <img src="https://avatars2.githubusercontent.com/u/39918167?s=460&v=4" alt='Profile Photo' />
      </div>
    </OverviewWrapper>
  );
}

export default Overview;
