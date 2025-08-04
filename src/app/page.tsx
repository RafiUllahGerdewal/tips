'use client';

import { 
  Button, 
  Card, 
  CardBody, 
  Chip,
  Divider,
  Avatar,
  Accordion,
  AccordionItem
} from "@heroui/react";
import { 
  MessageCircle, 
  Mic, 
  Video, 
  Brain, 
  Star,
  Check,
  Play,
  Heart,
  Shield,
  Target,
  BookOpen,
  Activity,
  UserCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Users,
  Award,
  GraduationCap,
  Zap,
  Eye,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
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
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Talk Directly to AI Patients",
      description: "Practice real medical scenarios with 500+ AI patients across different conditions, ages, and complexity levels. Build clinical skills through interactive conversations."
    },
    {
      icon: Eye,
      title: "Receive Instant Feedback",
      description: "Get immediate insights on diagnostic accuracy, communication skills, clinical judgment, and patient interaction quality after every session."
    },
    {
      icon: Users,
      title: "Continuity & Follow-ups",
      description: "Schedule follow-ups and maintain ongoing patient relationships. AI patients remember previous interactions and can initiate contact about progress."
    },
    {
      icon: Zap,
      title: "Observational AI",
      description: "Our ambient AI monitors sessions in real-time, identifying effective techniques, spotting mistakes, and highlighting key clinical interactions."
    },
    {
      icon: Shield,
      title: "Safe Learning Environment",
      description: "Practice without risk to real patients. Make mistakes, try different approaches, and learn from feedback in a controlled environment."
    },
    {
      icon: Award,
      title: "Evidence-Based Training",
      description: "Built on research from University of St Andrews, ensuring your training is backed by the latest medical education science."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical School Professor",
      institution: "University of Edinburgh",
      quote: "My students can't say enough good things about TIPS AI. In just one week, they feel like they've made real progress in their clinical skills.",
      avatar: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Clinical Skills Director",
      institution: "Glasgow Medical School",
      quote: "The instant feedback system is revolutionary. Students get specific, actionable insights that help them improve immediately.",
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      role: "Medical Education Lead",
      institution: "Aberdeen University",
      quote: "TIPS AI has transformed how we teach clinical skills. The AI patients are incredibly realistic and the learning outcomes are outstanding.",
      avatar: "EW"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "/ month",
      description: "Perfect for individual students",
      features: [
        "5 AI Patients",
        "Basic Feedback",
        "Limited Scenarios",
        "Standard Support"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Professional",
      price: "$39",
      period: "/ month",
      description: "For medical schools and institutions",
      features: [
        "500+ AI Patients",
        "Full Feedback Access",
        "All Scenarios",
        "Advanced Analytics",
        "Priority Support",
        "Custom Scenarios"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      period: "",
      description: "For large institutions",
      features: [
        "Everything in Professional",
        "LMS Integration",
        "Custom Onboarding",
        "Dedicated Success Manager",
        "API Access",
        "White-label Options"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "What types of patients can I practice with?",
      answer: "Over 500 AI patients ranging from children to elderly adults. You'll practice everything from routine check-ups to complex emergency scenarios, covering all major medical specialties."
    },
    {
      question: "How does the feedback system work?",
      answer: "Our AI analyzes your interactions in real-time, providing instant feedback on diagnostic accuracy, communication skills, clinical judgment, and patient interaction quality."
    },
    {
      question: "Can I customize the patient scenarios?",
      answer: "Yes! You can adjust patient complexity, presenting problems, cultural background, emotional state, and more to match your specific learning objectives."
    },
    {
      question: "How does billing work for institutions?",
      answer: "We offer flexible billing options. Some institutions pay directly, others pass the cost to students as a lab fee. We also support grant-based funding and can work with your existing budget structure."
    },
    {
      question: "Is TIPS AI suitable for all medical specialties?",
      answer: "Absolutely! Our platform covers all major medical specialties including internal medicine, surgery, pediatrics, psychiatry, emergency medicine, and more."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TIPS AI</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Academic', href: '/academic' },
                { name: 'About Us', href: '/about' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
              >
                Sign In
              </Button>
              <Button 
                color="primary"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Chip
                color="primary"
                variant="flat"
                className="bg-blue-50 text-blue-600 mb-6"
              >
                Join 10,000+ Medical Students and Educators
              </Chip>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI Patients for Better
                <span className="text-blue-600"> Medical Training</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Speak directly with AI patients to practice clinical skills, explore different scenarios, 
                and get immediate feedback. Transform medical education with evidence-based AI training.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                color="primary"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
              >
                Get Started Now
              </Button>
              <Button 
                size="lg"
                variant="bordered"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
              >
                Book a Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div 
                className="text-center"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">AI Patients</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-gray-600">Students Trained</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features That Actually Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every part of TIPS AI is built to replicate the complexity, flow, and unpredictability of real clinical practice.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg h-full">
                  <CardBody className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Medical Schools & Educators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what professors worldwide are saying about TIPS AI
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white border border-gray-200 h-full">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar 
                        name={testimonial.avatar}
                        size="md"
                        className="w-12 h-12 bg-blue-600 text-white font-semibold mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.institution}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a plan that fits your needs and unlock the full potential of AI-powered medical training
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`bg-white border-2 h-full ${plan.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
                  <CardBody className="p-8">
                    {plan.popular && (
                      <Chip
                        color="primary"
                        variant="flat"
                        className="bg-blue-600 text-white mb-4"
                      >
                        Most Popular
                      </Chip>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      color={plan.popular ? "primary" : "default"}
                      variant={plan.popular ? "solid" : "bordered"}
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about TIPS AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion variant="splitted">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={faq.question}
                  className="text-left"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Everything you need to train better medical professionals
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Real conversations. Real feedback. Real growth. Let's build better healthcare, together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                Get Started Now
              </Button>
              <Button 
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TIPS AI</span>
              </div>
              <p className="text-gray-400">
                Transforming medical education through AI-powered patient simulation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/academic" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <Divider className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TIPS AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
