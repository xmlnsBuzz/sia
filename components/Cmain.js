import Csection from './Csection'
import Cnav from './Cnav';

class Cmain extends React.Component {
  render () {
    return (
        <main id="main" className="main row">
          <Csection />
          <Cnav />
        </main>

    )
  }
}

export default Cmain;


