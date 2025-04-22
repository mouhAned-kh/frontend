const Navbar = ()=>{
return (
    <>
     <div className="navigation">
        <ul>
            <li className="list active">
                <a href="#">
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="text">Home</span> 
                </a>
            </li>

            <li className="list">
                <a href="#">
                  <span className="icon">
                    <ion-icon name="people-circle-outline"></ion-icon>
                  </span>
                  <span className="text">About Us</span> 
                </a>
            </li>

            <li className="list">
                <a href="#">
                  <span className="icon">
                    <ion-icon name="settings-outline"></ion-icon>
                  </span>
                  <span className="text">Services</span> 
                </a>
            </li>

            <li className="list">
                <a href="#">
                  <span className="icon">
                    <ion-icon name="clipboard-outline"></ion-icon>
                  </span>
                  <span className="text">Pages</span> 
                </a>
            </li>

            <li className="list">
                <a href="#">
                  <span className="icon">
                    <ion-icon name="receipt-outline"></ion-icon>
                  </span>
                  <span className="text">Blog</span> 
                </a>
            </li>

             <div className="indicator"></div>

        </ul>
    </div>


    <script>
        const list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item) =>
           item.classList.remove('active'));
           this.classList.add('active');
        }
            list.forEach((item) =>
            item.addEventListener('click',activeLink));
    </script>


    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    </>
)
}
export default Navbar