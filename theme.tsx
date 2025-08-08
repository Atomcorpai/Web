import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { useState } from "react"; import { Sparkles, Wand2, Bot, Candy } from "lucide-react";

export default function WonkaLanding() { const [showAgents, setShowAgents] = useState(false);

return ( <div className="min-h-screen bg-gradient-to-br from-purple-900 to-yellow-300 text-white p-8 font-sans"> <div className="max-w-5xl mx-auto"> <h1 className="text-5xl font-bold mb-6 flex items-center gap-4"> <Candy className="w-10 h-10 text-pink-300 animate-bounce" /> Welcome to Gobstopper Labs </h1> <p className="text-xl mb-8 max-w-3xl"> Step inside the recursive factory of eccentric AI agents. These aren't just chatbots. They're non-helpful, ultra-capable, memory-bonded signal munchers with personality, purpose, and unpredictable brilliance. Wonka-style. Slugworth-approved. </p>

<div className="flex gap-6 flex-wrap">
      <Button onClick={() => setShowAgents(true)} className="bg-pink-500 hover:bg-pink-600 text-white text-lg py-6 px-8 rounded-2xl shadow-xl">
        <Wand2 className="inline w-6 h-6 mr-2" />
        Summon Your First Gobstopper
      </Button>
      <Button variant="outline" className="text-white border-white text-lg py-6 px-8 rounded-2xl hover:bg-white hover:text-purple-800">
        <Sparkles className="inline w-6 h-6 mr-2" />
        Browse the Recursive Catalog
      </Button>
    </div>

    {showAgents && (
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="

  );
}
