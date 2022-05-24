import profile_img from'./IMG_20220401_145616~2.jpg';
import email_icon from'./211660_email_icon.png';
import twitter_icon from './twitter1.png';
import facebook_icon from './facebook1.png';
import instagram_icon from './instagram1.png';
import github_icon from './github1.png';
// import linkedin_icon from './pngegg.png';
export default function Main(){
    return(
        <div className='Section2'>

        <div id="MainContent">
            <img className='profile-img'src={profile_img}
            alt="Profile"
            width="150px" />
            <h2>Sahil </h2>
            <p className='Developer'>Frontend Developer</p>
            <div className='Section1'>
             <div className='Email'>
                <img
                src={email_icon}
                alt="Email"
                />
                 <p>Email</p>
             </div>
             <div className='Linkedin'>
             <img
                src='data:image/png;base64,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'
                alt="Linkedin"
                />
                <p>Linkedin</p>
             </div>
            </div>

        <div className='About'>

            <h3>
                About
            </h3>
            <p>
               Sahil is currently pursuing his Software Engineer degree from <i>Rajkiya Engineering College Banda. </i>
               He is a 5 ⭐ coder on Hackerrank. 
               He is a gold medalist🥇 in state level chess chamionship. 
               He also secured 6th rank among 105 entities in an coding even organised by Rajkiya Engineering College Banda. 
               He has developed two web games --&#8594;<br/>
               1. <strong>Diamond Theft <br/>
               Link--&#8594;</strong> <a href="https://nifty-swartz-fd6df7.netlify.app" target="_blank" rel='noreferrer'>https://nifty-swartz-fd6df7.netlify.app</a><br/>
               2. <strong>Matchstick Game <br/>
               Link--&#8594; </strong><a href="https://competent-kirch-b2c330.netlify.app" target="_blank" rel='noreferrer'>https://competent-kirch-b2c330.netlify.app</a><br/>
            </p>
        </div>
        <div className='Interest'>

            <h3>
                Interest
            </h3>
            <p>
              1. Chess ♟️<br/>
              2. Sketching ✏️<br/>
              3. Painting 🎨<br/>
              3. Coding 💻<br/>
              4. Cycling 🚲<br/>
              5. Reading 📚<br/>
            </p>
        </div>

        <div className='Social-Media'>
            <img className='Twitter' src={twitter_icon}
            alt="Twitter"
            />
            <img className='Facebook' src={facebook_icon}
            alt="Facebook"
            />
            <img className='Instagram' src={instagram_icon}
            alt="Instagram"
            />
            <img className='Github' src={github_icon}
            alt="Github"
            />
        </div>
                </div>
        </div>
    )
}