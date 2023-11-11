import styled from 'styled-components'

const Register = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .form-container {
    position: relative;
    padding: 5%;
    height: 90%;
    width: 30%;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h1 {
      font-size: 3.2rem;
    }

    input {
      font-size: 1rem;
    }

    input:focus {
      padding-left: 2.2rem;
    }

    input:focus::placeholder {
      color: var(--white);
    }

    form {
      height: 100%;
    }

    .btn-container {
      position: absolute;
      bottom: 2rem;

      .btn {
        width: 8rem;
        height: 3rem;
        font-size: 1.3rem;
        font-weight: 500;
        background-color: var(--pink2);
        color: var(--black);
      }

      .link-container {
        padding-top: 1rem;
        a {
          color: var(--pink2);
        }
      }
    }
  }
`

export default Register
