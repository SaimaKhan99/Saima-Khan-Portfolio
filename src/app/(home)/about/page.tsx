import { config } from "@/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaMapPin } from "react-icons/fa";
import ContactCard from "@/components/contact-card";

export const metadata = {
  title: "About",
  description: "About me",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <Avatar className="size-32 md:size-40">
            <AvatarImage src={config.developer.avatar} alt="Avatar" />
            <AvatarFallback className="text-4xl">
              {config.developer.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {config.developer.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {config.developer.title}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {config.developer.bio}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <ContactCard
            title="GitHub"
            href={'https://github.com/SaimaKhan99'}
            icon={<FaGithub className="w-4 h-4" />}
          />

          <ContactCard
            title="Email"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=saimakhan.official99@gmail.com&su=Contact%20from%20Portfolio`}
            icon={<HiMail className="w-4 h-4" />}
          />

          <div className="p-6 bg-muted rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaMapPin className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-muted-foreground">{config.social.location}</p>
          </div>
        </div>

        <div className="bg-muted rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Specialize in designing and scaling QA automation frameworks for 
            web, API, and cloud applications, with hands-on expertise in Playwright, Selenium, Cypress, Appium, 
            and API testing using Rest-Assured and Postman.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Actively apply AI-assisted QA practices using Claude AI (MCP Agents) and GitHub Copilot to optimize and auto-generate test scripts, 
            accelerate framework development, improve test coverage, and support efficient debugging, refactoring, 
            and test data generation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Have strong experience embedding automated testing into CI/CD pipelines 
            and executing multi-cloud QA across AWS and Azure, while owning QA delivery, SLA governance, UAT coordination, 
            and release quality across global teams.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Alongside enterprise platforms, I have also worked on Fintech systems with payment and transactional components, 
            contributing to stable releases and improved regression efficiency without compromising quality.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I’ve successfully delivered 120+ production releases with zero Sev-1 defects, 
            tested platforms serving 50M+ global users, 
            and worked closely with stakeholders to ensure predictable, high-confidence releases.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            💡 Domains: EdTech, FinTech, Payments, Enterprise Platforms
          </p>
          <p className="text-muted-foreground leading-relaxed">
            🌍 Global Experience: US, UK, EU, Middle East
          </p>
          <p className="text-muted-foreground leading-relaxed">
            🎯 Open to: Senior SDET | QA Automation Lead | QA Delivery Lead
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
