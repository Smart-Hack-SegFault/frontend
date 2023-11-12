import styled from 'styled-components'

<<<<<<< HEAD
const Wrapper = styled.div``
=======
const Wrapper = styled.div`
  padding: 8%;
  display: grid;

  grid-template-areas:
    'a b c'
    'd d e'
    'f g h';

  height: auto;

  grid-template-columns: 30% 30% 40%;
  grid-template-rows: 1fr 1fr 1fr;

  .charts-1 {
    grid-area: a;
  }

  .charts-2 {
    grid-area: b;
  }

  .head-map {
    grid-area: d;
  }
  /* 
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  .r-charts-1 {
    grid-area: c;
    margin-left: 50%;
  }

  .r-charts-2 {
    grid-area: e;
    margin-left: 50%;
  }

  .r-charts-3 {
    grid-area: h;
    margin-left: 50%;
  }
`
>>>>>>> 555b5af (Best my father if i dont hate react)

export default Wrapper
