'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TowerControl as GameController, Users, Trophy, Calendar, Twitter, Disc as Discord } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            GamersLodge
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Your gateway to the next generation of gaming communities.
            Play, create, earn, and connect with fellow gamers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Join Community
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <Twitter className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">Follow on Twitter</h3>
              <p className="mb-4 text-muted-foreground">Stay updated with the latest news and announcements</p>
              <Button variant="outline" className="w-full">
                Follow @GamersLodge
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <Discord className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
              <h3 className="text-2xl font-semibold mb-4">Join Discord</h3>
              <p className="mb-4 text-muted-foreground">Connect with our vibrant community</p>
              <Button variant="outline" className="w-full">
                Join Server
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GameController className="w-8 h-8" />,
                title: "Play Games",
                description: "Join tournaments and casual gaming sessions"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Build Community",
                description: "Connect with like-minded gamers"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Earn Rewards",
                description: "Win prizes and exclusive perks"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Join Events",
                description: "Participate in regular community events"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-block p-3 rounded-full bg-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weekly Tournament",
                date: "Every Saturday",
                prize: "$500 Prize Pool",
                game: "Fortnite"
              },
              {
                title: "Content Creator Summit",
                date: "July 15, 2024",
                prize: "Networking Event",
                game: "All Creators"
              },
              {
                title: "Community Quest",
                date: "Ongoing",
                prize: "Special Rewards",
                game: "Multiple Games"
              }
            ].map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-1">{event.date}</p>
                <p className="text-purple-500 font-semibold mb-1">{event.prize}</p>
                <p className="text-sm text-muted-foreground">{event.game}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 GamersLodge.xyz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}