import React from 'react';
import './Optional.css'
import projectsImg from '../../images/personal_portfolio-02.png'
const Optional = () => {
    return (
        <div className='need-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="project-background">
                            <div className="background bg-warning-color">
                                <div className="view-project">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View Project
                                      </button>


                                    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content border-none">
                                                <div class="modal-header  border-none">
                                                    <h5 class="modal-title  border-none" id="exampleModalLabel">Project Name: </h5>
                                                    <button type="button  border-none" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body  border-none">
                                                    <h6>Technology I used in this Project :</h6>
                                                    <button className='button'> html</button>
                                                    <button className='button'> css</button>
                                                    <button className='button'> javascript</button>
                                                    <button className='button'> React</button>
                                                    <button className='button'> Node JS</button>
                                                    <button className='button'> Express JS</button>
                                                    <div className="project-imgs-item py-4 text-center">
                                                        <img src={projectsImg} alt="" />
                                                    </div>
                                                    <div className="div-project-section text-justify">

                                                        {/* description */}


                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officiis, consectetur eius unde sint amet, commodi quaerat blanditiis dolor suscipit quos quod corrupti dignissimos. Modi cum quia voluptate, ex vel porro animi nam impedit aperiam ab expedita suscipit autem voluptates sunt, sint ducimus illo debitis harum fuga dolor nesciunt tempora pariatur. Error odit delectus deserunt reprehenderit dolores, commodi id similique.</p>
                                                    </div>
                                                    <div className="github-icon text-center">
                                                        {/* //// ekhane href="" github er link dite hobe*/}
                                                        <a href=""> GitHub</a>
                                                        <a href=""> Live Site</a>

                                                    </div>
                                                </div>
                                                <div class="modal-footer  border-none">
                                                    <button type="button " class="linearClose " data-bs-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-background1">
                            <div className="background bg-warning-color1">
                                <div className="view-project">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        View Project
                                      </button>


                                    <div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content border-none">
                                                <div class="modal-header  border-none">
                                                    <h5 class="modal-title  border-none" id="exampleModalLabel">Project Name: </h5>
                                                    <button type="button  border-none" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body  border-none">
                                                    <h6>Technology I used in this Project :</h6>
                                                    <button className='button'> html</button>
                                                    <button className='button'> css</button>
                                                    <button className='button'> javascript</button>
                                                    <button className='button'> React</button>
                                                    <button className='button'> Node JS</button>
                                                    <button className='button'> Express JS</button>
                                                    <div className="project-imgs-item py-4 text-center">
                                                        <img src={projectsImg} alt="" />
                                                    </div>
                                                    <div className="div-project-section text-justify">

                                                        {/* description */}


                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officiis, consectetur eius unde sint amet, commodi quaerat blanditiis dolor suscipit quos quod corrupti dignissimos. Modi cum quia voluptate, ex vel porro animi nam impedit aperiam ab expedita suscipit autem voluptates sunt, sint ducimus illo debitis harum fuga dolor nesciunt tempora pariatur. Error odit delectus deserunt reprehenderit dolores, commodi id similique.</p>
                                                    </div>
                                                    <div className="github-icon text-center">
                                                        {/* //// ekhane href="" github er link dite hobe*/}
                                                        <a href=""> GitHub</a>
                                                        <a href=""> Live Site</a>

                                                    </div>
                                                </div>
                                                <div class="modal-footer  border-none">
                                                    <button type="button " class="linearClose " data-bs-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-background2">
                            <div className="background bg-warning-color2">
                                <div className="view-project">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                        View Project
                                      </button>


                                    <div class="modal fade " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content border-none">
                                                <div class="modal-header  border-none">
                                                    <h5 class="modal-title  border-none" id="exampleModalLabel">Project Name: </h5>
                                                    <button type="button  border-none" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body  border-none">
                                                    <h6>Technology I used in this Project :</h6>
                                                    <button className='button'> html</button>
                                                    <button className='button'> css</button>
                                                    <button className='button'> javascript</button>
                                                    <button className='button'> React</button>
                                                    <button className='button'> Node JS</button>
                                                    <button className='button'> Express JS</button>
                                                    <div className="project-imgs-item py-4 text-center">
                                                        <img src={projectsImg} alt="" />
                                                    </div>
                                                    <div className="div-project-section text-justify">

                                                        {/* description */}


                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officiis, consectetur eius unde sint amet, commodi quaerat blanditiis dolor suscipit quos quod corrupti dignissimos. Modi cum quia voluptate, ex vel porro animi nam impedit aperiam ab expedita suscipit autem voluptates sunt, sint ducimus illo debitis harum fuga dolor nesciunt tempora pariatur. Error odit delectus deserunt reprehenderit dolores, commodi id similique.</p>
                                                    </div>
                                                    <div className="github-icon text-center">
                                                        {/* //// ekhane href="" github er link dite hobe*/}
                                                        <a href=""> GitHub</a>
                                                        <a href=""> Live Site</a>

                                                    </div>
                                                </div>
                                                <div class="modal-footer  border-none">
                                                    <button type="button " class="linearClose " data-bs-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Optional;