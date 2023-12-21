import React from 'react';

import volunteer from '../../assets/images/projects/done/volunteer.jpg'
import creative from '../../assets/images/projects/done/creative agency.jpg'
import travel from '../../assets/images/projects/done/travel-guru.jpg'
import onlineCourse from '../../assets/images/projects/done/online-course2.png'
import socialBuddy from '../../assets/images/projects/done/comment-post.png'
import eSchool from '../../assets/images/projects/done/e-school.jpg'


const Projects = () => {

    const allProjectData = [
        {
            id: 1,
            title: "Volunteer Network",
            description: "A full-stack volunteer Service web application",
            img: volunteer,
            tools: [
                {
                    item: "React"
                },
                {
                    item: "Node.js"
                },
                {
                    item: "MongoDB"
                },
                {
                    item: "Bootstrap"
                },
                {
                    item: "HTML"
                },
                {
                    item: "Css"
                }
            ],
            features: [
                {
                    feature: "Users can take part at any voluntary work and handle their volunteer services."
                },
                {
                    feature: "Users have to login and register to take part in social work."
                },
                {
                    feature: "Admin can keep records of all user's volunteer services and can remove any service as well."
                },
                {
                    feature: "New Services could be added by Admins."
                },
                {
                    feature: "Firebase authentication."
                }
            ],
            live: "https://volunteers-work.web.app/",
            git: "https://github.com/Abdullah0095/assignment-09-2020-pro"
        },
        {
            id: 2,
            title: "Creative Agency",
            description: "A complete responsive service selling website",
            img: creative,
            tools: [
                {
                    item: "React"
                },
                {
                    item: "Node.js"
                },
                {
                    item: "MongoDB"
                },
                {
                    item: "Bootstrap"
                },
                {
                    item: "HTML"
                },
                {
                    item: "Css"
                }
            ],
            features: [
                {
                    feature: "Different dashboard for Clients and Admins."
                },
                {
                    feature: "Feedback section for Clients."
                },
                {
                    feature: "Admin can give access of Admin dashboard."
                },
                {
                    feature: "Services could be handled by Admins."
                },
                {
                    feature: "Firebase authentication."
                }
            ],
            live: "https://our-creative-agency.web.app/",
            git: "https://github.com/Abdullah0095/assignment-10-2020-pro"
        },
        {
            id: 3,
            title: "Travel Guru",
            description: "A travel booking web application",
            img: travel,
            tools: [
                {
                    item: "React"
                },
                {
                    item: "MaterialUI"
                },
                {
                    item: "Bootstrap"
                },
                {
                    item: "HTML"
                },
                {
                    item: "Css"
                }
            ],
            features: [
                {
                    feature: "Clickable travel place card to book hotels."
                },
                {
                    feature: "Booking Form."
                },
                {
                    feature: "Login with Email and Password."
                },
                {
                    feature: "Firebase authentication."
                }
            ],
            live: "https://travel-gurus.web.app/",
            git: "https://github.com/Abdullah0095/assignment-08-2020-pro"
        },
        {
            id: 4,
            title: "Online School",
            description: "A online education web application",
            img: onlineCourse,
            tools: [
                {
                    item: "JavasCript"
                },
                {
                    item: "Bootstrap"
                },
                {
                    item: "HTML"
                },
                {
                    item: "Css"
                }
            ],
            features: [
                {
                    feature: "Education service list with details."
                },
                {
                    feature: "Cart section for addeded courses"
                },
                {
                    feature: "Course price calculating system."
                }
            ],
            live: "https://objective-edison-563555.netlify.app/",
            git: "https://github.com/Abdullah0095/online-courses"
        },
        {
            id: 5,
            title: "Social Buddy",
            description: "A dummy social web app.",
            img: socialBuddy,
            tools: [
                {
                    item: "React"
                },
                {
                    item: "MaterialUI"
                },
                {
                    item: "Bootstrap"
                },
                {
                    item: "HTML"
                }
            ],
            features: [
                {
                    feature: "All data loaded from random user API"
                },
                {
                    feature: "Comments section available for every post"
                },
                {
                    feature: "Full website made by MaterialUI"
                }
            ],
            live: "https://stoic-murdock-4a8db4.netlify.app/",
            git: "https://github.com/Abdullah0095/assignment-8-post-comment"
        },
        {
            id: 6,
            title: "E-School Learning.",
            description: "A dummy e-school static webpage.",
            img: eSchool,
            tools: [
                {
                    item: "Bootstrap"
                },
                {
                    item: "HTML"
                },
                {
                    item: "Css"
                }
            ],
            features: [
                {
                    feature: "Converted from psd to pure Html, Css and Bootstrap."
                },
                {
                    feature: "Complete responsive website."
                },
                {
                    feature: "Owl carousel implemented in review section."
                }
            ],
            live: "https://abdullah0095.github.io/electronic-school/",
            git: "https://github.com/Abdullah0095/electronic-school"
        }

    ];

    return (
        <div className='bg-white py-12'>
            <h1>Projects done by me</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    allProjectData.map(singleProject => <DisplayProject key={singleProject.id} singleProject={singleProject}></DisplayProject>)
                }
            </div>
        </div>
    );
};

const DisplayProject = ({ singleProject }) => {
    const { title, description, img, tools, live, git, features } = singleProject;
    return (
        <div>
            <div className="project-body mx-4">
                <div className="project-card">
                    <div className="project-img">
                        <img className="" src={img} alt="" />
                    </div>
                    <div className="project-details">
                        <h4 className="font-bold text-black">{title}</h4>
                        <p className="project-description text-black">{description}</p>
                        <ul className="grid grid-cols-4">
                            {
                                tools.map(tl => <li className="list-inline-item tools">{tl.item}</li>)
                            }
                        </ul>

                    </div>
                </div>
                <div className="project-content">
                    <h4 className="ml-4">Features</h4>
                    <ul>
                        {
                            features.map(ft => <li>{ft.feature}</li>)
                        }
                    </ul>
                    <div className="">
                        <a target="_blank" href={live} className="live-link">Website</a>
                        <a target="_blank" href={git} className="git-link">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;