'use client';

import { 
  ArrowLeft,
  Heart,
  Users,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  Lightbulb,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Andrew Ommaly",
      role: "Co-Founder & Chief Technology Officer",
      bio: "Andrew is a visionary technologist with extensive experience in AI and medical education. He leads the technical development of TIPS AI&apos;s innovative virtual patient simulation platform.",
      expertise: ["AI Development", "Medical Simulation", "Educational Technology", "System Architecture"],
      avatar: "AO",
      location: "Scotland, UK",
      email: "andrew@tipsai.com",
      linkedin: "#",
      achievements: [
        "10+ years in EdTech",
        "AI Research Pioneer",
        "Medical Education Innovator"
      ]
    },
    {
      id: 2,
      name: "Sayed Murad",
      role: "Co-Founder & Chief Executive Officer",
      bio: "Sayed brings deep expertise in healthcare innovation and business strategy. He drives the vision of transforming medical education through AI-powered interactive learning experiences.",
      expertise: ["Healthcare Innovation", "Business Strategy", "Medical Education", "Product Leadership"],
      avatar: "SM",
      location: "Scotland, UK", 
      email: "sayed@tipsai.com",
      linkedin: "#",
      achievements: [
        "Healthcare Tech Leader",
        "Medical Education Expert",
        "Strategic Visionary"
      ]
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of medical education through cutting-edge AI technology"
    },
    {
      icon: Heart,
      title: "Patient Care",
      description: "Improving healthcare outcomes by training better medical professionals"
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "Delivering the highest quality educational experiences and tools"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with medical institutions worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <div className="bg-hero-box/30 border-b border-hero-box/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-secondary-text hover:text-primary-text transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-purple rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary-text">TIPS AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-accent-purple mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text">
                About TIPS AI
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-secondary-text mb-12 max-w-4xl mx-auto leading-relaxed">
              We&apos;re passionate about transforming medical education through innovative AI technology. 
              Our mission is to create safer, more effective learning experiences for the next generation of healthcare professionals.
            </p>

            {/* Mission Statement */}
            <motion.div
              className="bg-hero-box rounded-2xl p-8 max-w-4xl mx-auto border border-hero-box/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Rocket className="w-10 h-10 text-accent-purple mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary-text mb-4">Our Mission</h2>
              <p className="text-secondary-text leading-relaxed">
                To revolutionize medical education by providing AI-powered virtual patients that enable students 
                to practice clinical skills safely, receive instant feedback, and build confidence before treating real patients. 
                We believe that better-trained medical professionals lead to better patient outcomes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-hero-box/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary-text max-w-3xl mx-auto">
              The visionary leaders behind TIPS AI&apos;s innovative medical education platform
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={fadeInUp}>
                <div className="bg-hero-box border border-hero-box/30 hover:border-accent-purple/50 transition-all duration-300 hover:transform hover:scale-105 h-full rounded-2xl p-8">
                  {/* Avatar and Basic Info */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-accent-purple text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-text mb-2">{member.name}</h3>
                    <span className="inline-block bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {member.role}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-secondary-text leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-primary-text font-semibold mb-3 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="border border-accent-purple/30 text-accent-purple text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-primary-text font-semibold mb-3 flex items-center justify-center">
                      <Award className="w-4 h-4 mr-2" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {member.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center justify-center text-secondary-text text-sm">
                          <div className="w-2 h-2 bg-accent-purple rounded-full mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-hero-box/50 pt-6">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="flex items-center text-secondary-text text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {member.location}
                      </div>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-accent-purple hover:bg-accent-purple/20 px-3 py-1 rounded-lg transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4" />
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
              Our Values
            </h2>
            <p className="text-xl text-secondary-text max-w-3xl mx-auto">
              The principles that guide everything we do at TIPS AI
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {companyValues.map((value) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <div className="bg-hero-box border border-hero-box/30 hover:border-accent-purple/50 transition-colors h-full text-center rounded-2xl p-6">
                  <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">{value.title}</h3>
                  <p className="text-secondary-text text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-hero-box/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 text-accent-purple mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
              Join Us in Transforming Medical Education
            </h2>
            <p className="text-xl text-secondary-text mb-8 leading-relaxed">
              Whether you&apos;re a medical student, educator, or institution, we&apos;re here to support 
              your journey in medical education with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/')}
                className="bg-accent-purple text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-purple/90 transition-colors duration-200"
              >
                Explore Platform
              </button>
              <a
                href="mailto:hello@tipsai.com"
                className="border border-accent-purple text-accent-purple font-semibold px-8 py-3 rounded-lg hover:bg-accent-purple/10 transition-colors duration-200 inline-block"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}