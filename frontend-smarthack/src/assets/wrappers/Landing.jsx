import styled from 'styled-components'

const Wrapper = styled.section`
  align-items: center;
  display: grid;
  height: 100vh;
  grid-template-columns: 1.3fr 1fr;
  padding: 8%;
  color: var(--pink3);

  /* .landing-content {
    display: flex;
    flex-direction: column;
    .btn-container {
      width: 30%;
      .btn {
        padding: 5%;
        margin: 1rem 1rem 0 0;
        font-size: 1.15rem;
      }
    }
  } */

  h1 {
    font-size: 7.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    font-style: italic;
    color: gray;
  }

  /* .logo {
    position: fixed;
    top: var(--padding);
    left: var(--padding);
    width: 100px;
    height: 100px;
  } */

  /* @media (max-width: 992px) {
    grid-template-columns: 1fr;
    .landing-image {
      display: none;
    }
  } */
`

export default Wrapper
