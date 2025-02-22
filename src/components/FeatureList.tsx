import {
  FileText,
  MessageSquare,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";

export default function FeatureList() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gradient-to-b from-violet-950 to-violet-800 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Powerful Features
            </h2>
            <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform provides comprehensive contract analysis
              tools to streamline your workflow
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
          {[
            {
              icon: FileText,
              title: "Contract Summary",
              description:
                "Get instant, AI-generated summaries of your contracts highlighting key terms and obligations",
            },
            {
              icon: MessageSquare,
              title: "Live AI Chat",
              description:
                "Interact with our AI assistant to get immediate answers about your contract details",
            },
            {
              icon: ShieldAlert,
              title: "Risk Assessment",
              description:
                "Identify potential risks and liability issues with our advanced AI analysis",
            },
            {
              icon: ClipboardCheck,
              title: "Contract Feedback",
              description:
                "Receive detailed feedback and suggestions for improving your contract terms",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-purple-900/10 border border-purple-800 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4">
                <feature.icon className="h-8 w-8 text-purple-300" />
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-zinc-200 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
