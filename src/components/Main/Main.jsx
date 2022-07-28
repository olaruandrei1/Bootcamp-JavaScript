import React from 'react';
import './Article.css';
import Article from './Article';
// import imageBox from '.C:\\Users\\olaru\\Documents\\Bootcamp Javascript\\Assignments_Projects\\Front end\\blog-softbinator-copy\\public\\Images\\Box_Thumbnails\\Image_Box1_JavaScriptBootcamp.png';

const Main = () => {
    return (
        <div className='container'>
            <div className='grid-containter'>
                <div className='row'>
                    <Article
                        imagecontent='Image_Box1_JavaScriptBootcamp.png'
                        meta='PEOPLE AT SOFTBINATOR'
                        // meta_second={() => {
                        //     if (this.meta_second === '') {
                        //         this.meta_second.style.display = 'none';
                        //     } else {
                        //         return (this.meta_second.style.display =
                        //             'flex');
                        //     }
                        // }}
                        title='Softbinator JavaScript Bootcamp - Summer Session 2022'
                        content='Softbinator Technologies initiates tech bootcamps, offering students from Ovidius University of Constanta the chance to learn practical JavaScript coding skills.'
                        avatarAutor='RaresCarligeanu-HRManager.jpeg'
                        detailAutor='Rareș Cârligeanu'
                        postAutor='HR Mananger'
                    />
                </div>
                <div className='row'>
                    <Article
                        imagecontent='Image_Box2_JavaScriptMicrotaskVSMacrotask.png'
                        meta='FRONTEND'
                        meta_second='GENERAL'
                        title='JavaScript Microtask Vs. Macrotask - Differences Within The Event Loop'
                        content='JavaScript runtimes use an event loop to run their workload, specifically to execute the code, collect […]'
                        avatarAutor='RaduDita-SeniorArhitect.png'
                        detailAutor='Radu Diță'
                        postAutor='Senior Architect'
                    />
                </div>
                <div className='row'>
                    <Article
                        imagecontent='Image_Box3_CiercleLaunchesEUROC.png'
                        meta='BLOCKCHAIN'
                        title='Circle Launches EUROC Settings the Stage for the Digital Euro'
                        content='Circle released EUROC, a stablecoin backed by the Euro, and Tether announced its sterling-pegged stablecoin, marking a new step forward for digital money.'
                        avatarAutor='MariusBaisan-ChiefTechnologyOfficer.jpg'
                        detailAutor='Marius Baisan'
                        postAutor='Chief Technology Officer'
                    />
                </div>
                <div className='row'>
                    <Article
                        imagecontent={'Image_Box4_MonitorDiskUsage.png'}
                        meta='CLOUD & AWS'
                        meta_second='DEVOPS'
                        title='How to Monitor Disk Usage with CloudWatch Metrics for an EC2 Instance'
                        content='Disk usage and memory metrics aren’t default settings available on CloudWatch. Here is how you can set these metrics on an EC2 instance running Ubuntu 20.04.'
                        avatarAutor='IrinaButaru-SeniorSoftwareEngineer.jpg'
                        detailAutor='Irina Butaru'
                        postAutor='Senior Software Engineer'
                    />
                </div>
                <div className='row'>
                    <Article
                        imagecontent={'Image_Box5_KnowAboutEthereumMerge.png'}
                        meta='BLOCKCHAIN'
                        title='What You Need to Know About Ethereum’s Merge to 2.0'
                        content='Will Ethereum 2.0 make cryptos faster and reduce gas fees? From the switch to proof–of-stake to the removal of the mining concept, here’s all you need to know.'
                        avatarAutor='MariusBaisan-ChiefTechnologyOfficer.jpg'
                        detailAutor='Marius Baisan'
                        postAutor='Chief Technology Officer'
                    />
                </div>
                <div className='row'>
                    <Article
                        imagecontent='Image_Box10_SetUpCloudflareDNS.png'
                        meta='CLOUD & AWS'
                        meta_second='DEVOPS'
                        title='How to Set Up Cloudflare DNS Servers with Your GoDaddy Domains'
                        content='If you want to know how to connect your GoDaddy domain to Cloudflare DNS nameservers, check this step-by-step guide. Includes Nginx configuration.'
                        avatarAutor='IrinaButaru-SeniorSoftwareEngineer.jpg'
                        detailAutor='Irina Butaru'
                        postAutor='Senior Software Engineer'
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
