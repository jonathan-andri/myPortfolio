export function MainLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white/70 text-foreground backdrop:blur" >
            {children}
        </div>
    )
}