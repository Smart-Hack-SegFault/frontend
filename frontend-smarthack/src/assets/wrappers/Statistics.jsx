import styled from 'styled-components'

const Wrapper = styled.div`
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

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .r-charts-1 {
    grid-area: c;
  }

  .r-charts-2 {
    grid-area: e;
  }

  .r-charts-3 {
    grid-area: h;
  }
`

export default Wrapper
