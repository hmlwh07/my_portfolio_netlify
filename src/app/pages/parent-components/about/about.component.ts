import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  isActive = false;

  projects = [
    {
      title: 'R2E Wallet',
      description: 'R2E wallet is a mobile application that allows users to manage their crypto currency portfolio.',
      image: 'assets/exp-logo/r2e-wallet.png',
      detail_a: 'The MediCubo Crypto Wallet (R2E) is a blockchain-based eco-initiative that incentivizes recycling, allowing MediEarth members to earn points for returning PET bottles. These points can be converted into NFTs or spent as cash in real life.',
      detail_b: 'Additionally, the MediCubo Crypto Wallet offers a loan process, enabling users to leverage their earned points or crypto assets as collateral to access eco-friendly microloans. This feature empowers members by providing financial flexibility, allowing them to borrow funds based on their wallet balance and transaction history.',
      detail_c: 'The loan system is designed with smart contracts, ensuring secure, transparent, and automated lending within the ecosystem.By combining recycling incentives with financial services, MediCubo fosters a sustainable economy, encouraging both eco-conscious behavior and financial empowerment for its users.',
      style: 'style_two',
      width: 'width: 68%',
    },
    {
      title: 'KACE',
      description: 'The Claim System App is designed for motor vehicle and comprehensive motor insurance. It allows customers to file accident claims and enables surveyors to assess accident sites and report findings to the head office efficiently. This system includes a Surveyor Portal Website for streamlined claim processing.',
      image: 'assets/exp-logo/KACE.png',
      detail_a: 'The KACE user front-end is a comprehensive platform available on both web and mobile (iOS & Android), designed to provide policyholders with a seamless and efficient experience. Users can view and manage their insurance policies, track coverage details, and access important policy documents in one centralized interface.',
      detail_b: '',
      detail_c: 'The system also enables users to initiate and submit vehicle damage claims directly through the platform. By providing essential claim details, uploading supporting documents, and tracking the claim status in real time, users can experience a hassle-free and transparent claims process.With a focus on usability, security, and accessibility, the KACE front-end ensures that policyholders can interact with their insurance services effortlessly, reducing paperwork and enhancing overall customer experience.',
      style: 'style_one',
      width: 'width: 28%',
    },
    {
      title: 'Customer Care',
      description: 'This is the user-facing front-end for KACE, available on both web and mobile (iOS & Android). It allows users to view their insurance policies and submit claims for vehicle damage, ensuring a seamless and accessible claims process.',
      image: 'assets/exp-logo/Logo_Dark_Blue.png',
      detail_a: 'The Claim System App is a comprehensive solution for motor vehicle and comprehensive motor insurance, designed to streamline the claims process for both customers and surveyors.',
      detail_b: 'Customers can easily file accident claims through the app, providing necessary details and supporting documents. Once a claim is submitted, it is assigned to a surveyor, who conducts an on-site assessment, gathers evidence, and documents the findings. The surveyor then submits the report to the head office, ensuring a smooth and efficient claim approval process.',
      detail_c: 'Additionally, the system includes a Surveyor Portal Website, which provides surveyors with a centralized platform to manage assigned cases, upload reports, track claim statuses, and communicate with the head office. This enhances operational efficiency, reduces paperwork, and accelerates the insurance claim lifecycle, ultimately improving customer satisfaction and service delivery.',
      style: 'style_two',
      width: 'width: 68%',
    },
    {
      title: 'T2K',
      description: 'T2K mobile platform offers a unique audition experience where contestants upload videos, and users engage by voting and purchasing merchandise. Users can earn V Points through shopping for related products or watching ads, which can then be used to vote and support their favorite contestants. This creates an interactive mix of entertainment, shopping, and fan participation.',
      image: 'assets/exp-logo/t2k_logo.png',
      detail_a: 'Our mobile platform provides an exciting and interactive audition experience, where contestants showcase their talent by uploading audition videos, while users have the opportunity to actively engage in the competition. Users can vote for their favorite contestants and show their support by purchasing merchandise.',
      detail_b: 'Additionally, users can earn V Points through various activities, such as shopping for products related to their favorite teams or contestants. For those who prefer not to purchase, they can earn V Points for free by watching commercial ads.',
      detail_c: 'These points can then be used to vote, further enhancing the level of interaction and involvement. The platform blends entertainment, shopping, and fan participation, creating a unique and dynamic environment for both contestants and users.',
      style: 'style_one',
      width: 'width: 28%',
    },
    {
      title: 'INSPEER',
      description: 'INSPEER is a comprehensive insurance digital core platform designed to streamline operations and accelerate product launches. With features like real-time logic configuration, dynamic workflow management, AI-powered automation, and advanced analytics, it empowers insurers to stay competitive and efficient. Future-ready and scalable, INSPEER adapts to the needs of insurers of all sizes.',
      image: 'assets/exp-logo/inspeer-removebg-preview-crop.png',
      detail_a: 'INSPEER is a cutting-edge insurance digital core platform that revolutionizes the way insurance companies operate. With powerful tools for accelerating product launches, the platform allows insurers to configure and update products quickly, staying ahead of market trends. Its dynamic rule and logic configuration engine enable real-time validation and calculations, streamlining the underwriting process.',
      detail_b: '',
      detail_c: 'INSPEER also offers customizable UI configurations for each distribution channel, ensuring a tailored user experience across web portals and partner platforms. The platform\'s efficient approval workflows are supported by the configurable Assignment Engine, simplifying approval processes and task assignments. Additionally, the Workflow Engine gives insurers full control to create, modify, and manage process flows as per business needs. With AI integration, INSPEER automates tasks like document processing, improving overall efficiency. Real-time analytics and reporting provide valuable insights, enabling data-driven decision-making. Designed to scale with businesses, INSPEER is a future-ready solution that empowers insurers to innovate and stay competitive in the evolving market.',
      style: 'style_one',
      width: 'width: 28%',
    },
  ]
  isActiveArray: boolean[] = [];


  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Check if current route is about
      this.isActive = event.url === '/about';
      if (this.isActive) {
        // Initialize isActiveArray with false values
        this.isActiveArray = new Array(this.projects.length).fill(false);

        // Trigger animations with delay
        this.projects.forEach((_, index) => {
          setTimeout(() => {
            this.isActiveArray[index] = true;
          }, index * 500); // 200ms delay between each card
        });
      }
    });
  }

  goToProjectDetail(project: any) {
    this.router.navigate(['/project-detail'], {
      state: {
        project: project
      }
    });
  }

  ngOnInit() {

  }
}
