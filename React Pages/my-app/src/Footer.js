function Footer() {
    return (
        <div className="fixed-bottom">

            <footer class="bg-light text-center text-white">

                <div class="container p-4 pb-0">

                    <section class="mb-4">

                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{"background-color" : "#3b5998"}} 
                            href="#!"
                            role="button"><i class="fab fa-facebook-f"></i></a>


                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{"background-color" : "#55acee"}} 
                            href="#!"
                            role="button"><i class="fab fa-twitter"></i></a>


                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{"background-color" : "#dd4b39"}} 
                            href="#!"
                            role="button"><i class="fab fa-google"></i></a>


                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{"background-color" : "#ac2bac"}} 
                            href="#!"
                            role="button"><i class="fab fa-instagram"></i></a>


                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{"background-color" : "#0082ca"}} 
                            href="#!"
                            role="button"><i class="fab fa-linkedin-in"></i></a>

                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{"background-color" : "#333333"}} 
                            href="#!"
                            role="button"><i class="fab fa-github"></i></a>
                    </section>

                </div>

            </footer>

        </div>
    );
}

export default Footer;