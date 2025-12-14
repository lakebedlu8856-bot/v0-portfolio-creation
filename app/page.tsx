import { Mail, MapPin, Phone, Linkedin, Send, BarChart3, Users, TrendingUp, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">Lakachew Bedlu</h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Public Administration & Development Management Student
              </p>
              <p className="text-lg text-accent-foreground">Aspiring Data Analyst</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Third-year student at Addis Ababa University with a keen interest in data analysis and problem-solving.
              Passionate about using data to drive decision-making and improve organizational efficiency.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="https://www.linkedin.com/in/lak-bed-7657a035a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 space-y-2 bg-primary text-primary-foreground">
              <BarChart3 className="h-8 w-8" />
              <h3 className="font-semibold text-lg">Data Analysis</h3>
              <p className="text-sm opacity-90">Transform data into insights</p>
            </Card>
            <Card className="p-6 space-y-2">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Leadership</h3>
              <p className="text-sm text-muted-foreground">Team collaboration</p>
            </Card>
            <Card className="p-6 space-y-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">Critical thinking</p>
            </Card>
            <Card className="p-6 space-y-2 bg-accent text-accent-foreground">
              <Database className="h-8 w-8" />
              <h3 className="font-semibold text-lg">Research</h3>
              <p className="text-sm opacity-90">Data-driven decisions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                I am a third-year student at Addis Ababa University (AAU) majoring in Public Administration and
                Development Management. With a keen interest in data analysis and problem-solving, I am passionate about
                using data to drive decision-making and improve organizational efficiency.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I am constantly seeking to grow both personally and professionally by taking on new challenges and
                collaborating with others. My ultimate goal is to contribute to the development of my community by
                applying analytical and leadership skills in the public sector.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:lake.bedlu8856@gmail.com" className="text-primary hover:underline">
                    lake.bedlu8856@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+251907967324" className="text-muted-foreground">
                    0907967324
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Data Analysis</Badge>
                <Badge variant="secondary">SPSS</Badge>
                <Badge variant="secondary">Excel</Badge>
                <Badge variant="secondary">Data Visualization</Badge>
                <Badge variant="secondary">Statistical Software</Badge>
              </div>
            </Card>
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Microsoft Office Suite</Badge>
                <Badge variant="secondary">Google Analytics</Badge>
                <Badge variant="secondary">Tableau</Badge>
              </div>
            </Card>
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Communication</Badge>
                <Badge variant="secondary">Problem-Solving</Badge>
                <Badge variant="secondary">Teamwork</Badge>
                <Badge variant="secondary">Leadership</Badge>
                <Badge variant="secondary">Critical Thinking</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Education</h2>
          <Card className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Bachelor's Degree in Public Administration and Development Management
                </h3>
                <p className="text-lg text-primary mt-2">Addis Ababa University</p>
              </div>
              <Badge variant="outline" className="text-base self-start">
                Currently Enrolled
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Third-year student focusing on public sector management, development strategies, and analytical approaches
              to organizational challenges.
            </p>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Projects & Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-2 w-16 bg-primary rounded-full"></div>
              <h3 className="text-xl font-semibold text-foreground">Academic Research Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engaged in various research initiatives focusing on public administration challenges and development
                management strategies in the Ethiopian context.
              </p>
            </Card>
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-2 w-16 bg-primary rounded-full"></div>
              <h3 className="text-xl font-semibold text-foreground">Data Analysis Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Working with statistical software and data visualization tools to analyze trends and patterns,
                developing practical skills in data-driven decision making.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-lg opacity-90">
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="mailto:lake.bedlu8856@gmail.com">
                  <Mail className="h-5 w-5" />
                  lake.bedlu8856@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/lak-bed-7657a035a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="https://t.me/www0788" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Lakachew Bedlu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
