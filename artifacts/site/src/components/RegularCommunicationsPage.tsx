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
  MessageCircle,
  Coffee,
  Heart,
  Star,
  Users,
  Clock,
  Briefcase,
  TrendingUp,
  Globe,
  Award,
  Target,
} from "lucide-react";

export default function RegularCommunicationsPage() {
  const conversationTopics = [
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: "Daily Life & Culture",
      description:
        "Share experiences about Japanese and international cultures",
      examples: [
        "Food and cooking",
        "Travel experiences",
        "Local festivals",
        "Family traditions",
      ],
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Hobbies & Interests",
      description: "Discuss your passions and discover new interests",
      examples: [
        "Photography",
        "Music and arts",
        "Sports and fitness",
        "Reading and movies",
      ],
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Dreams & Goals",
      description: "Express your aspirations and future plans",
      examples: [
        "Career ambitions",
        "Travel dreams",
        "Personal growth",
        "Life achievements",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Social Connections",
      description: "Build confidence in social situations",
      examples: [
        "Making friends",
        "Social events",
        "Community involvement",
        "Networking",
      ],
    },
  ];

  const classFormats = [
    {
      title: "Conversation Circles",
      description: "Small group discussions in a relaxed atmosphere",
      duration: "60 minutes",
      size: "4-6 students",
      frequency: "Weekly",
    },
    {
      title: "One-on-One Sessions",
      description:
        "Personalized conversation practice with dedicated attention",
      duration: "60 minutes",
      size: "1 student",
      frequency: "Flexible",
    },
    {
      title: "Bi-Monthly Events",
      description:
        "Fun activities like cooking classes and English game nights",
      duration: "120 minutes",
      size: "6-10 students",
      frequency: "Bi-monthly",
    },
  ];

  const testimonials = [
    {
      name: "Suzuki",
      role: "University Student",
      content:
        "The conversation classes helped me make international friends and feel more confident speaking English in any situation.",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=suzuki&backgroundColor=b6e3f4&clothesColor=262e33&eyesColor=262e33&facialHairColor=724133&hairColor=724133&hatColor=0052cc&mouthColor=d50000&skinColor=fdbcb4",
    },
    {
      name: "Nakamura",
      role: "Retiree",
      content:
        "I love sharing stories about my travels and learning about other cultures. These classes keep me engaged and learning.",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=nakamura&backgroundColor=c084fc&clothesColor=3c4142&eyesColor=262e33&facialHairColor=724133&hairColor=65471f&hatColor=0052cc&mouthColor=d50000&skinColor=f8d25c",
    },
  ];

  return (
    <>
      <SEO
        title="English Conversation Classes - TEFL Certified Instruction in Iwaki | Dream English"
        description="Build natural English conversation skills with TEFL-certified instructors in Iwaki. Our classes complement Business English and TOEIC preparation programs through practical communication practice and cultural exchange."
        keywords="English conversation classes Iwaki, TEFL certified conversation training, English speaking practice, conversation circles Iwaki, English communication skills Japan"
        lang="en"
        canonical="https://www.dreamenglishiwaki.com/en/regular-communications"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/regular-communications" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/regular-communications" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/regular-communications" },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 text-rose-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                English Conversation Classes - TEFL Certified Instruction in
                Iwaki
              </h1>
              <p className="text-xl text-rose-100 mb-8">
                Build natural English conversation skills with TEFL-certified
                instructors in Iwaki. Our classes complement Business English
                and TOEIC preparation programs through practical communication
                practice and cultural exchange.
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/en/contact")}
              >
                Join a Conversation Circle
              </Button>
            </div>
          </div>
        </div>

        {/* Conversation Topics */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                What We Talk About
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our conversations cover topics that matter to you, making
                English learning natural and enjoyable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conversationTopics.map((topic, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">{topic.icon}</div>
                    <CardTitle className="text-gray-800">
                      {topic.title}
                    </CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {topic.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Class Formats */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Clock className="w-12 h-12 mx-auto mb-4 text-rose-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Choose Your Learning Style
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer flexible formats to match your schedule and learning
                preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {classFormats.map((format, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-rose-700">
                      {format.title}
                    </CardTitle>
                    <CardDescription>{format.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{format.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Class Size:</span>
                        <span className="font-medium">{format.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{format.frequency}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Student Experiences
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from students who have transformed their English
                conversation skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Practical Business Focus Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Practical Business Focus
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our conversation classes complement your professional
                development with real-world business scenarios.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Career Advancement
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Practice English skills that directly impact your
                      professional growth
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Networking Skills
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Build confidence for international business networking
                      events
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Global Communication
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Master cross-cultural communication for international
                      success
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Bridge Expertise Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Globe className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Cultural Bridge Expertise
                </h2>
                <p className="text-lg text-gray-600">
                  Navigate cultural differences with confidence through our
                  specialized approach.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Japanese-Western Business Culture
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Understanding Western directness vs Japanese subtlety
                    </li>
                    <li>
                      • Adapting communication styles for international meetings
                    </li>
                    <li>• Building rapport across cultural boundaries</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Intercultural Competence
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Avoiding cultural misunderstandings</li>
                    <li>• Expressing ideas clearly across cultures</li>
                    <li>• Building international professional relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Programs Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Specialized Conversation Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our targeted conversation programs designed for
                specific goals and industries.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Business Conversations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional scenarios and industry-specific vocabulary
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    TOEIC/TOEFL Training
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Targeted practice for TOEIC and TOEFL test success
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Social English
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Casual conversations for social and travel situations
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Cultural Exchange
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Deep discussions about Japanese and international cultures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-3xl font-bold text-white mb-6">
                Start Your Conversation Journey
              </h2>
              <p className="text-rose-100 mb-8">
                Join our welcoming community of English learners and start
                having meaningful conversations today.
              </p>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600"
                  onClick={() => (window.location.href = "/en/contact")}
                >
                  Book Trial Class
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
