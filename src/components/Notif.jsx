import { useState } from "react"


export default function Notif ({notif,setNotif}){

    // const showMenu = () =>{
    //     setDisplay(true)
    // }
    // const afficher = ()=> {
    //   setDisplay (false)
    // }
    const displayNotifications = () => {
        setNotif(false)
      }

    return (
            <div>
                <div className={notif ? "notif__container show__notif"  : "notif__container"}>
                    <div className="notif__banner__notif" onMouseLeave={displayNotifications}>
                    <div className="notif__banner">
                        <div className="notif__banner__left">
                            <div className="notif__banner__left__box">
                                <img src="https://i.ytimg.com/vi/gmH8DgvO7Kc/maxresdefault.jpg" alt="" />
                            </div>
                        </div>
                        <div className="notif__banner__right">
                            <p>Reprenez la lecture</p>
                            <p className="name__movie"> Django</p>
                            <p className="times"> Aujourd'hui</p>
                        </div>
                    </div>
                    <div className="notif__banner">
                        <div className="notif__banner__left">
                            <div className="notif__banner__left__box">
                                <img src="https://i.ytimg.com/vi/gmH8DgvO7Kc/maxresdefault.jpg" alt="" />
                            </div>
                        </div>
                        <div className="notif__banner__right">
                            <p>Reprenez la lecture</p>
                            <p className="name__movie"> Django</p>
                            <p className="times"> Aujourd'hui</p>
                        </div>
                    </div>
                    <div className="notif__banner">
                        <div className="notif__banner__left">
                            <div className="notif__banner__left__box">
                                <img src="https://i.ytimg.com/vi/gmH8DgvO7Kc/maxresdefault.jpg" alt="" />
                            </div>
                        </div>
                        <div className="notif__banner__right">
                            <p>Reprenez la lecture</p>
                            <p className="name__movie"> Django</p>
                            <p className="times"> Aujourd'hui</p>
                        </div>
                    </div>
                    </div>

                </div>
         
                    
            </div>
    )
}