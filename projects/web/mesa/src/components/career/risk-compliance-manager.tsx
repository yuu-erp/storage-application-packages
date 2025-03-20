import GradientHeading from "../gradient-heading";
import MaxWidthContainer from "../layout/max-width-container";
import JobDescriptionCard from "./job-description-card";

function RiskComplianceManager() {
  return (
    <MaxWidthContainer>
      <div className="mb-4 flex flex-col items-center gap-2">
        <GradientHeading tag="h2" className="text-3xl font-bold lg:text-[3rem]">
          Risk & Compliance Manager
        </GradientHeading>
        <GradientHeading
          tag="span"
          className="mb-2 text-base font-bold lg:text-2xl"
        >
          Portugal - On site
        </GradientHeading>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <JobDescriptionCard
          title="Introduction"
          descriptions={[
            "Here at Mesanovas, we are powering the future of customer experience, together: combining best in class technology with free-flowing creativity, and expertise that can make business better for everyone. There are no precedents for what we're doing. With you on our side, we'll be setting new ones every day.",
          ]}
          className="lg:col-span-2"
        />
        <JobDescriptionCard
          title="The Role"
          descriptions={[
            "This role is fundamental to the success of the Mesanovas. Our culture is fast-moving, so we’re looking for someone who is super organized, confident using technology along with having laser focus whilst balancing multiple priorities.",
            "You will be reporting into the Chief Risk Officer within the 2nd line of defence team.",
          ]}
        />
        <JobDescriptionCard
          title="The main outcomes of the role"
          descriptions={[
            "Work in a regulated environment, with direct accountability to the CRO for overseeing the management of risk of the Mesanovas System.",
            "Promote a risk culture that is embedded in every policy and process of the company.",
            "Oversee embedding of the new risk framework, ensuring full compliance with regulatory expectations.",
          ]}
        />
        <JobDescriptionCard
          title="Your main responsibilities will include (but not limited to):"
          descriptions={[
            "Managing and monitoring the risks associated with outsourced functions to assure the level of service required to manage a systemically important payment system",
            "Reporting on the risk internally (e.g. to the CRO, CEO) and externally (e.g. to the regulators), building effective working relationships with them",
            "Monitoring and identifying how to control risk and improve controls.",
            "Understanding relevant regulations and requirements and policies applicable to Mesanovas and the broader industry we operate in ",
            "Taking a hands-on approach to staying informed, provide insight and guidance to the internal team,",
            "Provide critical updates to regulators/customers and other external stakeholders.",
          ]}
          className="lg:col-span-2"
        />
        <JobDescriptionCard
          title="What we need from you:"
          descriptions={[
            "Substantial financial services regulatory compliance risk experience and expertise, preferably gained in a payments environment.",
            "Strong understanding of the relevant regulations applicable to Mesanovas and the broader trends that inform them",
            "Strong communication skills to influence on the importance of risk and compliance to your colleagues and other stakeholders",
            "Understanding what good risk management looks like and the ability to help shape the embedding of a new framework and potentially risk management system",
            "Flexibility in approach to ways of working, open mindedness with regards to ambiguity as well as ability to be comfortable with a fast-paced environment and rapidly changing priorities.",
          ]}
          className="lg:col-span-2"
        />
        <JobDescriptionCard
          title="Nice to have:"
          descriptions={[
            "Be responsible",
            "Understanding and application of Agile HR/Agile Teams",
            "Regulator related or Start-Up Experience",
          ]}
          className="lg:col-span-2"
        />
      </div>
    </MaxWidthContainer>
  );
}

export default RiskComplianceManager;
