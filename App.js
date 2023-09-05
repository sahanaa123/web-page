import logo from './wild.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>WILD LIFE</h1>
          <div class="container-fluid p-5 bg-info text-dark text-center">
            <p class="mt-3">Wildlife refers to all the wild animals and plants that inhabit natural ecosystems and have not been domesticated by humans. This includes a vast array of species, from mammals and birds to reptiles, amphibians, insects, and a wide variety of plant life. Wildlife plays a crucial role in maintaining the balance of ecosystems and contributes to the overall health of our planet. Here are some key points about wildlife:
            </p>
        </div>
        <div class="container mt-3 text-success">
            <div class="row">
                <div class="col mt-3">
                    <h2>WILD ANIMALS</h2>
                    <p>
                    Wild animals are a diverse and fascinating group of creatures that inhabit our planet's forests, oceans, deserts, and skies. They come in all shapes and sizes, from the majestic African elephant to the agile cheetah, from the soaring bald eagle to the elusive snow leopard.
                    </p>
                </div>
            <div class="col mt-3">
                <h2>WILD PLANTS</h2>
                <p>
                Biodiversity: Wild plants contribute to biodiversity by providing habitat and food for a variety of wildlife, including insects, birds, and mammals. They form the basis of many ecosystems and help support the entire food web.
                </p>
                <div class="col mt-3">
                <h2>WILD TREES</h2>
                <p>Endangered Species: Some species, such as the giant panda, Bengal tiger, and black rhinoceros, are critically endangered, and intensive conservation efforts are underway to prevent their extinctionEthical Considerations: Ethical discussions around wildlife often revolve around issues like animal welfare..
                </p>
            
                </div>
            
              </div>

            </div>


          </div>

        </p>
        <ul>
          <li href='#'>home</li> 
          <li href='#'>contact</li>
          <li href='#'>about</li>
        </ul>
        
        <p class="conatiner p-4 mt-2 text-dark bg-light"><strong>Tables Using Bootstrap</strong></p>
        <div class="conatiner mt-5">
            <table class="table table-info table-hover table-striped-columns">
              <table margin='solid'></table>
                <thead>
                  <tr>
                    <th scope="col">SI NO</th>
                    <th scope="col">wild animals</th>
                    <th scope="col">wild plants</th>
                    <th scope="col">wild trees</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Use</th>
                    <td>Diverse Species</td>
                    <td>Camouflage</td>
                    <td>Biodiversity</td>
                  </tr>
                </tbody>
              </table>
              {
                alert("Great App!")
              }
                <button onClick={App}>click me</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react by sahana
        </a>
      </header>
    </div>
 );
}

export default App;
