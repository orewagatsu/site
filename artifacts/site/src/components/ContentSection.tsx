import { BookOpen, Users, Globe, Target } from "lucide-react";

export default function ContentSection() {
  const sections = [
    {
      id: "about",
      title: "About Dream English - TEFL Certified English School",
      content:
        "Located in beautiful Iwaki, Japan, our TEFL-certified instructors provide professional English education. We specialize in Business English, TOEIC preparation, and practical communication skills that help students achieve career success and connect globally.",
    },
    {
      id: "philosophy",
      title: "TEFL-Certified Teaching Philosophy",
      content:
        "Our TEFL-certified approach moves beyond traditional grammar methods to emphasize practical Business English and TOEIC preparation. Students develop professional communication skills through real-world scenarios and industry-specific conversations.",
    },
    {
      id: "programs",
      title: "Professional English Programs in Iwaki",
      content:
        "From Business English and TOEIC preparation to intercultural consulting services, our TEFL-certified programs are designed for professionals. We offer specialized training for career advancement and global business success.",
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-orange-500" />,
      title: "TEFL-Certified Instruction",
      description: "Professional English training with certified teachers",
    },
    {
      icon: <Users className="w-10 h-10 text-amber-500" />,
      title: "Small Classes",
      description: "Personalized attention for every student",
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Business Consulting",
      description: "Intercultural communication for global business success",
    },
    {
      icon: <Target className="w-10 h-10 text-amber-500" />,
      title: "TOEIC Preparation",
      description: "Specialized training for TOEIC score improvement",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 py-20">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6 p-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full w-20 h-20 mx-auto items-center group-hover:shadow-lg transition-shadow">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={section.id} className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <h2 className="text-4xl font-bold mb-8 text-gray-800 leading-tight">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}