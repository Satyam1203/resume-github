import styled from "styled-components";

const HomeDesign = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;
  margin-top: 120px;
  h2 {
    font-size: 36px;
    color: #333;
    font-family: "Raleway", sans serif;
    font-weight: 600;
    @media (max-width: 675px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 1.1em;
    margin: 1rem 0 4rem 0;
    color: var(--color);

    @media (max-width: 675px) {
      margin-bottom: 2rem;
    }
  }
  .form {
    width: 600px;
    min-height: 450px;
    padding: 50px;
    text-align: left;
    @media (max-width: 1024px) {
      box-shadow: -1px -1px 3px 2px var(--lightgrey);
    }
    @media (max-width: 768px) {
      width: 80%;
      padding: 30px;
    }
    @media (max-width: 675px) {
      box-shadow: none;
    }
    @media (max-width: 374px) {
      padding: 0;
    }
    label {
      line-height: 32px;
    }
  }
  img {
    width: 450px;
    @media (max-width: 1024px) {
      width: 375px;
      position: absolute;
      top: 40%;
      left: 50%;
    }
    @media (max-width: 675px) {
      display: none;
    }
  }
  button {
    padding: 8px 32px;
    margin: 1rem 0;
    cursor: pointer;
    outline: 0;
    border: 0;
    font-size: 22px;
    background: var(--color);
    color: #fff;
    border-radius: 2rem;
    :hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
  @media (max-width: 675px) {
    margin-top: 25px;
  }
`;

const InputBox = styled.div`
  position: relative;
  .fab {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 22px;
    color: #333;
    left: 8px;
  }
  input {
    padding: 12px;
    padding-left: 32px;
    border-radius: 8px;
    border: 2px solid grey;
    outline: 0;
    width: 250px;
    font-family: "Quicksand", sans serif;
    font-size: 16px;
  }
`;

export {HomeDesign, InputBox};