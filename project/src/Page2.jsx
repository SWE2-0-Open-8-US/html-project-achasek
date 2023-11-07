import './Page2.css'

const Page2 = () => {
    return (
        <>
            <h2 className='backBtn'><a href="index.html">Back</a></h2>
            <div className="contactBody">
                <div className="chase">
                    <h2 className='name'><strong>Chase Allman-Knieper</strong></h2>
                    <h2>Software Engineer</h2>
                    <a href="https://github.com/achasek" target="_blank" rel="noreferrer"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub"/></a>
                    <a href="https://www.linkedin.com/in/chase-ak/" target="_blank" rel="noreferrer"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn"/></a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="mailto:chaseknieper@gmail.com"
                        ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email"/>  
                    </a>
                </div>
            </div>
        </>
    )
}

export default Page2;