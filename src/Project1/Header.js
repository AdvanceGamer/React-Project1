import logo from './logo192.png'

export default function Header(){
    return(
        <header>
        <nav id="navbar">
            <div className='left-nav'> 
            <img src={logo} 
         alt="react logo"
         className='react--icon'
         />
         <h3>
            ReactFacts
         </h3>
            </div>
        <div className='right-nav'>
        <h4>
React Course - Project 1
</h4>
        </div>
       
        </nav>
    </header>
    )
}