import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
import heroImg from "../imgs/hero.png";

const GlobalStyle = createGlobalStyle`
  body{
     font-family: "Roboto", sans-serif;
    overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }
   
`;

export default GlobalStyle;

export const SpaceSection = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #f69b00;

  @media (min-width: 260px) and (max-width: 500px) {
    height: 1rem;
  }
`;
export const NavSection = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .navL {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    p {
      font-family: "Covered By Your Grace", cursive;
      font-size: 2.7rem;
      font-weight: 800;
    }
  }
  nav {
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      li {
        a {
          text-decoration: none;
          color: #000;
          font-size: 16px;
          padding-inline: 2rem;
        }
        a:hover,
        a:active {
          color: #f69b00;
          border-left: 2px solid #f69b00;
        }
      }
    }
  }
  .navR {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      padding: 1rem 3rem;
      background-color: #ffaa22;
      border: none;
      border-radius: 69px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
    img {
      border-left: 1px solid #00000070;
      padding-left: 1rem;
      cursor: pointer;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    padding: 0 1rem;
    position: relative;
    .navL {
      gap: 0.5rem;

      img {
        width: 25px;
      }
      p {
        font-size: 1.4rem;
      }
    }
    nav {
      display: none;
      position: absolute;
      top: 5rem;
      right: 0;
      width: 60%;
      padding-block: 2rem;
      z-index: 1;
      backdrop-filter: blur(20px);
      border-bottom-left-radius: 10px;
      transform: translateX(100%);
      transition: transform 4s ease;

      ul {
        flex-direction: column;
        li {
          a {
            font-size: 12px;
          }
        }
      }
    }
    nav.active {
      display: block;
      transform: translateX(0);
    }
    .navR {
      button {
        padding: 0.5rem 1rem;
        font-size: 14px;
      }
      img {
        width: 15px;
      }
    }
  }
`;
export const HeroSection = styled.div`
  background-image: url({heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-inline: 15rem;
  min-height: 60vh;
  h1 {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 34px;
    max-width: 23%;
    letter-spacing: 1;
    line-height: 1.3;

    span {
      font-weight: 700;
      color: #f69b00;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    background:
      linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1)), url(${heroImg});
    padding-inline: 3rem;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 20vh;
    h1 {
      max-width: 70%;
      font-size: 1.6rem;
    }
  }
`;
export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1250px;
  margin: 5rem auto;
  position: relative;
  .imgSide {
    span {
      position: absolute;
    }
    .bg1 {
      top: -50px;
      right: -350px;
    }
    .bg2 {
      top: 150px;
      left: -350px;
    }
  }
  .textSide {
    h3 {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 700;
      span {
        color: #b5b5b5;
      }
    }
    h1 {
      text-transform: capitalize;
      font-weight: 700;
      font-size: 3rem;
      color: #f69b00;
    }
    p {
      font-size: 1.4rem;

      letter-spacing: 5%;
      line-height: 24px;

      span {
        font-weight: 800;
        text-transform: capitalize;
      }
    }
    button {
      margin-top: 1rem;

      background-color: #f69b00;
      color: #fff;
      padding: 1.5rem 3rem;
      font-size: 1.6rem;
      border: none;
      border-radius: 10px;
      text-transform: uppercase;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    flex-direction: column;
    margin: 2rem auto;
    gap: 2rem;

    .imgSide {
      img {
        width: 100%;
      }
    }
    .textSide {
      padding: 1rem;
      h3 {
        font-size: 1rem;
      }
      h1 {
        font-size: 1.7rem;
        max-width: 65%;
      }
      p {
        font-size: 1rem;
      }
      button {
        font-size: 1.1rem;

        padding: 0.8rem 1.5rem;
      }
    }
  }
`;

export const ProductSection = styled.div`
  background-color: #fffbf5;
  padding: 15rem;
  max-width: 1300px;
  margin: 1rem auto;
  .head {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 1rem;
    .headL {
      line-height: 1;
      h5 {
        font-size: 15px;
        text-transform: uppercase;
        span {
          color: #b5b5b5;
        }
      }
      h1 {
        font-size: 30px;
        color: #f69b00;
        text-transform: capitalize;
      }
    }
    .headR {
      display: flex;
      align-items: center;
      gap: 4rem;
      button {
        border: none;
        background: transparent;
        font-size: 17px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
  .main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: #ffffffa2;
      width: 250px;
      box-shadow: 0 1px 20px #b5b5b565;

      p {
        font-size: 18px;
      }
    }
    div:nth-child(2) {
      border: 2px solid #f69b00;
      p {
        color: #f69b00;
        font-weight: 500;
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    padding: 1rem;

    .head {
      flex-direction: column;
      gap: 1rem;
      align-items: start;

      .headL {
        h5 {
          font-size: 12px;
        }
        h1 {
          font-size: 1.7rem;
        }
      }
      .headR {
        gap: 0.5rem;

        button {
          font-size: 12px;
        }
      }
    }
  }
  .main {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 100vw;
    margin: 2rem auto;

    div {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
`;
export const WhySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 5rem auto;
  gap: 5rem;

  .textSide {
    h1 {
      font-size: 15px;
      text-transform: uppercase;
      span {
        color: #b5b5b5;
      }
    }
    .lists {
      width: 100%;
      .list-item {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 100%;
        }
        p {
          color: #fff;
          font-size: 16px;
          width: 45rem;
          padding: 0.4rem;
          text-transform: capitalize;
          span {
            padding-inline: 0.5rem;
          }
        }
      }
      .list-item:first-child {
        img {
          border: 1px solid #f69b00;
          padding: 1.2rem 1.2rem;
        }
        p {
          background: linear-gradient(
            to right,
            #f69b00 0%,
            #f69b00 20%,
            #fff 100%
          );
        }
      }
      .list-item:nth-child(2) {
        img {
          border: 1px solid #e48245;
          padding: 1rem 1.2rem;
        }
        p {
          background: linear-gradient(
            to right,
            #e48245 0%,
            #e48245 20%,
            #fff 100%
          );
        }
      }
      .list-item:nth-child(3) {
        img {
          border: 1px solid #764531;
          padding: 1rem 1.4rem;
        }
        p {
          background: linear-gradient(
            to right,
            #764531 0%,
            #764531 20%,
            #fff 100%
          );
        }
      }
      .list-item:nth-child(4) {
        img {
          border: 1px solid #5a0d11;
          padding: 1.2rem 1.2rem;
        }
        p {
          background: linear-gradient(
            to right,
            #5a0d11 0%,
            #5a0d11 20%,
            #fff 100%
          );
        }
      }
    }
  }
  .imgSide {
    img {
      width: 100%;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    flex-direction: column;
    margin: 2rem auto;
    .textSide {
      width: 95%;
      padding: 2rem;
      h1 {
        font-size: 13px;
      }
      .lists {
        .list-item {
          width: 100%;
          img {
          }
          p {
            width: 90%;
            font-size: 13px;
            span {
              padding-inline: 0.2rem;
            }
          }
        }
        .list-item:first-child {
          img {
            border: 1px solid #f69b00;
            padding: 1.2rem 1.2rem;
          }
          p {
            background: linear-gradient(
              to right,
              #f69b00 0%,
              #f69b00 60%,
              #fff 100%
            );
          }
        }
        .list-item:nth-child(2) {
          img {
            border: 1px solid #e48245;
            padding: 1rem 1.2rem;
          }
          p {
            background: linear-gradient(
              to right,
              #e48245 0%,
              #e48245 60%,
              #fff 100%
            );
          }
        }
        .list-item:nth-child(3) {
          img {
            border: 1px solid #764531;
            padding: 1rem 1.4rem;
          }
          p {
            background: linear-gradient(
              to right,
              #764531 0%,
              #764531 60%,
              #fff 100%
            );
          }
        }
        .list-item:nth-child(4) {
          img {
            border: 1px solid #5a0d11;
            padding: 1.2rem 1.2rem;
          }
          p {
            background: linear-gradient(
              to right,
              #5a0d11 0%,
              #5a0d11 60%,
              #fff 100%
            );
          }
        }
      }
    }
  }
`;
export const TrustSection = styled.div`
  display: flex;
  background-color: #391100;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
  margin: 2rem auto;
  .textSide {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    h1 {
      font-size: 40px;
      text-transform: capitalize;
      width: 80%;
      font-weight: 600;
    }
    .trustGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .trustCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 26px;
          text-transform: capitalize;
          width: 60%;
          text-align: center;
        }
      }
    }
  }
  .imgSide {
    img {
      width: 100%;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    flex-direction: column;
    padding-block: 2rem;
    .textSide {
      h1 {
        font-size: 15px;
      }
      .trustGrid {
        row-gap: 2rem;
        .trustCard {
          img {
            width: 50%;
          }
          p {
            font-size: 12px;
          }
        }
      }
    }
    .imgSide {
      display: flex;

      align-items: center;
      justify-content: center;
      img {
        width: 90%;
      }
    }
  }
`;
export const TouchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  max-width: 1050px;
  margin: 5rem auto;
  .textSide {
    max-width: 500px;

    .title {
      line-height: 1rem;
      h1 {
        font-size: 33px;
        color: #f69b00;
        font-weight: 500;
      }
      p {
        font-size: 16px;
        line-height: 2;
      }
    }
    .contact {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .cl {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icon {
        border-radius: 100%;
        background-color: #f69b001a;
        padding: 1rem;
      }
      p {
        font-size: 16px;
      }
    }
  }
  .form-container {
    width: 100%;
    max-width: 500px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    form {
      display: flex;
      flex-direction: column;
      gap: 18px;
      .row {
        display: flex;
        gap: 14px;
        .input-box {
          flex: 1;
          position: relative;
          div {
            background-color: #fff;
            position: absolute;
            top: -7px;
            left: 20px;
          }
          label {
            padding: 0 8px;
            color: #f5a000;
            font-size: 14px;
            font-weight: bold;
          }
          input {
            width: 90%;
            padding: 18px 15px;
            border: 1px solid #cfcfcf;
            outline: none;
            background: transparent;
          }
          input::placeholder {
            font-size: 13px;
            opacity: 50%;
          }
        }
      }
      .input-box {
        flex: 1;
        position: relative;
        div {
          background-color: #fff;
          position: absolute;
          top: -7px;
          left: 20px;
        }
        label {
          padding: 0 8px;
          color: #f5a000;
          font-size: 14px;
          font-weight: bold;
        }
        input {
          width: 95%;
          padding: 18px 15px;
          border: 1px solid #cfcfcf;
          outline: none;
          background: transparent;
        }
        input::placeholder {
          font-size: 13px;
          opacity: 50%;
        }
        textarea {
          padding: 18px 15px;

          width: 95%;
          height: 15rem;
          outline: none;
          border: 1px solid #cfcfcf;
          background: transparent;
        }
        textarea::placeholder {
          font-size: 13px;

          opacity: 50%;
        }
      }

      button {
        font-size: 13px;
        color: #fff;
        background-color: #f69b00;
        height: 4rem;
        border: none;
        font-weight: 500;
      }
      button:hover {
        border: 1px solid #f69b00;
        background-color: #fff;
        color: #f69b00;
      }
    }
  }
`;
export const FooterSection = styled.footer``;
