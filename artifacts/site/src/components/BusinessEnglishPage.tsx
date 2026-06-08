import SEO from "./SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Globe, CheckCircle } from "lucide-react";

export default function BusinessEnglishPage() {
  const programs = [
    {
      title: "Executive Communication",
      description:
        "Advanced English for senior management and leadership roles",
      features: [
        "Presentation skills",
        "Meeting facilitation",
        "Negotiation techniques",
        "Cross-cultural communication",
      ],
    },
    {
      title: "Professional Meetings",
      description: "Master the art of effective business meetings in English",
      features: [
        "Meeting vocabulary",
        "Agenda management",
        "Decision-making language",
        "Follow-up communication",
      ],
    },
    {
      title: "Job Specific Skills",
      description:
        "Master specialized language and communication for your industry",
      features: [
        "Understanding industry jargon",
        "Sales and marketing language",
        "Leadership language to inspire",
        "Technical vocabulary",
      ],
    },
  ];

  const benefits = [
    "Increase confidence in international business settings",
    "Improve career advancement opportunities",
    "Build stronger relationships with global colleagues",
    "Enhance your professional reputation",
    "Master industry-specific vocabulary",
    "Develop cultural awareness for global markets",
  ];

  return (
    <>
      <SEO
        title="Business English Programs - TEFL Certified Training in Iwaki | Dream English"
        description="Advance your career with TEFL-certified Business English instruction and TOEIC preparation in Iwaki. Professional English programs for business consultants, executives, and professionals seeking global career opportunities."
        keywords="Business English Iwaki, TEFL certified business training, TOEIC preparation, professional English Iwaki, executive communication training, business English classes Japan"
        lang="en"
        canonical="https://zealous-chandrasekhar2-9jm3e.view-3.tempo-dev.app/en/business-english"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Briefcase className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Business English Programs - TEFL Certified Training in Iwaki
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Advance your career with TEFL-certified Business English
                instruction and TOEIC preparation. Our professional English
                programs in Iwaki are designed for business consultants,
                executives, and professionals seeking global career
                opportunities.
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/en/contact")}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                TEFL-Certified Business English Programs in Iwaki
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our specialized TEFL-certified programs designed for
                business consultants, executives, and professionals. Includes
                TOEIC preparation and intercultural consulting services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-emerald-700">
                      {program.title}
                    </CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
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

        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Why Business English Matters
                </h2>
                <p className="text-lg text-gray-600">
                  In today's global economy, strong English communication skills
                  are essential for professional success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Diverse group of professionals communicating in a business meeting setting"
                className="rounded-lg shadow-2xl"
              />
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-emerald-100 mb-8">
                Join professionals from leading companies who have transformed
                their careers with our Business English programs.
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/en/contact")}
              >
                Book Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
