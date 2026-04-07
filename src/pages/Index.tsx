import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import piLabsLogo from "@/assets/pi-labs-logo.svg";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 7;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen bg-muted/50 p-4 lg:p-5 gap-4 lg:gap-5">
      {/* Video Side */}
      <div className="hidden lg:flex lg:w-[70%] relative overflow-hidden rounded-2xl bg-card">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        >
          <source src="/videos/login-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Login Side */}
      <div className="flex w-full lg:w-[30%] items-center justify-center p-6 sm:p-10 lg:p-10 rounded-2xl bg-card">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-4">
            <img src={piLabsLogo} alt="Pi Labs" className="h-8 w-auto" />
            <div className="space-y-2 pt-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground leading-tight">
                Innovations for<br />a safer tomorrow
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign in to experience unveiling truth.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                id="email"
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-border bg-card focus-visible:ring-primary/30"
              />
            </div>

            <div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl border-border bg-card pr-10 focus-visible:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors mt-2">
                Forgot Password?
              </button>
            </div>

            <div className="pt-2 space-y-3">
              <Button type="submit" variant="brand" size="lg" className="w-full h-12 rounded-xl text-sm font-semibold">
                Sign in with email
              </Button>

              <Button variant="secondary" size="lg" className="w-full h-12 rounded-xl text-sm font-medium bg-muted text-foreground hover:bg-muted/80">
                <span className="flex flex-col items-center leading-tight">
                  <span>Don't have an account?</span>
                  <span className="font-semibold">Create one</span>
                </span>
              </Button>
            </div>
          </form>

          <div className="space-y-4 pt-2">
            <div className="w-full border-t border-border" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              By proceeding, you acknowledge that you have read, understood, and agree to{" "}
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">Terms of Service</button>
              {" "}and{" "}
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">Privacy Policy</button>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
