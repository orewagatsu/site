export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Tanaka",
      role: "Business Professional",
      content:
        "When I first walked into Dream English, I could barely speak English in business meetings. Through their TEFL-certified Business English program, I now confidently lead international presentations and achieved a 700 TOEIC score. I was promoted to regional manager thanks to my improved professional English skills.",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=yuki&backgroundColor=b6e3f4&clothesColor=262e33",
      achievement: "Promoted to Regional Manager",
    },
    {
      name: "Sato",
      role: "Retired Teacher",
      content:
        "After retiring from teaching, I was worried about keeping my mind sharp and healthy. Dream English's conversation classes not only helped me stay mentally active but also supported my dream of traveling the world. Now I confidently communicate with people from various countries during my travels, making each journey more meaningful and enriching.",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=hiroshi&backgroundColor=c084fc&clothesColor=3c4142",
      achievement: "World Traveler & Active Mind",
    },
    {
      name: "Yamamoto",
      role: "English Enthusiast",
      content:
        "I used to hate English because of how it was taught in school - all grammar and no real communication. But Dream English showed me that English is about connecting with people around the world. Through their classes, I discovered my passion for cross-cultural communication and now regularly chat with my friend in Singapore in English. It's amazing how language can open up friendships across continents.",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=akiko&backgroundColor=fbbf24&clothesColor=65a30d",
      achievement: "Global Friendship & Communication",
    },
  ];

  const examples = [
    "Business English role-playing for professional communication",
    "TOEIC preparation strategies and practice tests",
    "Intercultural consulting for global business success",
    "TEFL-certified instruction methods for effective learning",
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight">
            ✨ Transformative Success Stories
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Every student who walks through our doors has a unique dream. Here
            are the inspiring journeys of learners who turned their English
            goals into <span className="font-semibold text-orange-600">life-changing achievements</span>.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-200 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-8">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mr-6 border-4 border-orange-200 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-xl">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 font-medium text-lg">
                    {testimonial.role}
                  </p>
                  <div className="bg-gradient-to-r from-orange-400 to-amber-400 text-white text-sm px-4 py-2 rounded-full mt-3 inline-block font-semibold shadow-md">
                    🎉 {testimonial.achievement}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed text-lg font-light">
                &quot;{testimonial.content}&quot;
              </blockquote>
            </div>
          ))}
        </div>

        {/* Real-world Examples */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            🌍 How Our Students Apply English in Real Life
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-6 border-gradient-to-b from-orange-400 to-amber-400 hover:transform hover:scale-105"
                style={{borderLeftColor: index % 2 === 0 ? '#fb923c' : '#f59e0b'}}
              >
                <p className="text-gray-700 font-medium text-lg leading-relaxed">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}