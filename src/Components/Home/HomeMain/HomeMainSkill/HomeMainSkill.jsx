import React from 'react';

const HomeMainSkill = () => {

    const skillData = [
        {
            id: "1",
            img: "https://i.ibb.co/QY10y0s/react.png" ,
            title: "React.js"
        },
        
        {
            id: "2",
            img: "https://i.ibb.co/QY10y0s/react.png" ,
            title: "Express JS"
        },
        {
            id: "3",
            img: "https://i.ibb.co/VVT7srY/node.png",
            title: "Node.js"
        },
        {
            id: "4",
            img: "https://i.ibb.co/2hdm2cD/mongodb.png",
            title: "MongoDB"
        },
        {
            id: "5",
            img: "https://i.ibb.co/0QGKRZF/css.png",
            title: "Es6"
        },
        {
            id: "6",
            img: 'https://i.ibb.co/R42ZVY8/bootstrap.png',
            title: "Bootstrap"
        },
        {
            id: "7",
            img: "https://i.ibb.co/QY10y0s/react.png",
            title: "Tailwind"
        },
        {
            id: "8",
            img: "https://i.ibb.co/QY10y0s/react.png",
            title: "Material UI"
        }
    ]

    return (
        <div className='min-h-screen bg-white'>
            <div className='text-black text-center font-bold text-4xl flex justify-center'>
                <h1 className='my-3 p-3 border-y-4 border-black'>Key Skills</h1>
            </div>
            <div className="hero ">
                <div className="hero-content text-center">
                    <div className=" grid md:grid-cols-4 gap-4">
                        {
                            skillData.map(skill => <SkillDisplay key={skill.id} skill={skill}></SkillDisplay>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const SkillDisplay = ({skill}) => {
    const {img, title} = skill;
    return (
        <div className='bg-slate-800 p-5 h-56 w-48 mx-4 rounded-xl'>
            <img src={img} alt="" />
            <h1 className='text-white text-2xl animate-bounce'>{title}</h1>
        </div>
    )
}

export default HomeMainSkill;