import SEO from "./SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Users,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

export default function InterculturalConsultingPage() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "International Communications",
      description: "Bridge cultural gaps in global business communications",
      features: [
        "Cross-cultural communication strategies",
        "International meeting facilitation",
        "Global team collaboration",
        "Cultural sensitivity training",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Leadership Training",
      description: "Develop leadership skills for multicultural environments",
      features: [
        "Inclusive leadership practices",
        "Managing diverse teams",
        "Conflict resolution across cultures",
        "Executive presence in global settings",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-600" />,
      title: "Management Consulting",
      description: "Strategic guidance for international business expansion",
      features: [
        "Market entry strategies",
        "Organizational culture assessment",
        "Change management",
        "Performance optimization",
      ],
    },
  ];

  const industries = [
    "Technology & Software",
    "Manufacturing & Engineering",
    "Healthcare & Pharmaceuticals",
    "Financial Services",
    "Education & Research",
    "Tourism & Hospitality",
  ];

  const consultingProcess = [
    {
      step: "1",
      title: "Assessment",
      description:
        "Comprehensive analysis of your current international communication challenges and organizational culture.",
    },
    {
      step: "2",
      title: "Strategy Development",
      description:
        "Custom solutions designed to address your specific cross-cultural business needs and goals.",
    },
    {
      step: "3",
      title: "Implementation",
      description:
        "Hands-on support and training to implement new communication strategies and leadership practices.",
    },
    {
      step: "4",
      title: "Evaluation",
      description:
        "Ongoing monitoring and adjustment to ensure sustainable improvement in international operations.",
    },
  ];

  const caseStudies = [
    {
      company: "Tech Startup",
      challenge:
        "Expanding to US market with limited English communication skills",
      solution: "6-month leadership training program for executive team",
      result: "Successfully launched US operations with 40% revenue growth",
    },
    {
      company: "Manufacturing Company",
      challenge: "Managing international supply chain partnerships",
      solution: "Cross-cultural communication workshops for procurement team",
      result: "Improved supplier relationships and 25% cost reduction",
    },
  ];

  return (
    <>
      <SEO
        title="Business Consulting - TEFL Certified Expertise in Iwaki | Dream English"
        description="Transform your organization's global capabilities with TEFL-certified business consultants specializing in international communication. Our Iwaki-based team provides expert guidance in international business English, cross-cultural management, and global expansion strategies."
        keywords="business consulting Iwaki, TEFL certified business consultants, cross-cultural communication training, international business English, global expansion strategies, business management Japan"
        lang="en"
        canonical="https://www.dreamenglishiwaki.com/en/intercultural-consulting"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/intercultural-consulting" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/intercultural-consulting" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/intercultural-consulting" },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Business Consulting - TEFL Certified Expertise in Iwaki
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Transform your organization's global capabilities with
                TEFL-certified business consultants specializing in
                international communication. Our Iwaki-based team provides
                expert guidance in international business English,
                cross-cultural management, and global expansion strategies.
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/en/contact")}
              >
                Schedule Strategy Session
              </Button>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Consulting Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions to help your organization thrive in the
                global marketplace.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-gray-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Target className="w-4 h-4 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Award className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Industries We Serve
                </h2>
                <p className="text-lg text-gray-600">
                  Our expertise spans across various industries, helping
                  organizations of all sizes achieve international success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg text-center"
                  >
                    <span className="text-gray-700 font-medium">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Process */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Consulting Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach to transforming your international
                business capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultingProcess.map((phase, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {phase.step}
                    </div>
                    <CardTitle className="text-indigo-700">
                      {phase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from organizations that have transformed their
                international operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-indigo-700">
                      {study.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Challenge:
                      </h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Solution:
                      </h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Result:
                      </h4>
                      <p className="text-emerald-600 text-sm font-medium">
                        {study.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Globe className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Go Global?
              </h2>
              <p className="text-indigo-100 mb-8">
                Let us help you unlock your organization's international
                potential with proven strategies and expert guidance.
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/en/contact")}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
