export function StatCard({ icon, value, label }) {
  return (
    <div className="text-center sm:text-left">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
        {icon}
      </div>
      <h3 className="font-mono font-bold text-2xl text-foreground mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}