import React from 'react';
import './Progessbar.css'

const Progessbar = () => {
    return (
        <div className="container py-5">
            <div className="row flex-system">

                <div className="col-lg-6">

                    <div className="div-ul">

                        <h6>Python</h6>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                        </div>


                        <h6>C Programming</h6>
                        <div class="progress">
                            <div class="progress-bar yellow" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                        </div>

                        <h6>OPP</h6>

                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>

                        <h6>Database and sql</h6>

                        <div class="progress">
                            <div class="progress-bar blue" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>



                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="div-ul">

                        <h6>Django</h6>
                        <div class="progress">
                            <div class="progress-bar blue" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>


                        <h6>Java</h6>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
                        </div>

                        <h6>Git/Github</h6>

                        <div class="progress">
                            <div class="progress-bar yellow" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>

                        <h6>Linux</h6>

                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progessbar;