
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";

import './App.css';
import { Rating } from "./components/Rating";

export default function App() {

  const galleryImages = ['https://media.licdn.com/dms/image/C4D0BAQFJPovjM7umpQ/company-logo_200_200/0/1655928645889?e=1697673600&v=beta&t=PExgdIuW6IvqLuUnASEurYYHdNMDtdSMPBDB8-03Aoo',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zN5tzGrzq9-9YalP5GJQGSfFzVQ9r8tmY7VrR7Wcrn9xm5Ohjd4S_JZ12c1BPTauoCs&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQxE43JmQ90icGQ85qF_tcCCzaJd-kmBX6FeFVpKkyS-pHNu4nRGuQ-CDD7meKzoN6P8&usqp=CAU']
    
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={galleryImages}/>
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br/>
      <Rating/>
      <br/>
      <ListItemsForNavigation />
    </div>
  );
}
