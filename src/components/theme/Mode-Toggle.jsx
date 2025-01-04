import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { useTheme } from "@/components/theme/Theme-Provider";

const ModeToggle = () => {
    const { setTheme } = useTheme();

    let value = localStorage.getItem("ui-theme");

    const handleMode = () => {
        value = localStorage.getItem("ui-theme") || "light";
        if (value == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <Button variant="outline" size="icon" onClick={handleMode} className="w-12 h-12">
            {value == "dark" ? (
                <Moon className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            ) : (
                <Sun className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};
export default ModeToggle;
