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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B2044] to-[#021640] text-white py-20">
        <div className="absolute inset-0 bg-[#0B2044] opacity-90"></div>
        <div className="relative z-10 px-8 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Join Our Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Begin your journey with ASME NIT Rourkela and become part of a
            legacy of engineering excellence and innovation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 md:px-12 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0B2044] mb-8">
            Applications
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto leading-relaxed">
            Take the first step towards joining our community. Apply for
            sophomore induction and connect with fellow members to begin your
            journey in mechanical engineering excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sophomore Induction Form Card */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B2044] to-[#51B8F2]"></div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#0B2044] to-[#51B8F2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B2044] mb-4">
                  Sophomore Induction Form
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Apply for our sophomore induction program and become part of
                  the ASME NIT Rourkela community. Take the first step towards
                  engineering excellence.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfY2KePb3PUlmtuUxN7pUDC7xcAjdTyCDdSgsIs8vuIJinMSg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    backgroundColor="#0B2044"
                    textColor="white"
                    style={{
                      padding: "14px 28px",
                      fontSize: "16px",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      fontWeight: "600",
                    }}
                    className="hover:bg-[#021640] transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>

            {/* WhatsApp Group Card */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#25D366] to-[#128C7E]"></div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B2044] mb-4">
                  WhatsApp Group for Induction
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Join our WhatsApp group to stay updated with induction
                  process, announcements, and connect with other applicants
                  throughout your journey.
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
                    style={{
                      padding: "14px 28px",
                      fontSize: "16px",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      fontWeight: "600",
                    }}
                    className="hover:bg-[#128C7E] transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Join Group
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Application Process Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 border border-gray-100 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B2044] mb-6">
                Application Process
              </h3>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                Follow these simple steps to join our community and begin your
                journey with ASME NIT Rourkela
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B2044] to-[#51B8F2] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-0.5 bg-[#51B8F2] rounded-full mb-4 opacity-60"></div>
                  <h4 className="text-lg font-bold text-[#0B2044] mb-3">
                    Fill the Form
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Complete the sophomore induction application form with all
                    required details and information.
                  </p>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-0.5 bg-[#25D366] rounded-full mb-4 opacity-60"></div>
                  <h4 className="text-lg font-bold text-[#0B2044] mb-3">
                    Join WhatsApp Group
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with fellow applicants and stay updated with
                    announcements and important information.
                  </p>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B2044] to-[#51B8F2] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-0.5 bg-[#51B8F2] rounded-full mb-4 opacity-60"></div>
                  <h4 className="text-lg font-bold text-[#0B2044] mb-3">
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
        </div>
      </div>
    </div>
  );
};

export default Applications;
