import Button from "../../components/shared/Button";
import {
  FileText,
  MessageCircle,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react";

const Applications = () => {
  return (
    <section className="relative bg-white min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 pt-[80px] pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 pt-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#021640] leading-tight tracking-tight">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Begin your journey with ASME NIT Rourkela and become part of a
              legacy of engineering excellence and innovation.
            </p>
          </div>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Sophomore Induction Form Card */}
          <div className="bg-white border border-gray-200 hover:border-[#021640]/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#021640] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#021640] mb-4">
                Sophomore Induction Form
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Apply for our sophomore induction program and become part of the
                ASME NIT Rourkela community. Take the first step towards
                engineering excellence.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfY2KePb3PUlmtuUxN7pUDC7xcAjdTyCDdSgsIs8vuIJinMSg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  backgroundColor="#021640"
                  textColor="white"
                  className="bg-[#021640] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#021640]/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Apply Now <ArrowRight className="inline w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>

            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>

          {/* WhatsApp Group Card */}
          <div className="bg-white border border-gray-200 hover:border-[#25D366]/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#25D366] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#021640] mb-4">
                WhatsApp Group for Induction
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Join our WhatsApp group to stay updated with induction process,
                announcements, and connect with other applicants throughout your
                journey.
              </p>
              <a
                href="https://chat.whatsapp.com/GV86IjlOeAoC6H4HxO2X2N"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  backgroundColor="#25D366"
                  textColor="white"
                  className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#25D366]/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Join Group <ArrowRight className="inline w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>

            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#25D366] to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 shadow-md">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#021640] mb-6">
              Application Process
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to join our community and begin your
              journey with ASME NIT Rourkela
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#021640] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#021640] mb-4">
                Fill the Form
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Complete the sophomore induction application form with all
                required details and information.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#021640] mb-4">
                Join WhatsApp Group
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow applicants and stay updated with
                announcements and important information.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#021640] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#021640] mb-4">
                Selection Process
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Participate in the selection process and become part of our
                engineering community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
