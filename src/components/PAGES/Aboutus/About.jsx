import React from 'react'

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="http://drive.google.com/uc?export=view&id=1qQPQf3D1OjEQOZnIf58WsZMQq-OdyLwx" alt="AkhilThejReddy_founder" />
                            <img className="md:hidden block" src="http://drive.google.com/uc?export=view&id=1UrteL9z4K4im8JSwQ41byTRac3PFkBpg" alt="AkhilThejReddy_founder" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Sai Kiram</p>
                            <p className="font-medium text-20 leading-5 text-gray-800 ">( Creative Wing )</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://lh4.googleusercontent.com/AYbcewqTuFX6Af15IKukwwWr3qux5x9v6ex4PmttZ91qjfA8MshhDXlwekp0V_nXrsc=w2400" alt="AkhilThejReddy featured Img" />
                            <img className="md:hidden block" src="https://lh3.googleusercontent.com/YvoGLGD0W3V0-gdyQQiFMfMe_ZKvGjPCU1oJZ-6e7VPYwPw0oKBH02bdz5SN36Jhfyc=w2400" alt="AkhilThejReddy featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Pavan Kumar</p>
                            <p className="font-medium text-20 leading-5 text-gray-800 ">Vice President</p>
                            <p className="font-medium text-20 leading-5 text-gray-800 ">( Digital Wing )</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="http://drive.google.com/uc?export=view&id=1zmsRdjnvICJjshgOtuHrwu4_QBjTdFgt" alt="AkhilThejReddy_founder" />
                            <img className="md:hidden block" src="http://drive.google.com/uc?export=view&id=1mopEpOPpoDSnSHuS7uwQ5WYYPaXto5H0" alt="AkhilThejReddy_founder" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Akhil Thej Reddy</p>
                            <p className="font-medium text-20 leading-5 text-gray-800 "> Founder </p>
                            <p className="font-medium text-20 leading-5 text-gray-800 ">( Technical Wing )</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://lh4.googleusercontent.com/AYbcewqTuFX6Af15IKukwwWr3qux5x9v6ex4PmttZ91qjfA8MshhDXlwekp0V_nXrsc=w2400" alt="AkhilThejReddy featured Img" />
                            <img className="md:hidden block" src="https://lh3.googleusercontent.com/YvoGLGD0W3V0-gdyQQiFMfMe_ZKvGjPCU1oJZ-6e7VPYwPw0oKBH02bdz5SN36Jhfyc=w2400" alt="AkhilThejReddy featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Chaitanya Teja</p>
                            <p className="font-medium text-20 leading-5 text-gray-800 ">(Technical Wing)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About