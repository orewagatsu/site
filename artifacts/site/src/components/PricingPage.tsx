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
  DollarSign,
  MapPin,
  Users,
  Briefcase,
  CheckCircle,
} from "lucide-react";

export default function PricingPage() {
  const pricingPlans = [
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: "Group Classes",
      subtitle: "In-house or Online",
      price: "¥11,000",
      period: "per month",
      description: "Once a week group class at our office or online",
      features: [
        "Weekly 60-minute sessions",
        "Small group environment (4-6 students)",
        "TEFL-certified instruction",
        "Flexible online or in-person options",
        "Business English or conversation focus",
      ],
      popular: false,
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: "Private Lessons",
      subtitle: "Personalized Learning",
      price: "¥5,500",
      period: "per lesson",
      description: "One-on-one lessons, 1-6 times per week",
      features: [
        "Customized curriculum",
        "Flexible scheduling (1-6 times/week)",
        "Individual attention",
        "Business English or TOEIC preparation",
        "Progress tracking",
      ],
      popular: true,
    },
    {
      icon: <MapPin className="w-12 h-12 text-purple-600" />,
      title: "On-Location Classes",
      subtitle: "Company or Group Training",
      price: "¥12,500",
      period: "per lesson",
      description:
        "Group classes at your Company, University, Retirement Home, etc.",
      features: [
        "On-site training at your location",
        "Corporate English programs",
        "Group training for staff",
        "Customized business content",
        "*Plus travel costs",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <SEO
        title="English Learning Pricing - Dream English Iwaki | TEFL Certified Instruction"
        description="Transparent pricing for TEFL-certified English instruction in Iwaki, Japan. Choose from Business English, TOEIC preparation, conversation classes, and intercultural consulting services."
        keywords="English learning pricing Iwaki, TEFL certified English classes cost, Business English pricing Japan, TOEIC preparation fees, English conversation class prices, intercultural consulting rates"
        lang="en"
        canonical="https://www.dreamenglishiwaki.com/en/pricing"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/pricing" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/pricing" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/pricing" },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <DollarSign className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                English Learning Pricing - Dream English Iwaki
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Transparent pricing for TEFL-certified English instruction in
                Iwaki, Japan. Choose from Business English, TOEIC preparation,
                conversation classes, and intercultural consulting services.
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/en/contact")}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Choose Your Learning Path
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Flexible pricing options for every learning style and schedule.
                All programs include TEFL-certified instruction.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-lg hover:shadow-xl transition-shadow relative ${
                    plan.popular ? "border-2 border-emerald-500" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <div className="flex justify-center mb-4">{plan.icon}</div>
                    <CardTitle className="text-gray-800">
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {plan.subtitle}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-800">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}
                      onClick={() => (window.location.href = "/en/contact")}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Consulting Services */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Consulting & Public Speaking
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional intercultural consulting and public speaking
                services for businesses and organizations.
              </p>
              <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Briefcase className="w-12 h-12 text-indigo-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Custom Pricing
                      </h3>
                      <p className="text-gray-600">
                        Based on event, timing, and requirements
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Consulting Services:
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Intercultural communication training</li>
                        <li>• Business English program development</li>
                        <li>• International team management</li>
                        <li>• Global expansion strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Public Speaking:
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Corporate workshops</li>
                        <li>• Educational seminars</li>
                        <li>• Conference presentations</li>
                        <li>• Training events</li>
                      </ul>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => (window.location.href = "/en/contact")}
                  >
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Are there any registration fees?
                    </h3>
                    <p className="text-gray-600">
                      No registration fees. You only pay for the lessons you
                      take.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Can I change my lesson frequency?
                    </h3>
                    <p className="text-gray-600">
                      Yes, private lesson frequency can be adjusted based on
                      your schedule and needs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      What are the travel costs for on-location classes?
                    </h3>
                    <p className="text-gray-600">
                      Travel costs depend on the distance from our Iwaki office.
                      We'll provide a quote based on your location.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-emerald-100 mb-8">
                Contact us today for a free consultation and find the perfect
                English learning program for your needs.
              </p>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600"
                  onClick={() => (window.location.href = "/en/contact")}
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
