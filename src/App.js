import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        name = "Bèbère"
        avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnrDctsmMvT88kvmBP__2xKc7QR3nZ9E_YGaDW9G2dcsfM9hY5w"
        online = {false}
      />
         
      <Contact
        name = "Zoubida"
        avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41DbG1qIxeHpkPxoLz3NJYCaHCwMkKb0mkkmS0wjV_nAUQobv"
        online = {true}
      />

      <Contact
        name = "Alfonsette"
        avatar = "https://usercontent.village.co/00ef6554-7280-4aef-bb13-8b0fda0bc7b9-profilePic.jpg"
        online = {false}
      />

    </div>
  );
}

export default App;
