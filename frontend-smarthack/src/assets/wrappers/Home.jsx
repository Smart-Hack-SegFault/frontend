import styled from 'styled-components'

const Wrapper = styled.div`
  .home-left {
    h1 {
      font-size: 4rem;
      color: var(--violet);
      font-weight: bold;

      span {
        font-size: 3rem;
        color: black;
        line-height: 1;
      }
    }
  }

  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8%;
  }

  .home-right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-left {
    width: 50%;
  }
`

export default Wrapper
