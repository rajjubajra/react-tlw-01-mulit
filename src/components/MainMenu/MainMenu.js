import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';



function MainMenu() {


  const [mainMenu, setMainMenu]= useState([]);

  useEffect(()=>{
    axios.get('./assets/data.json')
    .then(res=>{
      //console.log(res.data);
      setMainMenu(res.data.MainMenu);
    })
    .catch(error=> console.log(error))
  },[]);

  return (
    <div className="grid gap-2 md:flex font-thin text-sm">
    {
        mainMenu.length > 0 &&
        mainMenu.map(item=>{
          return <div key={item.id}>
            <Link exact="true" to={item.link}
            className="px-3 py-2">
              {item.name}
            </Link>
          </div>
        })
      }
    </div>
  )
}

export default MainMenu
