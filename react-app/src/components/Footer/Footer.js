import "./Footer.css"
const Footer =()=> {
    return(
        <div className="whole-footer">


        <div className="f-feedback">
          <h3 className="f-fbck-txt">Website feedback? Let us know</h3>
        </div>
        <div className="footer">
            <div className="h3-div">
          <a target="_blank" href="https://www.linkedin.com/in/vanessa-gonzalez-82667a1b3/">
               <div className="linkedin-connect"><i class="fab fa-linkedin"></i><h3>Linked In</h3></div>
                    </a>
                    <a target="_blank" href="https://github.com/vxg026">
                      <div className="linkedin-connect">
                                 <i class="fab fa-github"></i> <h3>GitHub</h3>
                      </div>

                    </a>
                    <a target="_blank" href="https://wellfound.com/u/vanessa-gonzalez-41">
                    <div className="linkedin-connect">
                     <i class="fab fa-angellist"></i><h3>WellFound</h3>
                     </div>
                    </a>


            </div>

   </div>
        </div>
    )
}
export default Footer;
